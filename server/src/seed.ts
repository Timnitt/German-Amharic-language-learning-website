import { get, run, batch } from './db.js'
import { vocabulary, lessons } from './seedData.js'
import bcrypt from 'bcryptjs'

export async function seedDatabase(): Promise<void> {
  const vocabCount = (await get<{ c: number }>('SELECT COUNT(*) AS c FROM vocabulary'))!.c
  if (vocabCount === 0) {
    await batch(
      vocabulary.map((v) => ({
        sql: `INSERT INTO vocabulary (german, amharic, pronunciation, level, category, example_de, example_am)
              VALUES (@german, @amharic, @pronunciation, @level, @category, @example_de, @example_am)`,
        args: { ...v } as Record<string, unknown>,
      })),
    )
    console.log(`Seeded ${vocabulary.length} vocabulary entries`)
  }

  const lessonCount = (await get<{ c: number }>('SELECT COUNT(*) AS c FROM lessons'))!.c
  if (lessonCount === 0) {
    await batch(
      lessons.map((l) => ({
        sql: `INSERT INTO lessons (title, subtitle, level, category, content)
              VALUES (@title, @subtitle, @level, @category, @content)`,
        args: { ...l } as Record<string, unknown>,
      })),
    )
    console.log(`Seeded ${lessons.length} lessons`)
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