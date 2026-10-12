import { Router } from 'express'
import { z } from 'zod'
import { all, get, run } from '../db.js'
import { requireAuth, type AuthedRequest } from '../auth.js'

export const progressRouter = Router()

progressRouter.use(requireAuth)

function computeStreaks(dates: string[]): { currentStreak: number; longestStreak: number } {
  if (dates.length === 0) return { currentStreak: 0, longestStreak: 0 }

  const todayStr = new Date().toISOString().slice(0, 10)
  const yesterdayStr = new Date(Date.now() - 86400000).toISOString().slice(0, 10)

  let currentStreak = 0
  if (dates[0] === todayStr || dates[0] === yesterdayStr) {
    currentStreak = 1
    for (let i = 1; i < dates.length; i++) {
      const prev = new Date(dates[i - 1])
      const curr = new Date(dates[i])
      const diff = (prev.getTime() - curr.getTime()) / 86400000
      if (Math.round(diff) === 1) currentStreak++
      else break
    }
  }

  let longestStreak = 1
  let streak = 1
  for (let i = 1; i < dates.length; i++) {
    const prev = new Date(dates[i - 1])
    const curr = new Date(dates[i])
    const diff = (prev.getTime() - curr.getTime()) / 86400000
    if (Math.round(diff) === 1) {
      streak++
      longestStreak = Math.max(longestStreak, streak)
    } else {
      streak = 1
    }
  }
  longestStreak = Math.max(longestStreak, currentStreak)

  return { currentStreak, longestStreak }
}

function sm2(correct: boolean, prevEase: number, prevInterval: number, prevReps: number) {
  if (!correct) {
    return { ease: Math.max(1.3, prevEase - 0.2), interval: 1, reps: 0 }
  }
  const ease = Math.max(1.3, prevEase + 0.1)
  let interval: number
  if (prevReps === 0) interval = 1
  else if (prevReps === 1) interval = 3
  else interval = Math.round(prevInterval * ease)
  return { ease, interval, reps: prevReps + 1 }
}

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
  const userId = req.user!.userId

  const vocab = await get('SELECT id FROM vocabulary WHERE id = ?', [vocabId])
  if (!vocab) {
    res.status(404).json({ error: 'Vocabulary entry not found' })
    return
  }

  const existing = await get<{
    ease_factor: number
    interval_days: number
    repetitions: number
  }>('SELECT ease_factor, interval_days, repetitions FROM progress WHERE user_id = ? AND vocab_id = ?', [
    userId,
    vocabId,
  ])

  const prev = existing ?? { ease_factor: 2.5, interval_days: 0, repetitions: 0 }
  const { ease, interval, reps } = sm2(correct, prev.ease_factor, prev.interval_days, prev.repetitions)

  await run(
    `INSERT INTO progress (user_id, vocab_id, correct_count, wrong_count, last_reviewed, ease_factor, interval_days, next_review, repetitions)
     VALUES (?, ?, ?, ?, datetime('now'), ?, ?, datetime('now', '+' || ? || ' days'), ?)
     ON CONFLICT (user_id, vocab_id) DO UPDATE SET
       correct_count = correct_count + excluded.correct_count,
       wrong_count = wrong_count + excluded.wrong_count,
       last_reviewed = datetime('now'),
       ease_factor = excluded.ease_factor,
       interval_days = excluded.interval_days,
       next_review = datetime('now', '+' || excluded.interval_days || ' days'),
       repetitions = excluded.repetitions`,
    [userId, vocabId, correct ? 1 : 0, correct ? 0 : 1, ease, interval, interval, reps],
  )

  await run(
    `INSERT INTO daily_activity (user_id, activity_date, reviews_count)
     VALUES (?, date('now'), 1)
     ON CONFLICT (user_id, activity_date) DO UPDATE SET
       reviews_count = reviews_count + 1`,
    [userId],
  )

  res.status(201).json({ saved: true, nextReviewDays: interval })
})

progressRouter.get('/due', async (req: AuthedRequest, res) => {
  const userId = req.user!.userId
  const level = typeof req.query.level === 'string' ? req.query.level : null
  const limit = Math.min(Math.max(Number(req.query.limit) || 20, 1), 50)

  const levelFilter = level ? 'AND v.level = ?' : ''
  const args: unknown[] = [userId]
  if (level) args.push(level)

  const due = await all(
    `SELECT v.id, v.german, v.amharic, v.pronunciation, v.level, v.category, v.example_de, v.example_am,
            p.correct_count, p.wrong_count, p.next_review
     FROM progress p
     JOIN vocabulary v ON v.id = p.vocab_id
     WHERE p.user_id = ? ${levelFilter} AND p.next_review <= datetime('now')
     ORDER BY p.next_review ASC
     LIMIT ?`,
    [...args, limit],
  )

  const dueCount = (await get<{ c: number }>(
    `SELECT COUNT(*) AS c FROM progress p JOIN vocabulary v ON v.id = p.vocab_id
     WHERE p.user_id = ? ${levelFilter} AND p.next_review <= datetime('now')`,
    args,
  ))!.c

  res.json({ items: due, total: dueCount })
})

progressRouter.get('/streak', async (req: AuthedRequest, res) => {
  const userId = req.user!.userId

  const days = await all<{ activity_date: string }>(
    'SELECT activity_date FROM daily_activity WHERE user_id = ? ORDER BY activity_date DESC LIMIT 365',
    [userId],
  )

  const todayStr = new Date().toISOString().slice(0, 10)
  const todayRow = await get<{ reviews_count: number }>(
    'SELECT reviews_count FROM daily_activity WHERE user_id = ? AND activity_date = ?',
    [userId, todayStr],
  )

  const { currentStreak, longestStreak } = computeStreaks(days.map((d) => d.activity_date))

  res.json({ currentStreak, longestStreak, todayReviews: todayRow?.reviews_count ?? 0 })
})

const lessonCompleteSchema = z.object({ lessonId: z.number().int().positive() })

progressRouter.post('/lesson-complete', async (req: AuthedRequest, res) => {
  const parsed = lessonCompleteSchema.safeParse(req.body)
  if (!parsed.success) {
    res.status(400).json({ error: 'Invalid payload' })
    return
  }
  const lesson = await get('SELECT id FROM lessons WHERE id = ?', [parsed.data.lessonId])
  if (!lesson) {
    res.status(404).json({ error: 'Lesson not found' })
    return
  }
  await run(
    `INSERT INTO lesson_progress (user_id, lesson_id) VALUES (?, ?)
     ON CONFLICT (user_id, lesson_id) DO UPDATE SET completed_at = datetime('now')`,
    [req.user!.userId, parsed.data.lessonId],
  )
  res.status(201).json({ saved: true })
})

progressRouter.get('/lessons', async (req: AuthedRequest, res) => {
  const rows = await all<{ lesson_id: number; completed_at: string }>(
    'SELECT lesson_id, completed_at FROM lesson_progress WHERE user_id = ?',
    [req.user!.userId],
  )
  res.json({ completed: rows })
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

  const dueToday = (await get<{ c: number }>(
    "SELECT COUNT(*) AS c FROM progress WHERE user_id = ? AND next_review <= datetime('now')",
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

  const days = await all<{ activity_date: string }>(
    'SELECT activity_date FROM daily_activity WHERE user_id = ? ORDER BY activity_date DESC LIMIT 365',
    [userId],
  )
  const { currentStreak, longestStreak } = computeStreaks(days.map((d) => d.activity_date))

  res.json({
    totalVocab,
    reviewed,
    mastered,
    dueToday,
    currentStreak,
    longestStreak,
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
