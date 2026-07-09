import Database from 'better-sqlite3'
import path from 'node:path'
import fs from 'node:fs'

const DATA_DIR = process.env.DATA_DIR || path.join(process.cwd(), 'data')
fs.mkdirSync(DATA_DIR, { recursive: true }) //creates server/data 

export const db = new Database(path.join(DATA_DIR, 'app.db')) //creates app.db
db.pragma('journal_mode = WAL')
db.pragma('foreign_keys = ON')

db.exec(`
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