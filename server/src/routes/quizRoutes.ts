import { Router } from 'express'
import { z } from 'zod'
import { all, run, type VocabRow } from '../db.js'
import { requireAuth, type AuthedRequest } from '../auth.js'
import { buildQuizQuestions } from '../learning.js'
import { levelSchema } from '../validation.js'

export const quizRouter = Router()

quizRouter.get('/', async (req, res) => {
  const parsedLevel = levelSchema.safeParse(req.query.level ?? 'A1')
  if (!parsedLevel.success) {
    res.status(400).json({ error: 'Invalid level. Use one of A1, A2, B1, B2.' })
    return
  }
  const level = parsedLevel.data
  const count = Math.min(Math.max(Number(req.query.count) || 10, 3), 20)

  const pool = await all<VocabRow>('SELECT * FROM vocabulary WHERE level = ?', [level])
  if (pool.length < 4) {
    res.status(400).json({ error: `Not enough vocabulary for level ${level}` })
    return
  }

  res.json({ level, questions: buildQuizQuestions(pool, count) })
})

const submitSchema = z.object({
  level: levelSchema,
  score: z.number().int().min(0),
  total: z.number().int().min(1).max(50),
})

quizRouter.post('/submit', requireAuth, async (req: AuthedRequest, res) => {
  const parsed = submitSchema.safeParse(req.body)
  if (!parsed.success || parsed.data.score > parsed.data.total) {
    res.status(400).json({ error: 'Invalid quiz result' })
    return
  }
  const { level, score, total } = parsed.data
  await run('INSERT INTO quiz_results (user_id, level, score, total) VALUES (?, ?, ?, ?)', [
    req.user!.userId,
    level,
    score,
    total,
  ])
  res.status(201).json({ saved: true })
})

quizRouter.get('/history', requireAuth, async (req: AuthedRequest, res) => {
  const rows = await all(
    'SELECT id, level, score, total, taken_at FROM quiz_results WHERE user_id = ? ORDER BY taken_at DESC LIMIT 20',
    [req.user!.userId],
  )
  res.json({ results: rows })
})