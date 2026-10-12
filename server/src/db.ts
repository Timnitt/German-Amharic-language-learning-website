import 'dotenv/config'
import { createClient, type Client } from '@libsql/client'
import path from 'node:path'
import fs from 'node:fs'

const DATA_DIR = process.env.DATA_DIR || path.join(process.cwd(), 'data')
fs.mkdirSync(DATA_DIR, { recursive: true })

const url = process.env.TURSO_DATABASE_URL || `file:${path.join(DATA_DIR, 'app.db')}`
const authToken = process.env.TURSO_AUTH_TOKEN

export const db: Client = authToken ? createClient({ url, authToken }) : createClient({ url })

try {
  await db.execute('PRAGMA foreign_keys = ON')
} catch {
  // Hosted libSQL endpoints don't always allow PRAGMA over the wire - safe to ignore.
}

const VOCABULARY_COLUMNS = `
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    german TEXT NOT NULL,
    amharic TEXT NOT NULL,
    pronunciation TEXT NOT NULL DEFAULT '',
    level TEXT NOT NULL CHECK (level IN ('A1', 'A2', 'B1', 'B2')),
    category TEXT NOT NULL,
    example_de TEXT NOT NULL DEFAULT '',
    example_am TEXT NOT NULL DEFAULT ''`

const LESSONS_COLUMNS = `
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    subtitle TEXT NOT NULL DEFAULT '',
    level TEXT NOT NULL CHECK (level IN ('A1', 'A2', 'B1', 'B2')),
    category TEXT NOT NULL,
    content TEXT NOT NULL,
    created_at TEXT NOT NULL DEFAULT (datetime('now'))`

await db.executeMultiple(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE,
    password_hash TEXT NOT NULL,
    created_at TEXT NOT NULL DEFAULT (datetime('now'))
  );

  CREATE TABLE IF NOT EXISTS vocabulary (${VOCABULARY_COLUMNS}
  );

  CREATE TABLE IF NOT EXISTS lessons (${LESSONS_COLUMNS}
  );

  CREATE TABLE IF NOT EXISTS progress (
    user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    vocab_id INTEGER NOT NULL REFERENCES vocabulary(id) ON DELETE CASCADE,
    correct_count INTEGER NOT NULL DEFAULT 0,
    wrong_count INTEGER NOT NULL DEFAULT 0,
    last_reviewed TEXT NOT NULL DEFAULT (datetime('now')),
    ease_factor REAL NOT NULL DEFAULT 2.5,
    interval_days INTEGER NOT NULL DEFAULT 0,
    next_review TEXT NOT NULL DEFAULT (datetime('now')),
    repetitions INTEGER NOT NULL DEFAULT 0,
    PRIMARY KEY (user_id, vocab_id)
  );

  CREATE TABLE IF NOT EXISTS lesson_progress (
    user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    lesson_id INTEGER NOT NULL REFERENCES lessons(id) ON DELETE CASCADE,
    completed_at TEXT NOT NULL DEFAULT (datetime('now')),
    PRIMARY KEY (user_id, lesson_id)
  );

  CREATE TABLE IF NOT EXISTS daily_activity (
    user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    activity_date TEXT NOT NULL,
    reviews_count INTEGER NOT NULL DEFAULT 0,
    PRIMARY KEY (user_id, activity_date)
  );

  CREATE TABLE IF NOT EXISTS quiz_results (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    level TEXT NOT NULL,
    score INTEGER NOT NULL,
    total INTEGER NOT NULL,
    taken_at TEXT NOT NULL DEFAULT (datetime('now'))
  );
`)

// Migrations for databases created by an older schema. CREATE TABLE IF NOT EXISTS
// leaves existing tables untouched, so column and constraint changes are applied here.
// Each step checks the current schema first, so this is safe to run on every start.

async function columnNames(table: string): Promise<string[]> {
  const rs = await db.execute(`SELECT name FROM pragma_table_info('${table}')`)
  return rs.rows.map((r) => String(r.name))
}

// Spaced-repetition columns on progress. ALTER TABLE can't use an expression default,
// so next_review starts at last_reviewed, which makes existing words due right away.
const progressColumns = await columnNames('progress')
const srsColumns: [string, string][] = [
  ['ease_factor', 'REAL NOT NULL DEFAULT 2.5'],
  ['interval_days', 'INTEGER NOT NULL DEFAULT 0'],
  ['next_review', "TEXT NOT NULL DEFAULT '1970-01-01 00:00:00'"],
  ['repetitions', 'INTEGER NOT NULL DEFAULT 0'],
]
const missingSrs = srsColumns.filter(([name]) => !progressColumns.includes(name))
if (missingSrs.length > 0) {
  await db.batch(
    [
      ...missingSrs.map(([name, def]) => `ALTER TABLE progress ADD COLUMN ${name} ${def}`),
      ...(missingSrs.some(([name]) => name === 'next_review')
        ? ['UPDATE progress SET next_review = last_reviewed']
        : []),
    ],
    'write',
  )
  console.log(`Migrated progress: added ${missingSrs.map(([name]) => name).join(', ')}`)
}

// SQLite can't alter a CHECK constraint, so tables whose level check predates B2 are
// rebuilt. migrate() turns foreign keys off; otherwise DROP TABLE would cascade-delete
// the progress and lesson_progress rows that reference them. Row ids are kept.
for (const [table, columns] of [
  ['vocabulary', VOCABULARY_COLUMNS],
  ['lessons', LESSONS_COLUMNS],
] as const) {
  const rs = await db.execute({
    sql: "SELECT sql FROM sqlite_master WHERE type = 'table' AND name = ?",
    args: [table],
  })
  if (String(rs.rows[0]?.sql ?? '').includes("'B2'")) continue

  const cols = (await columnNames(table)).join(', ')
  await db.migrate([
    `DROP TABLE IF EXISTS ${table}_new`,
    `CREATE TABLE ${table}_new (${columns})`,
    `INSERT INTO ${table}_new (${cols}) SELECT ${cols} FROM ${table}`,
    `DROP TABLE ${table}`,
    `ALTER TABLE ${table}_new RENAME TO ${table}`,
  ])
  console.log(`Migrated ${table}: level check now allows B2`)
}

type Args = Record<string, unknown> | unknown[]

export async function all<T = unknown>(sql: string, args: Args = []): Promise<T[]> {
  const rs = await db.execute({ sql, args: args as never })
  return rs.rows as unknown as T[]
}

export async function get<T = unknown>(sql: string, args: Args = []): Promise<T | undefined> {
  const rs = await db.execute({ sql, args: args as never })
  return rs.rows[0] as unknown as T | undefined
}

export async function run(
  sql: string,
  args: Args = [],
): Promise<{ lastInsertRowid: bigint | undefined; changes: number }> {
  const rs = await db.execute({ sql, args: args as never })
  return { lastInsertRowid: rs.lastInsertRowid, changes: rs.rowsAffected }
}

export async function batch(statements: { sql: string; args?: Args }[]): Promise<void> {
  if (statements.length === 0) return
  await db.batch(
    statements.map((s) => ({ sql: s.sql, args: (s.args ?? []) as never })),
    'write',
  )
}

export interface UserRow {
  id: number
  name: string
  email: string
  password_hash: string
  created_at: string
}

export interface VocabRow {
  id: number
  german: string
  amharic: string
  pronunciation: string
  level: 'A1' | 'A2' | 'B1' | 'B2'
  category: string
  example_de: string
  example_am: string
}

export interface LessonRow {
  id: number
  title: string
  subtitle: string
  level: 'A1' | 'A2' | 'B1' | 'B2'
  category: string
  content: string
  created_at: string
}