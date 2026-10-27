import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { act, fireEvent, screen } from '@testing-library/react'
import Vocabulary from '../src/pages/Vocabulary'
import type { VocabMeta } from '../src/types'
import { mockFetch, renderPage, word, type MockResponse } from './helpers'

// Fake timers: the list reloads 200ms after the last filter change.

const meta: VocabMeta = { levels: ['A1', 'A2', 'B1', 'B2'], categories: ['family', 'zz_custom'], counts: { A1: 2 } }
const items = [
  word(1, 'Mutter', 'እናት', { category: 'family', pronunciation: 'ሙተር', example_de: 'Meine Mutter kocht.', example_am: 'እናቴ ታበስላለች።' }),
  word(2, 'Ding', 'ነገር', { level: 'B1', category: 'zz_custom' }),
]

function routes(extra: Record<string, MockResponse | (() => MockResponse)> = {}) {
  return mockFetch({
    'GET /api/vocabulary/meta': { body: meta },
    'GET /api/vocabulary?': { body: { items, total: 2 } },
    ...extra,
  })
}

async function settle() {
  await act(async () => {
    await vi.advanceTimersByTimeAsync(250)
  })
}

function renderVocabulary() {
  return renderPage(<Vocabulary />, { url: '/lessons/vocabulary', path: '/lessons/vocabulary' })
}

beforeEach(() => {
  vi.useFakeTimers({ shouldAdvanceTime: true })
})

afterEach(() => {
  vi.useRealTimers()
})

describe('Vocabulary', () => {
  it('shows a loading state, then every word with its details', async () => {
    routes()
    renderVocabulary()
    expect(screen.getByRole('status')).toHaveTextContent('በመጫን ላይ')
    await settle()

    expect(screen.getByText('Mutter')).toBeInTheDocument()
    expect(screen.getByText('አነባበብ፦ ሙተር')).toBeInTheDocument()
    expect(screen.getByText('„Meine Mutter kocht.“')).toBeInTheDocument()
    expect(screen.getByText('ቤተሰብ', { selector: 'span' })).toBeInTheDocument()
    expect(screen.getByText('zz_custom', { selector: 'span' })).toBeInTheDocument()
  })

  it('offers the levels and categories from the server', async () => {
    routes()
    renderVocabulary()
    await settle()

    const levelOptions = screen.getByRole('combobox', { name: 'በደረጃ ያጣሩ' }).querySelectorAll('option')
    expect([...levelOptions].map((o) => o.value)).toEqual(['', 'A1', 'A2', 'B1', 'B2'])
    const categorySelect = screen.getByRole('combobox', { name: 'በምድብ ያጣሩ' })
    expect([...categorySelect.querySelectorAll('option')].map((o) => o.textContent)).toEqual([
      'ሁሉም ምድብ',
      'ቤተሰብ',
      'zz_custom',
    ])
  })

  it('sends level, category and search as query params', async () => {
    const fetchMock = routes({
      'GET /api/vocabulary?level=B1': { body: { items: [items[1]], total: 1 } },
      'GET /api/vocabulary?level=B1&category=family': { body: { items: [], total: 0 } },
      'GET /api/vocabulary?level=B1&category=family&search=Mut': { body: { items: [items[0]], total: 1 } },
    })
    renderVocabulary()
    await settle()

    fireEvent.change(screen.getByRole('combobox', { name: 'በደረጃ ያጣሩ' }), { target: { value: 'B1' } })
    await settle()
    expect(screen.getByText('Ding')).toBeInTheDocument()
    expect(screen.queryByText('Mutter')).not.toBeInTheDocument()

    fireEvent.change(screen.getByRole('combobox', { name: 'በምድብ ያጣሩ' }), { target: { value: 'family' } })
    await settle()
    expect(screen.getByText('ምንም ቃል አልተገኘም።')).toBeInTheDocument()

    fireEvent.change(screen.getByRole('searchbox', { name: 'ቃል ይፈልጉ' }), { target: { value: 'Mut' } })
    await settle()
    expect(screen.getByText('Mutter')).toBeInTheDocument()

    expect(fetchMock.calls.map((c) => c.key).filter((k) => k !== 'GET /api/vocabulary/meta')).toEqual([
      'GET /api/vocabulary?',
      'GET /api/vocabulary?level=B1',
      'GET /api/vocabulary?level=B1&category=family',
      'GET /api/vocabulary?level=B1&category=family&search=Mut',
    ])
  })

  it('waits for typing to pause before searching', async () => {
    const fetchMock = routes({ 'GET /api/vocabulary?search=Hau': { body: { items: [], total: 0 } } })
    renderVocabulary()
    await settle()

    const box = screen.getByRole('searchbox', { name: 'ቃል ይፈልጉ' })
    fireEvent.change(box, { target: { value: 'H' } })
    fireEvent.change(box, { target: { value: 'Ha' } })
    fireEvent.change(box, { target: { value: 'Hau' } })
    await settle()

    expect(fetchMock.calls.map((c) => c.key).filter((k) => k.includes('search'))).toEqual([
      'GET /api/vocabulary?search=Hau',
    ])
  })

  it('shows an Amharic error with retry, and retry reloads the list', async () => {
    let attempts = 0
    routes({
      'GET /api/vocabulary?': () => {
        attempts++
        return attempts === 1 ? { status: 500, body: {} } : { body: { items, total: 2 } }
      },
    })
    renderVocabulary()
    await settle()

    expect(screen.getByRole('alert')).toHaveTextContent('የአገልግሎት ችግር አጋጥሟል')
    fireEvent.click(screen.getByRole('button', { name: 'እንደገና ይሞክሩ' }))
    await settle()
    expect(screen.getByText('Mutter')).toBeInTheDocument()
    expect(attempts).toBe(2)
  })

  it('shows the rate-limit message on 429', async () => {
    routes({ 'GET /api/vocabulary?': { status: 429, body: { error: 'Too many requests. Please slow down.' } } })
    renderVocabulary()
    await settle()
    expect(screen.getByRole('alert')).toHaveTextContent('በጣም ብዙ ሙከራዎች')
  })
})
