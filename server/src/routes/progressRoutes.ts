import { Router } from 'express'
import { z } from 'zod'
import { all, get, run } from '../db.js'
import { requireAuth, type AuthedRequest } from '../auth.js'

export const progressRouter = Router()

progressRouter.use(requireAuth)

const reviewSchema = z.object({
  vocabId: z.number().int().positive(),
  correct: z.boolean(),
})

progressRouter.post('/review', async (req: AuthedRequest, res) => {
  const parsed = reviewSchema.safeParse(req.body)
  if (!parsed.success) {
    res.status(400).json({ error: 'Invalid review payload' })
    return
  }
  const { vocabId, correct } = parsed.data

  const vocab = await get('SELECT id FROM vocabulary WHERE id = ?', [vocabId])
  if (!vocab) {
    res.status(404).json({ error: 'Vocabulary entry not found' })
    return
  }

  await run(
    `INSERT INTO progress (user_id, vocab_id, correct_count, wrong_count, last_reviewed)
     VALUES (?, ?, ?, ?, datetime('now'))
     ON CONFLICT (user_id, vocab_id) DO UPDATE SET
       correct_count = correct_count + excluded.correct_count,
       wrong_count = wrong_count + excluded.wrong_count,
       last_reviewed = datetime('now')`,
    [req.user!.userId, vocabId, correct ? 1 : 0, correct ? 0 : 1],
  )

  res.status(201).json({ saved: true })
})

progressRouter.get('/stats', async (req: AuthedRequest, res) => {
  const userId = req.user!.userId

  const totalVocab = (await get<{ c: number }>('SELECT COUNT(*) AS c FROM vocabulary'))!.c
  const reviewed = (await get<{ c: number }>('SELECT COUNT(*) AS c FROM progress WHERE user_id = ?', [
    userId,
  ]))!.c
  const mastered = (await get<{ c: number }>(
    'SELECT COUNT(*) AS c FROM progress WHERE user_id = ? AND correct_count >= 3 AND correct_count > wrong_count',
    [userId],
  ))!.c

  const reviewTotals = (await get<{ correct: number; wrong: number }>(
    'SELECT COALESCE(SUM(correct_count),0) AS correct, COALESCE(SUM(wrong_count),0) AS wrong FROM progress WHERE user_id = ?',
    [userId],
  ))!

  const quizzes = (await get<{ count: number; avgRatio: number }>(
    'SELECT COUNT(*) AS count, COALESCE(AVG(CAST(score AS REAL) / total), 0) AS avgRatio FROM quiz_results WHERE user_id = ?',
    [userId],
  ))!

  const byLevel = await all(
    `SELECT v.level AS level,
            COUNT(DISTINCT v.id) AS total,
            COUNT(DISTINCT p.vocab_id) AS reviewed
     FROM vocabulary v
     LEFT JOIN progress p ON p.vocab_id = v.id AND p.user_id = ?
     GROUP BY v.level ORDER BY v.level`,
    [userId],
  )

  const weakest = await all(
    `SELECT v.german, v.amharic, p.correct_count, p.wrong_count
     FROM progress p JOIN vocabulary v ON v.id = p.vocab_id
     WHERE p.user_id = ? AND p.wrong_count > 0
     ORDER BY (CAST(p.wrong_count AS REAL) / (p.correct_count + p.wrong_count)) DESC, p.wrong_count DESC
     LIMIT 5`,
    [userId],
  )

  res.json({
    totalVocab,
    reviewed,
    mastered,
    totalReviews: reviewTotals.correct + reviewTotals.wrong,
    accuracy: reviewTotals.correct + reviewTotals.wrong > 0
      ? Math.round((reviewTotals.correct / (reviewTotals.correct + reviewTotals.wrong)) * 100)
      : 0,
    quizCount: quizzes.count,
    quizAverage: Math.round(quizzes.avgRatio * 100),
    byLevel,
    weakest,
  })
})