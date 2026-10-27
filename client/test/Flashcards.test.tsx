import { describe, expect, it } from 'vitest'
import { screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Flashcards from '../src/pages/Flashcards'
import { setToken } from '../src/api'
import type { VocabEntry } from '../src/types'
import { mockFetch, renderPage, testUser, word } from './helpers'

const words = [word(1, 'Haus', 'ቤት', { pronunciation: 'ሃውስ' }), word(2, 'Wasser', 'ውሃ')]

function renderFlashcards() {
  return renderPage(<Flashcards />, { url: '/flashcards', path: '/flashcards' })
}

/** The deck is shuffled, so find which word is on the current card. */
function currentWord(): VocabEntry {
  const shown = words.find((w) => screen.queryByText(w.german))
  if (!shown) throw new Error('no card shown')
  return shown
}

function cardButton() {
  return screen.getByRole('button', { name: /ካርዱን ይገልብጡ/ })
}

describe('Flashcards', () => {
  it('shows a loading state, then the first card of the level', async () => {
    const fetchMock = mockFetch({ 'GET /api/vocabulary?level=A1': { body: { items: words } } })
    renderFlashcards()

    expect(screen.getByRole('status')).toHaveTextContent('በመጫን ላይ')
    expect(await screen.findByText('ካርድ 1 / 2')).toBeInTheDocument()
    expect(cardButton()).toHaveAttribute('aria-pressed', 'false')
    expect(fetchMock.calls.map((c) => c.key)).toEqual(['GET /api/vocabulary?level=A1'])
  })

  it('flips the card with Enter and Space and announces the translation', async () => {
    mockFetch({ 'GET /api/vocabulary?level=A1': { body: { items: [words[0]] } } })
    renderFlashcards()
    await screen.findByText('ካርድ 1 / 1')

    cardButton().focus()
    await userEvent.keyboard('{Enter}')
    expect(cardButton()).toHaveAttribute('aria-pressed', 'true')
    expect(cardButton()).toHaveAccessibleName('መልሱን ለመደበቅ ካርዱን ይገልብጡ')
    expect(screen.getByText('ቤት, አነባበብ ሃውስ')).toBeInTheDocument()

    await userEvent.keyboard(' ')
    expect(cardButton()).toHaveAttribute('aria-pressed', 'false')
    expect(cardButton()).toHaveAccessibleName('መልሱን ለማየት ካርዱን ይገልብጡ')
  })

  it('records known and unknown answers for a logged-in user and shows the tally', async () => {
    setToken('t')
    const fetchMock = mockFetch({
      'GET /api/auth/me': { body: { user: testUser } },
      'GET /api/vocabulary?level=A1': { body: { items: words } },
      'POST /api/progress/review': { body: { ok: true } },
    })
    renderFlashcards()
    await screen.findByText('ካርድ 1 / 2')
    await waitFor(() => expect(screen.queryByRole('link', { name: 'ከገቡ' })).not.toBeInTheDocument())

    const first = currentWord()
    await userEvent.click(screen.getByRole('button', { name: '✓ አውቀዋለሁ' }))
    expect(await screen.findByText('ካርድ 2 / 2')).toBeInTheDocument()
    const second = currentWord()
    await userEvent.click(screen.getByRole('button', { name: '✗ አላወቅኩም' }))

    expect(await screen.findByRole('heading', { name: 'ጨርሰዋል!' })).toBeInTheDocument()
    expect(screen.getByText(/ያወቁት፦/)).toHaveTextContent('ያወቁት፦ 1 · ያላወቁት፦ 1')
    await waitFor(() =>
      expect(fetchMock.bodiesFor('POST /api/progress/review')).toEqual([
        { vocabId: first.id, correct: true },
        { vocabId: second.id, correct: false },
      ]),
    )
    expect(second.id).not.toBe(first.id)
  })

  it('lets a guest practise without sending any progress', async () => {
    const fetchMock = mockFetch({ 'GET /api/vocabulary?level=A1': { body: { items: [words[0]] } } })
    renderFlashcards()
    await screen.findByText('ካርድ 1 / 1')
    expect(screen.getByRole('link', { name: 'ከገቡ' })).toHaveAttribute('href', '/login')

    await userEvent.click(screen.getByRole('button', { name: '✓ አውቀዋለሁ' }))
    expect(await screen.findByRole('heading', { name: 'ጨርሰዋል!' })).toBeInTheDocument()
    expect(fetchMock.calls.map((c) => c.key)).toEqual(['GET /api/vocabulary?level=A1'])

    await userEvent.click(screen.getByRole('button', { name: 'እንደገና ጀምር' }))
    expect(screen.getByText('ካርድ 1 / 1')).toBeInTheDocument()
  })

  it('loads the chosen level and says when it has no words', async () => {
    const fetchMock = mockFetch({
      'GET /api/vocabulary?level=A1': { body: { items: words } },
      'GET /api/vocabulary?level=B2': { body: { items: [] } },
    })
    renderFlashcards()
    await screen.findByText('ካርድ 1 / 2')

    await userEvent.click(screen.getByRole('button', { name: 'B2' }))
    expect(await screen.findByText('ለዚህ ደረጃ ቃላት የሉም።')).toBeInTheDocument()
    expect(fetchMock.calls.map((c) => c.key)).toEqual([
      'GET /api/vocabulary?level=A1',
      'GET /api/vocabulary?level=B2',
    ])
  })

  it('shows an Amharic error with a retry button when words fail to load, and retry works', async () => {
    let attempts = 0
    mockFetch({
      'GET /api/vocabulary?level=A1': () => {
        attempts++
        return attempts === 1 ? { status: 500, body: { error: 'boom' } } : { body: { items: words } }
      },
    })
    renderFlashcards()

    expect(await screen.findByRole('alert')).toHaveTextContent('የአገልግሎት ችግር አጋጥሟል')
    expect(screen.queryByText('ለዚህ ደረጃ ቃላት የሉም።')).not.toBeInTheDocument()

    await userEvent.click(screen.getByRole('button', { name: 'እንደገና ይሞክሩ' }))
    expect(await screen.findByText('ካርድ 1 / 2')).toBeInTheDocument()
    expect(screen.queryByRole('alert')).not.toBeInTheDocument()
    expect(attempts).toBe(2)
  })
})
