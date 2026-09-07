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

await db.executeMultiple(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE,
    password_hash TEXT NOT NULL,
    created_at TEXT NOT NULL DEFAULT (datetime('now'))
  );

  CREATE TABLE IF NOT EXISTS vocabulary (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    german TEXT NOT NULL,
    amharic TEXT NOT NULL,
    pronunciation TEXT NOT NULL DEFAULT '',
    level TEXT NOT NULL CHECK (level IN ('A1', 'A2', 'B1')),
    category TEXT NOT NULL,
    example_de TEXT NOT NULL DEFAULT '',
    example_am TEXT NOT NULL DEFAULT ''
  );

  CREATE TABLE IF NOT EXISTS lessons (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    subtitle TEXT NOT NULL DEFAULT '',
    level TEXT NOT NULL CHECK (level IN ('A1', 'A2', 'B1')),
    category TEXT NOT NULL,
    content TEXT NOT NULL,
    created_at TEXT NOT NULL DEFAULT (datetime('now'))
  );

  CREATE TABLE IF NOT EXISTS progress (
    user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    vocab_id INTEGER NOT NULL REFERENCES vocabulary(id) ON DELETE CASCADE,
    correct_count INTEGER NOT NULL DEFAULT 0,
    wrong_count INTEGER NOT NULL DEFAULT 0,
    last_reviewed TEXT NOT NULL DEFAULT (datetime('now')),
    PRIMARY KEY (user_id, vocab_id)
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
  level: 'A1' | 'A2' | 'B1'
  category: string
  example_de: string
  example_am: string
}

export interface LessonRow {
  id: number
  title: string
  subtitle: string
  level: 'A1' | 'A2' | 'B1'
  category: string
  content: string
  created_at: string
}