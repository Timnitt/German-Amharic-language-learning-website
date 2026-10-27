import fs from 'node:fs'
import os from 'node:os'
import path from 'node:path'
import { beforeEach, expect } from 'vitest'

// Runs before every test file's own imports. Vitest isolates modules per file, so each
// file that imports src/db.js gets its own fresh SQLite database in a temp directory.

// server/.env holds the production Turso credentials and db.ts loads it via dotenv.
// vitest.config.ts blanks these vars (dotenv never overrides set vars); this guard makes
// sure nobody removes that and points the suite at the live database.
if (process.env.TURSO_DATABASE_URL || process.env.TURSO_AUTH_TOKEN) {
  throw new Error('Refusing to run tests with TURSO_* set: tests must never touch the live database')
}

process.env.DATA_DIR = fs.mkdtempSync(path.join(os.tmpdir(), 'ga-test-'))

// A test that asserts nothing (e.g. a forgotten await) fails instead of passing silently.
beforeEach(() => {
  expect.hasAssertions()
})
