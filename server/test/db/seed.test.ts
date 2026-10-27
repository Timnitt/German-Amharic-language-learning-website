import { beforeAll, describe, expect, it, vi } from 'vitest'
import bcrypt from 'bcryptjs'
import { all, get, run } from '../../src/db.js'
import { seedDatabase } from '../../src/seed.js'
import { lessons, vocabulary } from '../../src/seedData.js'
import { LEVELS } from '../../src/validation.js'

// Seeding matches existing rows by german word / lesson title, so duplicates in
// seedData.ts would be silently dropped. These checks keep the content honest.

describe('seedData content', () => {
  it('has the amount of content the README promises', () => {
    expect(vocabulary.length).toBeGreaterThanOrEqual(1000)
    expect(lessons.length).toBeGreaterThanOrEqual(22)
  })

  it('uses only valid levels', () => {
    const bad = [...vocabulary, ...lessons].filter((e) => !LEVELS.includes(e.level))
    expect(bad).toEqual([])
  })

  it('has no duplicate German words or lesson titles', () => {
    const dupes = (xs: string[]) => xs.filter((x, i) => xs.indexOf(x) !== i)
    expect(dupes(vocabulary.map((v) => v.german))).toEqual([])
    expect(dupes(lessons.map((l) => l.title))).toEqual([])
  })

  it('fills every required vocabulary field', () => {
    const incomplete = vocabulary.filter(
      (v) => !v.german.trim() || !v.amharic.trim() || !v.category.trim() || !v.pronunciation.trim(),
    )
    expect(incomplete.map((v) => v.german)).toEqual([])
  })

  it('gives every lesson a title, category and content', () => {
    const incomplete = lessons.filter((l) => !l.title.trim() || !l.category.trim() || !l.content.trim())
    expect(incomplete.map((l) => l.title)).toEqual([])
  })

  it('has enough words per level for a quiz (needs 4)', () => {
    for (const level of LEVELS) {
      expect(vocabulary.filter((v) => v.level === level).length, level).toBeGreaterThanOrEqual(4)
    }
  })
})

describe('seedDatabase', () => {
  beforeAll(async () => {
    vi.spyOn(console, 'log').mockImplementation(() => {})
    await seedDatabase()
  })

  it('inserts all content into an empty database', async () => {
    expect((await get<{ c: number }>('SELECT COUNT(*) AS c FROM vocabulary'))!.c).toBe(vocabulary.length)
    expect((await get<{ c: number }>('SELECT COUNT(*) AS c FROM lessons'))!.c).toBe(lessons.length)
  })

  it('does not duplicate anything when run again', async () => {
    vi.spyOn(console, 'log').mockImplementation(() => {})
    await seedDatabase()
    expect((await get<{ c: number }>('SELECT COUNT(*) AS c FROM vocabulary'))!.c).toBe(vocabulary.length)
    expect((await get<{ c: number }>('SELECT COUNT(*) AS c FROM lessons'))!.c).toBe(lessons.length)
    expect(await all("SELECT id FROM users WHERE email = 'demo@example.com'")).toHaveLength(1)
  })

  it('adds missing entries to an existing database', async () => {
    vi.spyOn(console, 'log').mockImplementation(() => {})
    const word = vocabulary[0].german
    const title = lessons[0].title
    await run('DELETE FROM vocabulary WHERE german = ?', [word])
    await run('DELETE FROM lessons WHERE title = ?', [title])
    await seedDatabase()
    expect(await get('SELECT id FROM vocabulary WHERE german = ?', [word])).toBeDefined()
    expect(await get('SELECT id FROM lessons WHERE title = ?', [title])).toBeDefined()
  })

  it('resets the demo password to DEMO_PASSWORD', async () => {
    vi.spyOn(console, 'log').mockImplementation(() => {})
    await run("UPDATE users SET password_hash = 'broken' WHERE email = 'demo@example.com'")
    await seedDatabase()
    const row = await get<{ password_hash: string }>(
      "SELECT password_hash FROM users WHERE email = 'demo@example.com'",
    )
    expect(bcrypt.compareSync(process.env.DEMO_PASSWORD || 'demo1234', row!.password_hash)).toBe(true)
  })
})
