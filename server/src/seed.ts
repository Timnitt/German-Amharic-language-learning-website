import { db } from './db.js'
import { vocabulary, lessons } from './seedData.js'
import bcrypt from 'bcryptjs'

export function seedDatabase(): void {
  const vocabCount = (db.prepare('SELECT COUNT(*) AS c FROM vocabulary').get() as { c: number }).c
  if (vocabCount === 0) {
    const insert = db.prepare(`
      INSERT INTO vocabulary (german, amharic, pronunciation, level, category, example_de, example_am)
      VALUES (@german, @amharic, @pronunciation, @level, @category, @example_de, @example_am)
    `)
    const insertMany = db.transaction(() => {
      for (const v of vocabulary) insert.run(v)
    })
    insertMany()
    console.log(`Seeded ${vocabulary.length} vocabulary entries`)
  }

  const lessonCount = (db.prepare('SELECT COUNT(*) AS c FROM lessons').get() as { c: number }).c
  if (lessonCount === 0) {
    const insert = db.prepare(`
      INSERT INTO lessons (title, subtitle, level, category, content)
      VALUES (@title, @subtitle, @level, @category, @content)
    `)
    const insertMany = db.transaction(() => {
      for (const l of lessons) insert.run(l)
    })
    insertMany()
    console.log(`Seeded ${lessons.length} lessons`)
  }
    const hash = bcrypt.hashSync(process.env.DEMO_PASSWORD || 'demo1234', 10)
    db.prepare(`
      INSERT INTO users (name, email, password_hash)
      VALUES ('Demo User', 'demo@example.com', ?)
      ON CONFLICT (email) DO UPDATE SET password_hash = excluded.password_hash
    `).run(hash)
    console.log('Demo user ready')
}


// Allow running directly: `npm run seed`
if (process.argv[1]?.endsWith('seed.ts') || process.argv[1]?.endsWith('seed.js')) {
  seedDatabase()
  console.log('Seeding complete')
}
