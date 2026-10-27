import { beforeAll, describe, expect, it } from 'vitest'
import request from 'supertest'
import type { Express } from 'express'
import { all, get } from '../../src/db.js'
import { makeApp } from '../helpers.js'

let app: Express

beforeAll(async () => {
  app = await makeApp()
})

describe('GET /api/vocabulary', () => {
  it('returns every word when unfiltered', async () => {
    const res = await request(app).get('/api/vocabulary')
    const count = (await get<{ c: number }>('SELECT COUNT(*) AS c FROM vocabulary'))!.c
    expect(res.status).toBe(200)
    expect(count).toBeGreaterThan(0)
    expect(res.body.total).toBe(count)
    expect(res.body.items).toHaveLength(count)
  })

  it('filters by level', async () => {
    const res = await request(app).get('/api/vocabulary?level=B1')
    expect(res.body.items.length).toBeGreaterThan(0)
    expect(res.body.items.every((w: { level: string }) => w.level === 'B1')).toBe(true)
  })

  it('filters by category and level together', async () => {
    const { category } = (await get<{ category: string }>(
      "SELECT category FROM vocabulary WHERE level = 'A1' LIMIT 1",
    ))!
    const res = await request(app).get('/api/vocabulary').query({ level: 'A1', category })
    expect(res.body.items.length).toBeGreaterThan(0)
    for (const w of res.body.items) {
      expect(w).toMatchObject({ level: 'A1', category })
    }
  })

  it('searches German and Amharic text', async () => {
    const word = (await get<{ german: string; amharic: string }>(
      'SELECT german, amharic FROM vocabulary ORDER BY id LIMIT 1',
    ))!
    const byGerman = await request(app).get('/api/vocabulary').query({ search: word.german })
    const byAmharic = await request(app).get('/api/vocabulary').query({ search: word.amharic })
    expect(byGerman.body.items.map((w: { german: string }) => w.german)).toContain(word.german)
    expect(byAmharic.body.items.map((w: { german: string }) => w.german)).toContain(word.german)
  })

  it('returns nothing for a search that matches nothing', async () => {
    const res = await request(app).get('/api/vocabulary').query({ search: 'zzqqxx-no-match' })
    expect(res.body).toEqual({ items: [], total: 0 })
  })

  it('treats search text as data, not SQL', async () => {
    const res = await request(app).get('/api/vocabulary').query({ search: "' OR 1=1 --" })
    expect(res.status).toBe(200)
    expect(res.body.total).toBe(0)
  })
})

describe('GET /api/vocabulary/meta', () => {
  it('reports levels, categories and per-level counts that match the DB', async () => {
    const res = await request(app).get('/api/vocabulary/meta')
    expect(res.status).toBe(200)
    expect(res.body.levels).toEqual(['A1', 'A2', 'B1', 'B2'])

    const cats = await all<{ category: string }>(
      'SELECT DISTINCT category FROM vocabulary ORDER BY category',
    )
    expect(res.body.categories).toEqual(cats.map((c) => c.category))

    const counts = await all<{ level: string; c: number }>(
      'SELECT level, COUNT(*) AS c FROM vocabulary GROUP BY level',
    )
    expect(res.body.counts).toEqual(Object.fromEntries(counts.map((r) => [r.level, r.c])))
  })
})

describe('GET /api/quiz', () => {
  it('builds well-formed questions for the requested level', async () => {
    const res = await request(app).get('/api/quiz?level=A2&count=12')
    expect(res.status).toBe(200)
    expect(res.body.level).toBe('A2')
    expect(res.body.questions).toHaveLength(12)

    const a2 = await all<{ id: number; german: string; amharic: string }>(
      "SELECT id, german, amharic FROM vocabulary WHERE level = 'A2'",
    )
    const byId = new Map(a2.map((w) => [w.id, w]))

    const ids = new Set<number>()
    for (const q of res.body.questions) {
      const word = byId.get(q.vocabId)
      expect(word, `question word ${q.vocabId} should be A2`).toBeDefined()
      ids.add(q.vocabId)

      expect(q.options).toHaveLength(4)
      expect(new Set(q.options).size).toBe(4)
      expect(q.answer).toBeGreaterThanOrEqual(0)
      expect(q.answer).toBeLessThan(4)

      if (q.direction === 'de-am') {
        expect(q.prompt).toBe(word!.german)
        expect(q.options[q.answer]).toBe(word!.amharic)
      } else {
        expect(q.direction).toBe('am-de')
        expect(q.prompt).toBe(word!.amharic)
        expect(q.options[q.answer]).toBe(word!.german)
      }
    }
    expect(ids.size).toBe(12)
  })

  it('defaults to A1 with 10 questions', async () => {
    const res = await request(app).get('/api/quiz')
    expect(res.body.level).toBe('A1')
    expect(res.body.questions).toHaveLength(10)
  })

  it.each([
    ['1', 3],
    ['999', 20],
  ])('clamps count=%s to %i', async (count, expected) => {
    const res = await request(app).get('/api/quiz').query({ count })
    expect(res.body.questions).toHaveLength(expected)
  })

  it('rejects an invalid level', async () => {
    const res = await request(app).get('/api/quiz?level=C1')
    expect(res.status).toBe(400)
  })
})

describe('lessons', () => {
  it('lists lessons without their content', async () => {
    const res = await request(app).get('/api/lessons')
    expect(res.status).toBe(200)
    expect(res.body.lessons.length).toBeGreaterThan(0)
    expect(res.body.lessons[0]).not.toHaveProperty('content')
    expect(res.body.lessons[0]).toMatchObject({
      id: expect.any(Number),
      title: expect.any(String),
      level: expect.stringMatching(/^(A1|A2|B1|B2)$/),
    })
  })

  it('returns full content for one lesson', async () => {
    const { id, title } = (await get<{ id: number; title: string }>(
      'SELECT id, title FROM lessons ORDER BY id LIMIT 1',
    ))!
    const res = await request(app).get(`/api/lessons/${id}`)
    expect(res.status).toBe(200)
    expect(res.body.lesson.title).toBe(title)
    expect(res.body.lesson.content.length).toBeGreaterThan(0)
  })

  it('returns 404 for an unknown lesson and 400 for a non-numeric id', async () => {
    expect((await request(app).get('/api/lessons/999999')).status).toBe(404)
    expect((await request(app).get('/api/lessons/abc')).status).toBe(400)
  })
})
