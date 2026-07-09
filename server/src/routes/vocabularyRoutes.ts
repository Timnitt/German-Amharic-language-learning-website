import { Router } from 'express'
import { db, type VocabRow } from '../db.js'

export const vocabularyRouter = Router()

const LEVELS = ['A1', 'A2', 'B1'] as const

vocabularyRouter.get('/meta', (_req, res) => {
  const categories = db
    .prepare('SELECT DISTINCT category FROM vocabulary ORDER BY category')
    .all() as { category: string }[]
  const counts = db
    .prepare('SELECT level, COUNT(*) AS count FROM vocabulary GROUP BY level')
    .all() as { level: string; count: number }[]
  res.json({
    levels: LEVELS,
    categories: categories.map((c) => c.category),
    counts: Object.fromEntries(counts.map((c) => [c.level, c.count])),
  })
})

vocabularyRouter.get('/', (req, res) => {
  const { level, category, search } = req.query
  const conditions: string[] = []
  const params: unknown[] = []

  if (typeof level === 'string' && LEVELS.includes(level as (typeof LEVELS)[number])) {
    conditions.push('level = ?')
    params.push(level)
  }
  if (typeof category === 'string' && category) {
    conditions.push('category = ?')
    params.push(category)
  }
  if (typeof search === 'string' && search.trim()) {
    conditions.push('(german LIKE ? OR amharic LIKE ?)')
    const term = `%${search.trim()}%`
    params.push(term, term)
  }

  const where = conditions.length ? `WHERE ${conditions.join(' AND ')}` : ''
  const rows = db
    .prepare(`SELECT * FROM vocabulary ${where} ORDER BY level, category, german`)
    .all(...params) as VocabRow[]
  res.json({ items: rows, total: rows.length })
})
