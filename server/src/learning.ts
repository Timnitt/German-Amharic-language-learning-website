import type { VocabRow } from './db.js'

// Pure learning logic: spaced repetition, streaks and quiz generation.
// Kept free of DB access so it can be unit-tested without a database.

const DAY_MS = 86400000

export function sm2(correct: boolean, prevEase: number, prevInterval: number, prevReps: number) {
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

// `dates` are YYYY-MM-DD activity days, newest first.
export function computeStreaks(
  dates: string[],
  now: Date = new Date(),
): { currentStreak: number; longestStreak: number } {
  if (dates.length === 0) return { currentStreak: 0, longestStreak: 0 }

  const todayStr = now.toISOString().slice(0, 10)
  const yesterdayStr = new Date(now.getTime() - DAY_MS).toISOString().slice(0, 10)

  let currentStreak = 0
  if (dates[0] === todayStr || dates[0] === yesterdayStr) {
    currentStreak = 1
    for (let i = 1; i < dates.length; i++) {
      const prev = new Date(dates[i - 1])
      const curr = new Date(dates[i])
      const diff = (prev.getTime() - curr.getTime()) / DAY_MS
      if (Math.round(diff) === 1) currentStreak++
      else break
    }
  }

  let longestStreak = 1
  let streak = 1
  for (let i = 1; i < dates.length; i++) {
    const prev = new Date(dates[i - 1])
    const curr = new Date(dates[i])
    const diff = (prev.getTime() - curr.getTime()) / DAY_MS
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

export function shuffle<T>(arr: T[], random: () => number = Math.random): T[] {
  const copy = [...arr]
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(random() * (i + 1))
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

export function buildQuizQuestions(
  pool: VocabRow[],
  count: number,
  random: () => number = Math.random,
): QuizQuestion[] {
  return shuffle(pool, random)
    .slice(0, count)
    .map((word) => {
      const direction: QuizQuestion['direction'] = random() < 0.5 ? 'de-am' : 'am-de'
      const answerText = (w: VocabRow) => (direction === 'de-am' ? w.amharic : w.german)
      const correctText = answerText(word)

      // Some words share a translation (e.g. wann/Wann → መቼ). A distractor with the same
      // German or Amharic as the target would be a second correct answer, so skip those.
      const distractors: string[] = []
      for (const w of shuffle(pool, random)) {
        if (distractors.length === 3) break
        if (w.german === word.german || w.amharic === word.amharic) continue
        const text = answerText(w)
        if (!distractors.includes(text)) distractors.push(text)
      }

      const options = shuffle([correctText, ...distractors], random)
      return {
        vocabId: word.id,
        direction,
        prompt: direction === 'de-am' ? word.german : word.amharic,
        options,
        answer: options.indexOf(correctText),
        example: word.example_de,
      }
    })
}
