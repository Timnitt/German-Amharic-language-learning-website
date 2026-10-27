import { describe, expect, it, vi } from 'vitest'
import { screen } from '@testing-library/react'
import Home from '../src/pages/Home'
import { setToken } from '../src/api'
import type { VocabMeta } from '../src/types'
import { mockFetch, renderPage, testUser } from './helpers'

const meta: VocabMeta = {
  levels: ['A1', 'A2', 'B1', 'B2'],
  categories: ['family'],
  counts: { A1: 300, A2: 250, B1: 200 },
}

function renderHome() {
  return renderPage(<Home />)
}

describe('Home', () => {
  it('shows the word count per level and the sign-up link for guests', async () => {
    mockFetch({ 'GET /api/vocabulary/meta': { body: meta } })
    renderHome()

    expect(await screen.findByText(/አሁን 750 ቃላት ይገኛሉ።/)).toBeInTheDocument()
    expect(screen.getByText('A1 ደረጃ').previousSibling).toHaveTextContent('300')
    expect(screen.getByText('B2 ደረጃ').previousSibling).toHaveTextContent('0')
    expect(screen.getByRole('link', { name: 'ነፃ መለያ ይክፈቱ' })).toHaveAttribute('href', '/register')
    expect(screen.getByRole('link', { name: 'መማር ይጀምሩ' })).toHaveAttribute('href', '/flashcards')
    expect(document.title).toBe('ጀ-አ ቋንቋ ማዕከል')
  })

  it('links every feature card to its page', () => {
    mockFetch({ 'GET /api/vocabulary/meta': { body: meta } })
    renderHome()
    const targets = ['የቃላት ዝርዝር', 'ፍላሽ ካርዶች', 'ክለሳ (Spaced Repetition)', 'የቃላት ፈተና', 'የሰዋስው ትምህርቶች'].map(
      (title) => screen.getByRole('heading', { name: title }).closest('a')!.getAttribute('href'),
    )
    expect(targets).toEqual(['/lessons/vocabulary', '/flashcards', '/review', '/quiz', '/lessons'])
  })

  it('still renders when the word counts fail to load', async () => {
    const fetchMock = mockFetch({ 'GET /api/vocabulary/meta': { status: 500, body: {} } })
    renderHome()
    expect(screen.getByRole('heading', { name: 'የጀርመንኛ ቋንቋ በቀላሉ ይማሩ!' })).toBeInTheDocument()
    await vi.waitFor(() => expect(fetchMock.calls).toHaveLength(1))
    expect(screen.queryByText('የቃላት ብዛት በደረጃ')).not.toBeInTheDocument()
    expect(screen.queryByRole('alert')).not.toBeInTheDocument()
  })

  it('shows logged-in users how many words are due and hides sign-up', async () => {
    setToken('t')
    mockFetch({
      'GET /api/auth/me': { body: { user: testUser } },
      'GET /api/vocabulary/meta': { body: meta },
      'GET /api/progress/stats': { body: { dueToday: 6 } },
    })
    renderHome()

    const banner = await screen.findByRole('link', { name: /6 ቃላት ለዛሬ ክለሳ ይጠብቃሉ/ })
    expect(banner).toHaveAttribute('href', '/review')
    expect(screen.queryByRole('link', { name: 'ነፃ መለያ ይክፈቱ' })).not.toBeInTheDocument()
  })

  it('shows no due banner when nothing is due', async () => {
    setToken('t')
    const fetchMock = mockFetch({
      'GET /api/auth/me': { body: { user: testUser } },
      'GET /api/vocabulary/meta': { body: meta },
      'GET /api/progress/stats': { body: { dueToday: 0 } },
    })
    renderHome()
    await vi.waitFor(() => expect(fetchMock.calls.map((c) => c.key)).toContain('GET /api/progress/stats'))
    expect(await screen.findByText('የቃላት ብዛት በደረጃ')).toBeInTheDocument()
    expect(screen.queryByText(/ለዛሬ ክለሳ ይጠብቃሉ/)).not.toBeInTheDocument()
  })
})
