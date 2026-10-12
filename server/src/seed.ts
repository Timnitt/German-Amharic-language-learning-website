import { all, run, batch } from './db.js'
import { vocabulary, lessons } from './seedData.js'
import bcrypt from 'bcryptjs'

// Inserts seed entries that aren't in the DB yet, matched by german word / lesson title,
// so new content reaches existing databases. Edits to existing entries are not applied.
export async function seedDatabase(): Promise<void> {
  const existingWords = new Set(
    (await all<{ german: string }>('SELECT german FROM vocabulary')).map((r) => r.german),
  )
  const newWords = vocabulary.filter((v) => !existingWords.has(v.german))
  if (newWords.length > 0) {
    await batch(
      newWords.map((v) => ({
        sql: `INSERT INTO vocabulary (german, amharic, pronunciation, level, category, example_de, example_am)
              VALUES (@german, @amharic, @pronunciation, @level, @category, @example_de, @example_am)`,
        args: { ...v } as Record<string, unknown>,
      })),
    )
    console.log(`Seeded ${newWords.length} vocabulary entries`)
  }

  const existingTitles = new Set(
    (await all<{ title: string }>('SELECT title FROM lessons')).map((r) => r.title),
  )
  const newLessons = lessons.filter((l) => !existingTitles.has(l.title))
  if (newLessons.length > 0) {
    await batch(
      newLessons.map((l) => ({
        sql: `INSERT INTO lessons (title, subtitle, level, category, content)
              VALUES (@title, @subtitle, @level, @category, @content)`,
        args: { ...l } as Record<string, unknown>,
      })),
    )
    console.log(`Seeded ${newLessons.length} lessons`)
  }

  const hash = bcrypt.hashSync(process.env.DEMO_PASSWORD || 'demo1234', 10)
  await run(
    `INSERT INTO users (name, email, password_hash)
     VALUES ('Demo User', 'demo@example.com', @hash)
     ON CONFLICT (email) DO UPDATE SET password_hash = excluded.password_hash`,
    { hash },
  )
  console.log('Demo user ready')
}

if (process.argv[1]?.endsWith('seed.ts') || process.argv[1]?.endsWith('seed.js')) {
  await seedDatabase()
  console.log('Seeding complete')
}