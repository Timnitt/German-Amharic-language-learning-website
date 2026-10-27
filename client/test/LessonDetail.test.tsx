import { describe, expect, it } from 'vitest'
import { screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import LessonDetail from '../src/pages/LessonDetail'
import { setToken } from '../src/api'
import type { Lesson, User } from '../src/types'
import { mockFetch, renderPage } from './helpers'

const user: User = { id: 1, name: 'Abebe', email: 'a@example.com', createdAt: '2026-01-01' }

function lesson(content: string): Lesson {
  return {
    id: 7,
    title: 'Der Artikel',
    subtitle: 'der, die, das',
    level: 'A1',
    category: 'grammar',
    created_at: '2026-01-01',
    content,
  }
}

function renderLesson() {
  return renderPage(<LessonDetail />, { url: '/lessons/7', path: '/lessons/:id' })
}

describe('LessonDetail', () => {
  it('renders lesson markdown as HTML', async () => {
    mockFetch({ 'GET /api/lessons/7': { body: { lesson: lesson('## Regel\n\n**der** Mann') } } })
    renderLesson()

    expect(await screen.findByRole('heading', { name: 'Der Artikel' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Regel' })).toBeInTheDocument()
    expect(screen.getByText('der').tagName).toBe('STRONG')
  })

  it('strips scripts and event handlers from lesson content', async () => {
    const evil = [
      'Hallo',
      '<script>window.__pwned = true</script>',
      '<img src="x" onerror="window.__pwned = true">',
      '<a href="javascript:alert(1)">click</a>',
    ].join('\n\n')
    mockFetch({ 'GET /api/lessons/7': { body: { lesson: lesson(evil) } } })
    const { container } = renderLesson()

    await screen.findByText('Hallo')
    const content = container.querySelector('.lesson-content')!
    expect(content.querySelector('script')).toBeNull()
    expect(content.querySelector('[onerror]')).toBeNull()
    expect(content.querySelector('a')?.getAttribute('href') ?? '').not.toMatch(/javascript:/i)
    expect((window as unknown as { __pwned?: boolean }).__pwned).toBeUndefined()
  })

  it('shows a not-found message for a 404', async () => {
    mockFetch({ 'GET /api/lessons/7': { status: 404, body: { error: 'Lesson not found' } } })
    renderLesson()
    expect(await screen.findByText('ትምህርቱ አልተገኘም።')).toBeInTheDocument()
  })

  it('shows an error with retry on a server error, and recovers', async () => {
    let calls = 0
    mockFetch({
      'GET /api/lessons/7': () =>
        ++calls === 1 ? { status: 500, body: {} } : { body: { lesson: lesson('Wieder da') } },
    })
    renderLesson()

    expect(await screen.findByRole('alert')).toHaveTextContent('የአገልግሎት ችግር')
    await userEvent.click(screen.getByRole('button', { name: 'እንደገና ይሞክሩ' }))
    expect(await screen.findByText('Wieder da')).toBeInTheDocument()
  })

  it('lets a logged-in user mark the lesson complete', async () => {
    setToken('t')
    const fetchMock = mockFetch({
      'GET /api/auth/me': { body: { user } },
      'GET /api/lessons/7': { body: { lesson: lesson('Text') } },
      'GET /api/progress/lessons': { body: { completed: [] } },
      'POST /api/progress/lesson-complete': { status: 201, body: { saved: true } },
    })
    renderLesson()

    await userEvent.click(await screen.findByRole('button', { name: /ትምህርቱን ጨርሻለሁ/ }))

    expect(await screen.findByText(/ይህን ትምህርት ጨርሰዋል/)).toBeInTheDocument()
    expect(fetchMock.bodiesFor('POST /api/progress/lesson-complete')).toEqual([{ lessonId: 7 }])
  })

  it('shows an already-completed lesson as done', async () => {
    setToken('t')
    mockFetch({
      'GET /api/auth/me': { body: { user } },
      'GET /api/lessons/7': { body: { lesson: lesson('Text') } },
      'GET /api/progress/lessons': { body: { completed: [{ lesson_id: 7, completed_at: '2026-01-02' }] } },
    })
    renderLesson()

    expect(await screen.findByText(/ይህን ትምህርት ጨርሰዋል/)).toBeInTheDocument()
    await waitFor(() => expect(screen.queryByRole('button', { name: /ትምህርቱን ጨርሻለሁ/ })).toBeNull())
  })
})
