import { beforeAll, describe, expect, it } from 'vitest'
import request from 'supertest'
import type { Express } from 'express'
import { all, get, run } from '../../src/db.js'
import { sm2 } from '../../src/learning.js'
import { bearer, makeApp, registerUser, type TestUser } from '../helpers.js'

// Endpoints that need a login: flashcard reviews (SM-2), due queue, streaks, lesson
// completion, quiz results and the dashboard stats.

let app: Express
let wordIds: number[]
let lessonId: number

beforeAll(async () => {
  app = await makeApp()
  wordIds = (await all<{ id: number }>("SELECT id FROM vocabulary WHERE level = 'A1' ORDER BY id LIMIT 5")).map(
    (r) => r.id,
  )
  lessonId = (await get<{ id: number }>('SELECT id FROM lessons ORDER BY id LIMIT 1'))!.id
})

function review(u: TestUser, vocabId: number, correct: boolean) {
  return request(app).post('/api/progress/review').set(bearer(u.token)).send({ vocabId, correct })
}

function progressRow(u: TestUser, vocabId: number) {
  return get<{
    correct_count: number
    wrong_count: number
    ease_factor: number
    interval_days: number
    repetitions: number
    next_review: string
  }>('SELECT * FROM progress WHERE user_id = ? AND vocab_id = ?', [u.user.id, vocabId])
}

/** Moves a word's next review into the past so it shows up as due. */
function makeDue(u: TestUser, vocabId: number) {
  return run("UPDATE progress SET next_review = datetime('now', '-1 day') WHERE user_id = ? AND vocab_id = ?", [
    u.user.id,
    vocabId,
  ])
}

describe('auth is required', () => {
  it.each([
    ['post', '/api/progress/review'],
    ['get', '/api/progress/due'],
    ['get', '/api/progress/streak'],
    ['post', '/api/progress/lesson-complete'],
    ['get', '/api/progress/lessons'],
    ['get', '/api/progress/stats'],
    ['post', '/api/quiz/submit'],
    ['get', '/api/quiz/history'],
  ] as const)('%s %s returns 401 without a token', async (method, url) => {
    const res = await request(app)[method](url)
    expect(res.status).toBe(401)
  })
})

describe('POST /api/progress/review', () => {
  it('stores SM-2 scheduling for a first correct answer', async () => {
    const u = await registerUser(app)
    const res = await review(u, wordIds[0], true)
    // Literal values, so this can't just mirror a changed sm2(): new word, correct answer
    // -> ease 2.5 + 0.1, due in 1 day, 1 repetition.
    const expected = { ease: 2.6, interval: 1, reps: 1 }

    expect(res.status).toBe(201)
    expect(res.body).toEqual({ saved: true, nextReviewDays: expected.interval })

    const row = await progressRow(u, wordIds[0])
    expect(row).toMatchObject({
      correct_count: 1,
      wrong_count: 0,
      interval_days: expected.interval,
      repetitions: expected.reps,
    })
    expect(row!.ease_factor).toBeCloseTo(expected.ease)

    const daysOut = await get<{ d: number }>("SELECT julianday(?) - julianday('now') AS d", [row!.next_review])
    expect(daysOut!.d).toBeGreaterThan(expected.interval - 0.01)
    expect(daysOut!.d).toBeLessThan(expected.interval + 0.01)
  })

  it('grows the interval on repeated correct answers and resets it on a wrong one', async () => {
    const u = await registerUser(app)
    const id = wordIds[1]
    await review(u, id, true)
    await review(u, id, true)
    const third = await review(u, id, true)

    let s = sm2(true, 2.5, 0, 0)
    s = sm2(true, s.ease, s.interval, s.reps)
    s = sm2(true, s.ease, s.interval, s.reps)
    expect(third.body.nextReviewDays).toBe(s.interval)
    expect(s.interval).toBeGreaterThan(3)

    // 2.5 -> 2.6 -> 2.7 -> 2.8, intervals 1, 3, round(3 * 2.8) = 8.
    expect(third.body.nextReviewDays).toBe(8)

    const wrong = await review(u, id, false)
    expect(wrong.body.nextReviewDays).toBe(1)
    const row = await progressRow(u, id)
    expect(row).toMatchObject({ correct_count: 3, wrong_count: 1, repetitions: 0, interval_days: 1 })
    expect(row!.ease_factor).toBeCloseTo(sm2(false, s.ease, s.interval, s.reps).ease)
    expect(row!.ease_factor).toBeCloseTo(2.6)
  })

  it.each([
    [{ vocabId: 'x', correct: true }],
    [{ vocabId: -1, correct: true }],
    [{ vocabId: 1.5, correct: true }],
    [{ vocabId: 1 }],
    [{ vocabId: 1, correct: 'yes' }],
  ])('rejects invalid payload %j with 400', async (body) => {
    const u = await registerUser(app)
    const res = await request(app).post('/api/progress/review').set(bearer(u.token)).send(body)
    expect(res.status).toBe(400)
    expect(await all('SELECT * FROM progress WHERE user_id = ?', [u.user.id])).toHaveLength(0)
  })

  it('returns 404 for a word that does not exist', async () => {
    const u = await registerUser(app)
    const res = await review(u, 99999999, true)
    expect(res.status).toBe(404)
  })
})

describe('GET /api/progress/due', () => {
  it('is empty right after reviewing, and lists words once their review date passes', async () => {
    const u = await registerUser(app)
    await review(u, wordIds[0], true)
    await review(u, wordIds[1], false)

    const before = await request(app).get('/api/progress/due').set(bearer(u.token))
    expect(before.body).toEqual({ items: [], total: 0 })

    await makeDue(u, wordIds[1])
    const after = await request(app).get('/api/progress/due').set(bearer(u.token))
    expect(after.body.total).toBe(1)
    expect(after.body.items).toHaveLength(1)
    expect(after.body.items[0]).toMatchObject({ id: wordIds[1], correct_count: 0, wrong_count: 1 })
  })

  it('filters by level and honours limit, while total counts all due words', async () => {
    const u = await registerUser(app)
    for (const id of wordIds) {
      await review(u, id, true)
      await makeDue(u, id)
    }
    const limited = await request(app).get('/api/progress/due?limit=2').set(bearer(u.token))
    expect(limited.body.items).toHaveLength(2)
    expect(limited.body.total).toBe(wordIds.length)

    const b2 = await request(app).get('/api/progress/due?level=B2').set(bearer(u.token))
    expect(b2.body).toEqual({ items: [], total: 0 })

    const bad = await request(app).get('/api/progress/due?level=Z9').set(bearer(u.token))
    expect(bad.status).toBe(400)
  })
})

describe('GET /api/progress/streak', () => {
  it('starts at zero and counts reviews made today', async () => {
    const u = await registerUser(app)
    const empty = await request(app).get('/api/progress/streak').set(bearer(u.token))
    expect(empty.body).toEqual({ currentStreak: 0, longestStreak: 0, todayReviews: 0 })

    await review(u, wordIds[0], true)
    await review(u, wordIds[1], false)
    await review(u, wordIds[0], true)

    const res = await request(app).get('/api/progress/streak').set(bearer(u.token))
    expect(res.body).toEqual({ currentStreak: 1, longestStreak: 1, todayReviews: 3 })
  })

  it('counts consecutive past days of activity', async () => {
    const u = await registerUser(app)
    await review(u, wordIds[0], true)
    for (const offset of ['-1 day', '-2 days']) {
      await run(
        "INSERT INTO daily_activity (user_id, activity_date, reviews_count) VALUES (?, date('now', ?), 1)",
        [u.user.id, offset],
      )
    }
    const res = await request(app).get('/api/progress/streak').set(bearer(u.token))
    expect(res.body.currentStreak).toBe(3)
    expect(res.body.longestStreak).toBe(3)
  })
})

describe('lesson completion', () => {
  it('marks a lesson complete once, even when posted twice', async () => {
    const u = await registerUser(app)
    for (let i = 0; i < 2; i++) {
      const res = await request(app)
        .post('/api/progress/lesson-complete')
        .set(bearer(u.token))
        .send({ lessonId })
      expect(res.status).toBe(201)
    }
    const res = await request(app).get('/api/progress/lessons').set(bearer(u.token))
    expect(res.body.completed).toHaveLength(1)
    expect(res.body.completed[0]).toMatchObject({ lesson_id: lessonId, completed_at: expect.any(String) })
  })

  it('returns 404 for an unknown lesson and 400 for a bad payload', async () => {
    const u = await registerUser(app)
    const missing = await request(app)
      .post('/api/progress/lesson-complete')
      .set(bearer(u.token))
      .send({ lessonId: 999999 })
    expect(missing.status).toBe(404)
    const bad = await request(app)
      .post('/api/progress/lesson-complete')
      .set(bearer(u.token))
      .send({ lessonId: 'one' })
    expect(bad.status).toBe(400)
  })
})

describe('quiz results', () => {
  it('saves a result and returns it in history, newest first', async () => {
    const u = await registerUser(app)
    await request(app).post('/api/quiz/submit').set(bearer(u.token)).send({ level: 'A1', score: 3, total: 10 })
    await run("UPDATE quiz_results SET taken_at = datetime('now', '-1 hour') WHERE user_id = ?", [u.user.id])
    const res = await request(app)
      .post('/api/quiz/submit')
      .set(bearer(u.token))
      .send({ level: 'B1', score: 8, total: 10 })
    expect(res.status).toBe(201)

    const history = await request(app).get('/api/quiz/history').set(bearer(u.token))
    expect(history.body.results.map((r: { level: string; score: number }) => [r.level, r.score])).toEqual([
      ['B1', 8],
      ['A1', 3],
    ])
  })

  it.each([
    [{ level: 'A1', score: 11, total: 10 }],
    [{ level: 'A1', score: -1, total: 10 }],
    [{ level: 'A1', score: 1, total: 0 }],
    [{ level: 'A1', score: 1, total: 51 }],
    [{ level: 'C2', score: 1, total: 10 }],
  ])('rejects invalid result %j with 400', async (body) => {
    const u = await registerUser(app)
    const res = await request(app).post('/api/quiz/submit').set(bearer(u.token)).send(body)
    expect(res.status).toBe(400)
    expect(await all('SELECT id FROM quiz_results WHERE user_id = ?', [u.user.id])).toHaveLength(0)
  })
})

describe('GET /api/progress/stats', () => {
  it('starts empty for a new user', async () => {
    const u = await registerUser(app)
    const res = await request(app).get('/api/progress/stats').set(bearer(u.token))
    const totalVocab = (await get<{ c: number }>('SELECT COUNT(*) AS c FROM vocabulary'))!.c
    expect(res.body).toMatchObject({
      totalVocab,
      reviewed: 0,
      mastered: 0,
      dueToday: 0,
      totalReviews: 0,
      accuracy: 0,
      quizCount: 0,
      quizAverage: 0,
      weakest: [],
    })
    const levelTotal = res.body.byLevel.reduce((n: number, l: { total: number }) => n + l.total, 0)
    expect(levelTotal).toBe(totalVocab)
  })

  it('aggregates reviews and quizzes consistently', async () => {
    const u = await registerUser(app)
    // Word 0: 3 correct (mastered). Word 1: 1 correct, 2 wrong (weakest). Word 2: 1 wrong.
    for (let i = 0; i < 3; i++) await review(u, wordIds[0], true)
    await review(u, wordIds[1], true)
    await review(u, wordIds[1], false)
    await review(u, wordIds[1], false)
    await review(u, wordIds[2], false)
    await makeDue(u, wordIds[2])
    await request(app).post('/api/quiz/submit').set(bearer(u.token)).send({ level: 'A1', score: 5, total: 10 })
    await request(app).post('/api/quiz/submit').set(bearer(u.token)).send({ level: 'A1', score: 10, total: 10 })

    const res = await request(app).get('/api/progress/stats').set(bearer(u.token))
    expect(res.body).toMatchObject({
      reviewed: 3,
      mastered: 1,
      dueToday: 1,
      totalReviews: 7,
      accuracy: Math.round((4 / 7) * 100),
      quizCount: 2,
      quizAverage: 75,
      currentStreak: 1,
    })
    expect(res.body.weakest[0]).toMatchObject({ correct_count: 0, wrong_count: 1 })
    expect(res.body.weakest).toHaveLength(2)
    const a1 = res.body.byLevel.find((l: { level: string }) => l.level === 'A1')
    expect(a1.reviewed).toBe(3)
  })
})

describe('user isolation', () => {
  it("never shows one user's progress, lessons or quizzes to another", async () => {
    const alice = await registerUser(app, 'Alice')
    const bob = await registerUser(app, 'Bob')

    await review(alice, wordIds[0], false)
    await makeDue(alice, wordIds[0])
    await request(app).post('/api/progress/lesson-complete').set(bearer(alice.token)).send({ lessonId })
    await request(app).post('/api/quiz/submit').set(bearer(alice.token)).send({ level: 'A1', score: 2, total: 5 })

    const [due, lessons, history, stats, streak] = await Promise.all([
      request(app).get('/api/progress/due').set(bearer(bob.token)),
      request(app).get('/api/progress/lessons').set(bearer(bob.token)),
      request(app).get('/api/quiz/history').set(bearer(bob.token)),
      request(app).get('/api/progress/stats').set(bearer(bob.token)),
      request(app).get('/api/progress/streak').set(bearer(bob.token)),
    ])
    expect(due.body.total).toBe(0)
    expect(lessons.body.completed).toEqual([])
    expect(history.body.results).toEqual([])
    expect(stats.body).toMatchObject({ reviewed: 0, quizCount: 0, weakest: [] })
    expect(streak.body.todayReviews).toBe(0)

    // Sanity check that Alice's data is really there, so the assertions above mean something.
    const aliceDue = await request(app).get('/api/progress/due').set(bearer(alice.token))
    expect(aliceDue.body.total).toBe(1)
  })
})
