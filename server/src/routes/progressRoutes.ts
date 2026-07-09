import { Router } from 'express'
import { z } from 'zod'
import { db } from '../db.js'
import { requireAuth, type AuthedRequest } from '../auth.js'

export const progressRouter = Router()

progressRouter.use(requireAuth)

const reviewSchema = z.object({
  vocabId: z.number().int().positive(),
  correct: z.boolean(),
})

/** Record one flashcard review (known / not known). */
progressRouter.post('/review', (req: AuthedRequest, res) => {
  const parsed = reviewSchema.safeParse(req.body)
  if (!parsed.success) {
    res.status(400).json({ error: 'Invalid review payload' })
    return
  }
  const { vocabId, correct } = parsed.data

  const vocab = db.prepare('SELECT id FROM vocabulary WHERE id = ?').get(vocabId)
  if (!vocab) {
    res.status(404).json({ error: 'Vocabulary entry not found' })
    return
  }

  db.prepare(`
    INSERT INTO progress (user_id, vocab_id, correct_count, wrong_count, last_reviewed)
    VALUES (?, ?, ?, ?, datetime('now'))
    ON CONFLICT (user_id, vocab_id) DO UPDATE SET
      correct_count = correct_count + excluded.correct_count,
      wrong_count = wrong_count + excluded.wrong_count,
      last_reviewed = datetime('now')
  `).run(req.user!.userId, vocabId, correct ? 1 : 0, correct ? 0 : 1)

  res.status(201).json({ saved: true })
})

/** Aggregate stats for the dashboard. */
progressRouter.get('/stats', (req: AuthedRequest, res) => {
  const userId = req.user!.userId

  const totalVocab = (db.prepare('SELECT COUNT(*) AS c FROM vocabulary').get() as { c: number }).c
  const reviewed = (db.prepare('SELECT COUNT(*) AS c FROM progress WHERE user_id = ?').get(userId) as { c: number }).c
  const mastered = (db.prepare(
    'SELECT COUNT(*) AS c FROM progress WHERE user_id = ? AND correct_count >= 3 AND correct_count > wrong_count',
  ).get(userId) as { c: number }).c

  const reviewTotals = db.prepare(
    'SELECT COALESCE(SUM(correct_count),0) AS correct, COALESCE(SUM(wrong_count),0) AS wrong FROM progress WHERE user_id = ?',
  ).get(userId) as { correct: number; wrong: number }

  const quizzes = db.prepare(
    'SELECT COUNT(*) AS count, COALESCE(AVG(CAST(score AS REAL) / total), 0) AS avgRatio FROM quiz_results WHERE user_id = ?',
  ).get(userId) as { count: number; avgRatio: number }

  const byLevel = db.prepare(`
    SELECT v.level AS level,
           COUNT(DISTINCT v.id) AS total,
           COUNT(DISTINCT p.vocab_id) AS reviewed
    FROM vocabulary v
    LEFT JOIN progress p ON p.vocab_id = v.id AND p.user_id = ?
    GROUP BY v.level ORDER BY v.level
  `).all(userId)

  const weakest = db.prepare(`
    SELECT v.german, v.amharic, p.correct_count, p.wrong_count
    FROM progress p JOIN vocabulary v ON v.id = p.vocab_id
    WHERE p.user_id = ? AND p.wrong_count > 0
    ORDER BY (CAST(p.wrong_count AS REAL) / (p.correct_count + p.wrong_count)) DESC, p.wrong_count DESC
    LIMIT 5
  `).all(userId)

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
