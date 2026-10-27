import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { act, fireEvent, screen } from '@testing-library/react'
import Quiz from '../src/pages/Quiz'
import { setToken } from '../src/api'
import type { QuizQuestion, User } from '../src/types'
import { mockFetch, renderPage } from './helpers'

// Fake timers because the quiz waits 1.1s after each answer. fireEvent (not userEvent)
// keeps clicks synchronous under fake timers.

const user: User = { id: 1, name: 'Abebe', email: 'a@example.com', createdAt: '2026-01-01' }

const questions: QuizQuestion[] = [
  { vocabId: 1, direction: 'de-am', prompt: 'Haus', options: ['ውሃ', 'ቤት', 'ሥራ', 'መኪና'], answer: 1, example: 'Das Haus ist groß.' },
  { vocabId: 2, direction: 'am-de', prompt: 'ውሃ', options: ['Wasser', 'Brot', 'Auto', 'Tag'], answer: 0, example: '' },
]

async function flush() {
  await act(async () => {
    await vi.runOnlyPendingTimersAsync()
  })
}

async function startQuiz() {
  fireEvent.click(screen.getByRole('button', { name: 'A2' }))
  fireEvent.click(screen.getByRole('button', { name: 'ፈተናውን ጀምር' }))
  await flush()
  expect(screen.getByRole('heading', { name: 'Haus' })).toBeInTheDocument()
}

beforeEach(() => {
  vi.useFakeTimers({ shouldAdvanceTime: true })
})

afterEach(() => {
  vi.useRealTimers()
})

describe('Quiz', () => {
  it('scores answers, marks right and wrong, and shows the final score', async () => {
    const fetchMock = mockFetch({ 'GET /api/quiz?level=A2&count=10': { body: { level: 'A2', questions } } })
    renderPage(<Quiz />, { url: '/quiz', path: '/quiz' })
    await startQuiz()
    expect(fetchMock.calls.map((c) => c.key)).toEqual(['GET /api/quiz?level=A2&count=10'])

    // Q1: correct answer.
    fireEvent.click(screen.getByRole('button', { name: 'ቤት' }))
    expect(screen.getByRole('status')).toHaveTextContent('ትክክል')
    expect(screen.getByText('ነጥብ፦ 1')).toBeInTheDocument()
    await flush()

    // Q2: wrong answer; the right one is still revealed.
    expect(screen.getByRole('heading', { name: 'ውሃ' })).toBeInTheDocument()
    fireEvent.click(screen.getByRole('button', { name: 'Brot' }))
    expect(screen.getByRole('status')).toHaveTextContent('ስህተት')
    expect(screen.getByRole('button', { name: /Wasser/ })).toHaveTextContent('✓')
    expect(screen.getByRole('button', { name: /Brot/ })).toHaveTextContent('✗')
    expect(screen.getByText('ነጥብ፦ 1')).toBeInTheDocument()
    await flush()

    expect(screen.getByText('1/2')).toBeInTheDocument()
  })

  it('ignores a second click on the same question', async () => {
    mockFetch({ 'GET /api/quiz?level=A2&count=10': { body: { level: 'A2', questions } } })
    renderPage(<Quiz />, { url: '/quiz', path: '/quiz' })
    await startQuiz()

    fireEvent.click(screen.getByRole('button', { name: 'ቤት' }))
    fireEvent.click(screen.getByRole('button', { name: /ቤት/ }))
    expect(screen.getByText('ነጥብ፦ 1')).toBeInTheDocument()
  })

  it('saves the result for a logged-in user', async () => {
    setToken('t')
    const fetchMock = mockFetch({
      'GET /api/auth/me': { body: { user } },
      'GET /api/quiz?level=A2&count=10': { body: { level: 'A2', questions } },
      'POST /api/quiz/submit': { status: 201, body: { saved: true } },
    })
    renderPage(<Quiz />, { url: '/quiz', path: '/quiz' })
    await flush()
    await startQuiz()

    fireEvent.click(screen.getByRole('button', { name: 'ቤት' }))
    await flush()
    fireEvent.click(screen.getByRole('button', { name: 'Wasser' }))
    await flush()

    expect(screen.getByText('2/2')).toBeInTheDocument()
    expect(fetchMock.bodiesFor('POST /api/quiz/submit')).toEqual([{ level: 'A2', score: 2, total: 2 }])
  })

  it('does not try to save for an anonymous user', async () => {
    const fetchMock = mockFetch({ 'GET /api/quiz?level=A2&count=10': { body: { level: 'A2', questions } } })
    renderPage(<Quiz />, { url: '/quiz', path: '/quiz' })
    await startQuiz()
    fireEvent.click(screen.getByRole('button', { name: 'ቤት' }))
    await flush()
    fireEvent.click(screen.getByRole('button', { name: 'Wasser' }))
    await flush()

    expect(screen.getByText('2/2')).toBeInTheDocument()
    expect(fetchMock.calls.some((c) => c.key.startsWith('POST'))).toBe(false)
  })

  it('shows a retry notice when saving fails, without hiding the score', async () => {
    setToken('t')
    let submits = 0
    mockFetch({
      'GET /api/auth/me': { body: { user } },
      'GET /api/quiz?level=A2&count=10': { body: { level: 'A2', questions } },
      'POST /api/quiz/submit': () => (++submits === 1 ? { status: 500 } : { status: 201, body: { saved: true } }),
    })
    renderPage(<Quiz />, { url: '/quiz', path: '/quiz' })
    await flush()
    await startQuiz()
    fireEvent.click(screen.getByRole('button', { name: 'ቤት' }))
    await flush()
    fireEvent.click(screen.getByRole('button', { name: 'Wasser' }))
    await flush()

    expect(screen.getByText('2/2')).toBeInTheDocument()
    expect(screen.getByRole('alert')).toHaveTextContent('ውጤቱ አልተቀመጠም')

    fireEvent.click(screen.getByRole('button', { name: 'እንደገና ለማስቀመጥ ይሞክሩ' }))
    await flush()
    expect(submits).toBe(2)
    expect(screen.queryByRole('alert')).toBeNull()
  })

  it('shows an error and returns to setup when the quiz cannot load', async () => {
    mockFetch({ 'GET /api/quiz?level=A2&count=10': { status: 503 } })
    renderPage(<Quiz />, { url: '/quiz', path: '/quiz' })
    fireEvent.click(screen.getByRole('button', { name: 'A2' }))
    fireEvent.click(screen.getByRole('button', { name: 'ፈተናውን ጀምር' }))
    await flush()

    expect(screen.getByText(/የአገልግሎት ችግር/)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'ፈተናውን ጀምር' })).toBeInTheDocument()
  })
})
