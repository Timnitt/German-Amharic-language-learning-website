import fs from 'node:fs'
import os from 'node:os'
import path from 'node:path'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { createClient, type Client } from '@libsql/client'

// db.ts migrates on import. These tests build a database with an older schema by hand,
// then import db.ts against it and check the upgrade keeps every row.
// db.js is imported dynamically (after vi.resetModules) so each test gets a fresh module
// pointed at its own DATA_DIR.

type DbModule = typeof import('../../src/db.js')

const opened: Client[] = []

afterEach(() => {
  for (const c of opened.splice(0)) c.close()
})

function newDataDir(): string {
  return fs.mkdtempSync(path.join(os.tmpdir(), 'ga-migrate-'))
}

function open(dir: string): Client {
  const c = createClient({ url: `file:${path.join(dir, 'app.db')}` })
  opened.push(c)
  return c
}

async function importDb(dir: string): Promise<DbModule> {
  process.env.DATA_DIR = dir
  vi.resetModules()
  const mod = await import('../../src/db.js')
  opened.push(mod.db)
  return mod
}

// Schema as it was before spaced repetition and before B2: no SRS columns on progress,
// and level CHECKs that stop at B1.
const LEGACY_SCHEMA = `
  CREATE TABLE users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE,
    password_hash TEXT NOT NULL,
    created_at TEXT NOT NULL DEFAULT (datetime('now'))
  );
  CREATE TABLE vocabulary (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    german TEXT NOT NULL,
    amharic TEXT NOT NULL,
    pronunciation TEXT NOT NULL DEFAULT '',
    level TEXT NOT NULL CHECK (level IN ('A1', 'A2', 'B1')),
    category TEXT NOT NULL,
    example_de TEXT NOT NULL DEFAULT '',
    example_am TEXT NOT NULL DEFAULT ''
  );
  CREATE TABLE lessons (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    subtitle TEXT NOT NULL DEFAULT '',
    level TEXT NOT NULL CHECK (level IN ('A1', 'A2', 'B1')),
    category TEXT NOT NULL,
    content TEXT NOT NULL,
    created_at TEXT NOT NULL DEFAULT (datetime('now'))
  );
  CREATE TABLE progress (
    user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    vocab_id INTEGER NOT NULL REFERENCES vocabulary(id) ON DELETE CASCADE,
    correct_count INTEGER NOT NULL DEFAULT 0,
    wrong_count INTEGER NOT NULL DEFAULT 0,
    last_reviewed TEXT NOT NULL DEFAULT (datetime('now')),
    PRIMARY KEY (user_id, vocab_id)
  );
  CREATE TABLE lesson_progress (
    user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    lesson_id INTEGER NOT NULL REFERENCES lessons(id) ON DELETE CASCADE,
    completed_at TEXT NOT NULL DEFAULT (datetime('now')),
    PRIMARY KEY (user_id, lesson_id)
  );

  INSERT INTO users (id, name, email, password_hash) VALUES (1, 'Old User', 'old@example.com', 'x');
  -- Non-contiguous ids so a rebuild that renumbers rows would be caught.
  INSERT INTO vocabulary (id, german, amharic, level, category) VALUES
    (5, 'Haus', 'ቤት', 'A1', 'home'),
    (9, 'Arbeit', 'ሥራ', 'B1', 'work');
  INSERT INTO lessons (id, title, level, category, content) VALUES
    (3, 'Old lesson', 'A1', 'grammar', '# hi');
  INSERT INTO progress (user_id, vocab_id, correct_count, wrong_count, last_reviewed) VALUES
    (1, 5, 4, 1, '2025-01-02 03:04:05'),
    (1, 9, 0, 2, '2025-02-03 04:05:06');
  INSERT INTO lesson_progress (user_id, lesson_id, completed_at) VALUES
    (1, 3, '2025-03-04 05:06:07');
`

async function createLegacyDb(dir: string): Promise<void> {
  const c = open(dir)
  await c.execute('PRAGMA foreign_keys = ON')
  await c.executeMultiple(LEGACY_SCHEMA)
  c.close()
}

describe('db migrations', () => {
  it('creates the full schema on an empty database', async () => {
    const { all } = await importDb(newDataDir())
    const tables = (await all<{ name: string }>(
      "SELECT name FROM sqlite_master WHERE type = 'table' AND name NOT LIKE 'sqlite_%' ORDER BY name",
    )).map((t) => t.name)
    expect(tables).toEqual([
      'daily_activity',
      'lesson_progress',
      'lessons',
      'progress',
      'quiz_results',
      'users',
      'vocabulary',
    ])
  })

  it('upgrades a legacy database without losing or renumbering rows', async () => {
    const dir = newDataDir()
    await createLegacyDb(dir)
    vi.spyOn(console, 'log').mockImplementation(() => {})

    const { all, run } = await importDb(dir)

    // Spaced-repetition columns added; existing words are due right away.
    const progress = await all<Record<string, unknown>>('SELECT * FROM progress ORDER BY vocab_id')
    expect(progress).toEqual([
      {
        user_id: 1,
        vocab_id: 5,
        correct_count: 4,
        wrong_count: 1,
        last_reviewed: '2025-01-02 03:04:05',
        ease_factor: 2.5,
        interval_days: 0,
        next_review: '2025-01-02 03:04:05',
        repetitions: 0,
      },
      {
        user_id: 1,
        vocab_id: 9,
        correct_count: 0,
        wrong_count: 2,
        last_reviewed: '2025-02-03 04:05:06',
        ease_factor: 2.5,
        interval_days: 0,
        next_review: '2025-02-03 04:05:06',
        repetitions: 0,
      },
    ])

    // Rebuilt tables keep ids, and rows that reference them were not cascade-deleted.
    const vocab = await all<{ id: number; german: string }>('SELECT id, german FROM vocabulary ORDER BY id')
    expect(vocab).toEqual([
      { id: 5, german: 'Haus' },
      { id: 9, german: 'Arbeit' },
    ])
    const lessons = await all<{ id: number; title: string }>('SELECT id, title FROM lessons')
    expect(lessons).toEqual([{ id: 3, title: 'Old lesson' }])
    const lessonProgress = await all('SELECT user_id, lesson_id, completed_at FROM lesson_progress')
    expect(lessonProgress).toEqual([{ user_id: 1, lesson_id: 3, completed_at: '2025-03-04 05:06:07' }])

    // B2 is now accepted, anything else still rejected.
    await run("INSERT INTO vocabulary (german, amharic, level, category) VALUES ('Zukunft', 'ወደፊት', 'B2', 'x')")
    await run("INSERT INTO lessons (title, level, category, content) VALUES ('New', 'B2', 'x', 'c')")
    await expect(
      run("INSERT INTO vocabulary (german, amharic, level, category) VALUES ('Bad', 'x', 'C1', 'x')"),
    ).rejects.toThrow(/CHECK/)

    // Foreign keys still enforced after the rebuild.
    const fk = await all('PRAGMA foreign_key_check')
    expect(fk).toEqual([])
  })

  it('is a no-op when run again on an up-to-date database', async () => {
    const dir = newDataDir()
    await createLegacyDb(dir)
    const log = vi.spyOn(console, 'log').mockImplementation(() => {})
    const first = await importDb(dir)
    expect(log.mock.calls.flat().join('\n')).toMatch(/Migrated progress/)
    const before = await first.all('SELECT * FROM progress ORDER BY vocab_id')
    const schemaBefore = await first.all('SELECT name, sql FROM sqlite_master ORDER BY name')
    first.db.close()

    log.mockClear()
    const second = await importDb(dir)
    expect(log).not.toHaveBeenCalled()
    expect(await second.all('SELECT * FROM progress ORDER BY vocab_id')).toEqual(before)
    expect(await second.all('SELECT name, sql FROM sqlite_master ORDER BY name')).toEqual(schemaBefore)
  })
})
