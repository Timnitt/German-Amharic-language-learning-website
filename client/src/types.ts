export type Level = 'A1' | 'A2' | 'B1' | 'B2'

export interface User {
  id: number
  name: string
  email: string
  createdAt: string
}

export interface VocabEntry {
  id: number
  german: string
  amharic: string
  pronunciation: string
  level: Level
  category: string
  example_de: string
  example_am: string
}

export interface VocabMeta {
  levels: Level[]
  categories: string[]
  counts: Record<string, number>
}

export interface LessonSummary {
  id: number
  title: string
  subtitle: string
  level: Level
  category: string
  created_at: string
}

export interface Lesson extends LessonSummary {
  content: string
}

export interface QuizQuestion {
  vocabId: number
  direction: 'de-am' | 'am-de'
  prompt: string
  options: string[]
  answer: number
  example: string
}

export interface QuizResult {
  id: number
  level: string
  score: number
  total: number
  taken_at: string
}

export interface DashboardStats {
  totalVocab: number
  reviewed: number
  mastered: number
  dueToday: number
  currentStreak: number
  longestStreak: number
  totalReviews: number
  accuracy: number
  quizCount: number
  quizAverage: number
  byLevel: { level: Level; total: number; reviewed: number }[]
  weakest: { german: string; amharic: string; correct_count: number; wrong_count: number }[]
}

export interface ReviewWord extends VocabEntry {
  correct_count: number
  wrong_count: number
  next_review: string
}

export interface LessonCompletion {
  lesson_id: number
  completed_at: string
}
