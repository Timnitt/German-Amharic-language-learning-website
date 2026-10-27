import fs from 'node:fs'
import os from 'node:os'
import path from 'node:path'
import { beforeEach, expect } from 'vitest'

// Each test file gets its own temp SQLite DB. Never let tests reach the live Turso DB.
if (process.env.TURSO_DATABASE_URL || process.env.TURSO_AUTH_TOKEN) {
  throw new Error('Refusing to run tests with TURSO_* set: tests must never touch the live database')
}

process.env.DATA_DIR = fs.mkdtempSync(path.join(os.tmpdir(), 'ga-test-'))

beforeEach(() => {
  expect.hasAssertions()
})
