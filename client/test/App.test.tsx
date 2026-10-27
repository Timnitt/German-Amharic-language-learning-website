import { beforeEach, describe, expect, it } from 'vitest'
import { screen, waitFor } from '@testing-library/react'
import App from '../src/App'
import { setToken } from '../src/api'
import { mockFetch, renderPage, stubMatchMedia, testUser } from './helpers'

function renderApp(url: string) {
  return renderPage(<App />, { url, path: '*' })
}

beforeEach(() => {
  stubMatchMedia()
})

describe('App routes', () => {
  it('loads a lazy route through Suspense', async () => {
    mockFetch({ 'GET /api/lessons': { body: { lessons: [] } } })
    renderApp('/lessons')
    expect(screen.getByRole('status')).toHaveTextContent('በመጫን ላይ')
    expect(await screen.findByRole('heading', { name: 'የቋንቋ ትምህርቶች' })).toBeInTheDocument()
  })

  it('redirects the old /vocabulary path to /lessons/vocabulary', async () => {
    mockFetch({
      'GET /api/vocabulary/meta': { body: { levels: [], categories: [], counts: {} } },
      'GET /api/vocabulary?': { body: { items: [], total: 0 } },
    })
    renderApp('/vocabulary')
    expect(await screen.findByRole('heading', { name: 'የቃላት ዝርዝር' })).toBeInTheDocument()
    expect(screen.getByTestId('location')).toHaveTextContent('/lessons/vocabulary')
  })

  it('shows the 404 page for unknown paths', async () => {
    mockFetch({})
    renderApp('/does-not-exist')
    expect(await screen.findByRole('heading', { name: 'ገጹ አልተገኘም' })).toBeInTheDocument()
  })

  it('sends guests from /dashboard to /login', async () => {
    mockFetch({})
    renderApp('/dashboard')
    await waitFor(() => expect(screen.getByTestId('location')).toHaveTextContent('/login'))
    expect(await screen.findByRole('button', { name: 'ግባ' })).toBeInTheDocument()
  })

  it('waits for the session check, then shows the dashboard to a logged-in user', async () => {
    setToken('t')
    mockFetch({
      'GET /api/auth/me': { body: { user: testUser } },
      'GET /api/progress/stats': {
        body: {
          totalVocab: 10, reviewed: 1, mastered: 0, dueToday: 0, currentStreak: 0, longestStreak: 0,
          totalReviews: 1, accuracy: 100, quizCount: 0, quizAverage: 0, byLevel: [], weakest: [],
        },
      },
      'GET /api/quiz/history': { body: { results: [] } },
      'GET /api/lessons': { body: { lessons: [] } },
      'GET /api/progress/lessons': { body: { completed: [] } },
    })
    renderApp('/dashboard')
    expect(screen.getByText('በመጫን ላይ…')).toBeInTheDocument()
    expect(await screen.findByRole('heading', { name: 'ሰላም Abebe Kebede! 👋' })).toBeInTheDocument()
    expect(screen.getByTestId('location')).toHaveTextContent('/dashboard')
  })
})
