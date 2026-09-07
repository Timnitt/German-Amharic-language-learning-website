import { Router } from 'express'
import { z } from 'zod'
import { all, run, type VocabRow } from '../db.js'
import { requireAuth, type AuthedRequest } from '../auth.js'

export const quizRouter = Router()

function shuffle<T>(arr: T[]): T[] {
  const copy = [...arr]
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[copy[i], copy[j]] = [copy[j], copy[i]]
  }
  return copy
}

export interface QuizQuestion {
  vocabId: number
  direction: 'de-am' | 'am-de'
  prompt: string
  options: string[]
  answer: number
  example: string
}

quizRouter.get('/', async (req, res) => {
  const level = typeof req.query.level === 'string' ? req.query.level : 'A1'
  const count = Math.min(Math.max(Number(req.query.count) || 10, 3), 20)

  const pool = await all<VocabRow>('SELECT * FROM vocabulary WHERE level = ?', [level])
  if (pool.length < 4) {
    res.status(400).json({ error: `Not enough vocabulary for level ${level}` })
    return
  }

  const questions: QuizQuestion[] = shuffle(pool)
    .slice(0, count)
    .map((word) => {
      const direction: QuizQuestion['direction'] = Math.random() < 0.5 ? 'de-am' : 'am-de'
      const distractors = shuffle(pool.filter((w) => w.id !== word.id)).slice(0, 3)
      const correctText = direction === 'de-am' ? word.amharic : word.german
      const options = shuffle([
        correctText,
        ...distractors.map((d) => (direction === 'de-am' ? d.amharic : d.german)),
      ])
      return {
        vocabId: word.id,
        direction,
        prompt: direction === 'de-am' ? word.german : word.amharic,
        options,
        answer: options.indexOf(correctText),
        example: word.example_de,
      }
    })

  res.json({ level, questions })
})

const submitSchema = z.object({
  level: z.string().min(1),
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