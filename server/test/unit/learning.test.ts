import { describe, expect, it } from 'vitest'
import { buildQuizQuestions, computeStreaks, shuffle, sm2 } from '../../src/learning.js'
import type { VocabRow } from '../../src/db.js'

// Deterministic stand-in for Math.random so shuffles are reproducible.
function seededRandom(seed: number): () => number {
  return () => {
    seed = (seed * 1664525 + 1013904223) % 4294967296
    return seed / 4294967296
  }
}

function word(id: number, german: string, amharic: string): VocabRow {
  return {
    id,
    german,
    amharic,
    pronunciation: '',
    level: 'A1',
    category: 'test',
    example_de: `${german}.`,
    example_am: '',
  }
}

describe('sm2', () => {
  it('schedules a new word 1 day out, then 3 days, then grows by ease', () => {
    const first = sm2(true, 2.5, 0, 0)
    expect(first).toEqual({ ease: 2.6, interval: 1, reps: 1 })

    const second = sm2(true, first.ease, first.interval, first.reps)
    expect(second.interval).toBe(3)
    expect(second.reps).toBe(2)

    const third = sm2(true, second.ease, second.interval, second.reps)
    expect(third.interval).toBe(Math.round(3 * third.ease))
    expect(third.reps).toBe(3)
  })

  it('resets the interval and repetitions on a wrong answer', () => {
    expect(sm2(false, 2.5, 20, 5)).toEqual({ ease: 2.3, interval: 1, reps: 0 })
  })

  it('never lets ease drop below 1.3', () => {
    let state = { ease: 1.4, interval: 1, reps: 0 }
    for (let i = 0; i < 5; i++) state = sm2(false, state.ease, state.interval, state.reps)
    expect(state.ease).toBe(1.3)
  })
})

describe('computeStreaks', () => {
  const now = new Date('2026-10-12T15:00:00Z')

  it('returns zero streaks without activity', () => {
    expect(computeStreaks([], now)).toEqual({ currentStreak: 0, longestStreak: 0 })
  })

  it('counts consecutive days ending today', () => {
    expect(computeStreaks(['2026-10-12', '2026-10-11', '2026-10-10'], now)).toEqual({
      currentStreak: 3,
      longestStreak: 3,
    })
  })

  it('keeps the streak alive if the last activity was yesterday', () => {
    expect(computeStreaks(['2026-10-11', '2026-10-10'], now).currentStreak).toBe(2)
  })

  it('breaks the current streak after a missed day but keeps the longest', () => {
    const dates = ['2026-10-09', '2026-10-08', '2026-10-07', '2026-10-06']
    expect(computeStreaks(dates, now)).toEqual({ currentStreak: 0, longestStreak: 4 })
  })

  it('stops the current streak at a gap', () => {
    const dates = ['2026-10-12', '2026-10-11', '2026-10-08', '2026-10-07', '2026-10-06']
    expect(computeStreaks(dates, now)).toEqual({ currentStreak: 2, longestStreak: 3 })
  })
})

describe('shuffle', () => {
  it('returns a permutation without mutating the input', () => {
    const input = [1, 2, 3, 4, 5, 6]
    const result = shuffle(input, seededRandom(1))
    expect(input).toEqual([1, 2, 3, 4, 5, 6])
    expect([...result].sort()).toEqual(input)
  })
})

describe('buildQuizQuestions', () => {
  const pool = [
    word(1, 'der Hund', 'ውሻ'),
    word(2, 'die Katze', 'ድመት'),
    word(3, 'das Haus', 'ቤት'),
    word(4, 'das Auto', 'መኪና'),
    word(5, 'das Buch', 'መጽሐፍ'),
    word(6, 'der Tisch', 'ጠረጴዛ'),
  ]

  it('returns the requested number of questions with 4 options and a correct answer index', () => {
    const questions = buildQuizQuestions(pool, 5, seededRandom(42))
    expect(questions).toHaveLength(5)
    for (const q of questions) {
      const source = pool.find((w) => w.id === q.vocabId)!
      const expected = q.direction === 'de-am' ? source.amharic : source.german
      expect(q.options).toHaveLength(4)
      expect(new Set(q.options).size).toBe(4)
      expect(q.options[q.answer]).toBe(expected)
      expect(q.prompt).toBe(q.direction === 'de-am' ? source.german : source.amharic)
    }
  })

  it('never uses the same word twice in one quiz', () => {
    const ids = buildQuizQuestions(pool, 6, seededRandom(7)).map((q) => q.vocabId)
    expect(new Set(ids).size).toBe(ids.length)
  })

  it('never offers a second correct answer when words share a translation', () => {
    // Mirrors real seed data: wann/Wann and der Antrag/die Bewerbung share an Amharic word.
    const tricky = [
      ...pool,
      word(7, 'wann', 'መቼ'),
      word(8, 'Wann', 'መቼ'),
      word(9, 'der Antrag', 'ማመልከቻ'),
      word(10, 'die Bewerbung', 'ማመልከቻ'),
    ]
    for (let seed = 0; seed < 200; seed++) {
      for (const q of buildQuizQuestions(tricky, tricky.length, seededRandom(seed))) {
        const source = tricky.find((w) => w.id === q.vocabId)!
        const correctOptions = q.options.filter((option) =>
          tricky.some(
            (w) =>
              (q.direction === 'de-am' && w.german === source.german && w.amharic === option) ||
              (q.direction === 'am-de' && w.amharic === source.amharic && w.german === option),
          ),
        )
        expect(correctOptions).toEqual([q.options[q.answer]])
        expect(new Set(q.options).size).toBe(q.options.length)
      }
    }
  })
})
