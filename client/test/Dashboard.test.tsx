import { describe, expect, it } from 'vitest'
import { screen, waitFor, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Dashboard from '../src/pages/Dashboard'
import { setToken } from '../src/api'
import type { DashboardStats, LessonSummary, QuizResult } from '../src/types'
import { mockFetch, renderPage, testUser, type MockResponse } from './helpers'

const stats: DashboardStats = {
  totalVocab: 1000,
  reviewed: 42,
  mastered: 7,
  dueToday: 3,
  currentStreak: 4,
  longestStreak: 9,
  totalReviews: 60,
  accuracy: 81,
  quizCount: 2,
  quizAverage: 65,
  byLevel: [
    { level: 'A1', total: 200, reviewed: 50 },
    { level: 'A2', total: 100, reviewed: 0 },
  ],
  weakest: [
    { german: 'Brot', amharic: 'ዳቦ', correct_count: 1, wrong_count: 4 },
    { german: 'Zug', amharic: 'ባቡር', correct_count: 0, wrong_count: 2 },
  ],
}

const history: QuizResult[] = [
  { id: 2, level: 'B1', score: 9, total: 10, taken_at: '2026-03-02 10:00:00' },
  { id: 1, level: 'A1', score: 4, total: 10, taken_at: '2026-03-01 10:00:00' },
]

const lessons: LessonSummary[] = [
  { id: 1, title: 'Der Artikel', subtitle: '', level: 'A1', category: 'grammar', created_at: '2026-01-01' },
  { id: 2, title: 'Das Perfekt', subtitle: '', level: 'A2', category: 'grammar', created_at: '2026-01-01' },
]

type Routes = Record<string, MockResponse | (() => MockResponse)>

function loggedIn(overrides: Routes = {}) {
  setToken('t')
  return mockFetch({
    'GET /api/auth/me': { body: { user: testUser } },
    'GET /api/progress/stats': { body: stats },
    'GET /api/quiz/history': { body: { results: history } },
    'GET /api/lessons': { body: { lessons } },
    'GET /api/progress/lessons': { body: { completed: [{ lesson_id: 2, completed_at: '2026-03-03 08:00:00' }] } },
    ...overrides,
  })
}

function renderDashboard() {
  return renderPage(<Dashboard />, { url: '/dashboard', path: '/dashboard' })
}

describe('Dashboard', () => {
  it('shows a loading state, then the stats', async () => {
    loggedIn()
    renderDashboard()
    expect(screen.getByRole('status')).toHaveTextContent('በመጫን ላይ')

    expect(await screen.findByRole('heading', { name: 'ሰላም Abebe Kebede! 👋' })).toBeInTheDocument()
    expect(screen.getByText('42/1000')).toBeInTheDocument()
    expect(screen.getByText('የተካኑ ቃላት').previousSibling).toHaveTextContent('7')
    expect(screen.getByText('ትክክለኛነት').previousSibling).toHaveTextContent('81%')
    expect(screen.getByText('አማካይ የፈተና ውጤት').previousSibling).toHaveTextContent('65%')
    expect(screen.getByText('50/200 (25%)')).toBeInTheDocument()
    expect(screen.getByText('0/100 (0%)')).toBeInTheDocument()
  })

  it('shows the streak and links to the words due today', async () => {
    loggedIn()
    renderDashboard()
    expect(await screen.findByText('🔥 4')).toBeInTheDocument()
    expect(screen.getByText('ተከታታይ ቀናት')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /3 ቃላት ለዛሬ ይጠብቃሉ/ })).toHaveAttribute('href', '/review')
  })

  it('lists the hardest words with their wrong counts', async () => {
    loggedIn()
    renderDashboard()
    const section = (await screen.findByRole('heading', { name: 'የሚከብዱ ቃላት' })).closest('section')!
    const items = within(section).getAllByRole('listitem')
    expect(items.map((li) => li.textContent)).toEqual(['Brot — ዳቦ✗ 4', 'Zug — ባቡር✗ 2'])
  })

  it('renders quiz history as a table with percentages', async () => {
    loggedIn()
    renderDashboard()
    expect(await screen.findByRole('heading', { name: 'የፈተና ታሪክ (2)' })).toBeInTheDocument()
    const rows = within(screen.getByRole('table')).getAllByRole('row').slice(1)
    expect(rows).toHaveLength(2)
    expect(within(rows[0]).getAllByRole('cell').slice(1).map((c) => c.textContent)).toEqual(['B1', '9/10', '90%'])
    expect(within(rows[1]).getAllByRole('cell').slice(1).map((c) => c.textContent)).toEqual(['A1', '4/10', '40%'])
  })

  it('marks completed lessons', async () => {
    loggedIn()
    renderDashboard()
    expect(await screen.findByRole('heading', { name: 'የትምህርት እድገት (1/2)' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Der Artikel/ })).toHaveTextContent('○')
    expect(screen.getByRole('link', { name: /Das Perfekt/ })).toHaveTextContent('✓')
    expect(screen.getByRole('link', { name: /Das Perfekt/ })).toHaveAttribute('href', '/lessons/2')
  })

  it('shows empty states for a brand-new user', async () => {
    loggedIn({
      'GET /api/progress/stats': {
        body: { ...stats, currentStreak: 0, dueToday: 0, weakest: [], quizCount: 0 },
      },
      'GET /api/quiz/history': { body: { results: [] } },
      'GET /api/lessons': { body: { lessons: [] } },
      'GET /api/progress/lessons': { body: { completed: [] } },
    })
    renderDashboard()

    expect(await screen.findByText(/እስካሁን የተሳሳቱት ቃል የለም/)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'የመጀመሪያዎን ይውሰዱ!' })).toHaveAttribute('href', '/quiz')
    expect(screen.queryByText('ተከታታይ ቀናት')).not.toBeInTheDocument()
    expect(screen.queryByText(/ቃላት ለዛሬ ይጠብቃሉ/)).not.toBeInTheDocument()
    expect(screen.queryByRole('heading', { name: /የትምህርት እድገት/ })).not.toBeInTheDocument()
    expect(screen.queryByRole('table')).not.toBeInTheDocument()
  })

  it('shows an Amharic error with retry, and retry loads the dashboard', async () => {
    let attempts = 0
    loggedIn({
      'GET /api/progress/stats': () => {
        attempts++
        return attempts === 1 ? { status: 500, body: {} } : { body: stats }
      },
    })
    renderDashboard()

    expect(await screen.findByRole('alert')).toHaveTextContent('የአገልግሎት ችግር አጋጥሟል')
    await userEvent.click(screen.getByRole('button', { name: 'እንደገና ይሞክሩ' }))
    expect(await screen.findByText('42/1000')).toBeInTheDocument()
    expect(attempts).toBe(2)
  })

  it('shows the rate-limit message on 429', async () => {
    loggedIn({ 'GET /api/quiz/history': { status: 429, body: { error: 'Too many requests. Please slow down.' } } })
    renderDashboard()
    expect(await screen.findByRole('alert')).toHaveTextContent('በጣም ብዙ ሙከራዎች። እባክዎ ከጥቂት ደቂቃዎች በኋላ እንደገና ይሞክሩ።')
  })

  it('clears the session and goes to login when the token has expired', async () => {
    loggedIn({ 'GET /api/progress/stats': { status: 401, body: { error: 'Invalid or expired token' } } })
    renderDashboard()
    await waitFor(() => expect(screen.getByTestId('location')).toHaveTextContent('/login'))
    expect(localStorage.getItem('ga_token')).toBeNull()
  })
})
