import { describe, expect, it } from 'vitest'
import { screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Review from '../src/pages/Review'
import { setToken } from '../src/api'
import type { ReviewWord } from '../src/types'
import { mockFetch, renderPage, testUser, word } from './helpers'

function due(id: number, german: string, amharic: string): ReviewWord {
  return { ...word(id, german, amharic), correct_count: 1, wrong_count: 1, next_review: '2026-01-01 00:00:00' }
}

const queue = [due(1, 'Haus', 'ቤት'), due(2, 'Wasser', 'ውሃ'), due(3, 'Brot', 'ዳቦ')]

function renderReview() {
  return renderPage(<Review />, { url: '/review', path: '/review' })
}

function loggedIn(dueResponse: Parameters<typeof mockFetch>[0][string]) {
  setToken('t')
  return mockFetch({
    'GET /api/auth/me': { body: { user: testUser } },
    'GET /api/progress/due?limit=20': dueResponse,
    'POST /api/progress/review': { body: { ok: true } },
  })
}

describe('Review', () => {
  it('asks guests to log in and fetches nothing', async () => {
    const fetchMock = mockFetch({})
    renderReview()
    expect(await screen.findByText('ክለሳ ለመጠቀም መግባት ያስፈልጋል።')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'ግባ' })).toHaveAttribute('href', '/login')
    expect(fetchMock.calls).toEqual([])
  })

  it('advances the counter after each answer and posts each result', async () => {
    const fetchMock = loggedIn({ body: { items: queue, total: 5 } })
    renderReview()

    expect(await screen.findByText('5 ቃላት ለዛሬ ይጠብቃሉ')).toBeInTheDocument()
    expect(screen.getByText('1 / 3')).toBeInTheDocument()
    expect(screen.getByText('Haus')).toBeInTheDocument()

    await userEvent.click(screen.getByRole('button', { name: '✓ አውቀዋለሁ' }))
    expect(screen.getByText('4 ቃላት ለዛሬ ይጠብቃሉ')).toBeInTheDocument()
    expect(screen.getByText('2 / 3')).toBeInTheDocument()
    expect(screen.getByText('Wasser')).toBeInTheDocument()

    await userEvent.click(screen.getByRole('button', { name: '✗ አላወቅኩም' }))
    expect(screen.getByText('3 / 3')).toBeInTheDocument()
    await userEvent.click(screen.getByRole('button', { name: '✓ አውቀዋለሁ' }))

    expect(await screen.findByRole('heading', { name: 'ክለሳ ተጠናቀቀ!' })).toBeInTheDocument()
    expect(screen.getByText(/ያወቁት፦/)).toHaveTextContent('ያወቁት፦ 2 · ያላወቁት፦ 1')
    expect(screen.getByText('ሌላ 2 ቃላት ገና ይጠብቃሉ')).toBeInTheDocument()
    await waitFor(() =>
      expect(fetchMock.bodiesFor('POST /api/progress/review')).toEqual([
        { vocabId: 1, correct: true },
        { vocabId: 2, correct: false },
        { vocabId: 3, correct: true },
      ]),
    )
  })

  it('flips the card from the keyboard', async () => {
    loggedIn({ body: { items: [queue[0]], total: 1 } })
    renderReview()
    const card = await screen.findByRole('button', { name: 'መልሱን ለማየት ካርዱን ይገልብጡ' })

    card.focus()
    await userEvent.keyboard('{Enter}')
    expect(card).toHaveAttribute('aria-pressed', 'true')
    expect(screen.getByText('ቤት', { selector: '.sr-only' })).toBeInTheDocument()
  })

  it('does not mention more words when the whole queue was reviewed', async () => {
    loggedIn({ body: { items: [queue[0]], total: 1 } })
    renderReview()
    await userEvent.click(await screen.findByRole('button', { name: '✓ አውቀዋለሁ' }))
    expect(await screen.findByRole('heading', { name: 'ክለሳ ተጠናቀቀ!' })).toBeInTheDocument()
    expect(screen.queryByText(/ገና ይጠብቃሉ/)).not.toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'ዳሽቦርድ' })).toHaveAttribute('href', '/dashboard')
  })

  it('shows the empty-queue state when nothing is due', async () => {
    loggedIn({ body: { items: [], total: 0 } })
    renderReview()
    expect(await screen.findByRole('heading', { name: 'ለዛሬ ክለሳ የለም!' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'አዳዲስ ቃላት ይለማመዱ' })).toHaveAttribute('href', '/flashcards')
  })

  it('shows an Amharic error with retry, and retry loads the queue', async () => {
    let attempts = 0
    loggedIn(() => {
      attempts++
      return attempts === 1 ? { status: 503, body: {} } : { body: { items: queue, total: 3 } }
    })
    renderReview()

    expect(await screen.findByRole('alert')).toHaveTextContent('የአገልግሎት ችግር አጋጥሟል')
    await userEvent.click(screen.getByRole('button', { name: 'እንደገና ይሞክሩ' }))
    expect(await screen.findByText('1 / 3')).toBeInTheDocument()
    expect(attempts).toBe(2)
  })

  it('logs out and goes to login when the session has expired', async () => {
    loggedIn({ status: 401, body: { error: 'Invalid or expired token' } })
    renderReview()
    await waitFor(() => expect(screen.getByTestId('location')).toHaveTextContent('/login'))
    expect(localStorage.getItem('ga_token')).toBeNull()
  })
})
