import { describe, expect, it, vi } from 'vitest'
import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Lessons from '../src/pages/Lessons'
import type { LessonSummary } from '../src/types'
import { mockFetch, renderPage } from './helpers'

const lessons: LessonSummary[] = [
  { id: 3, title: 'Der Artikel', subtitle: 'der, die, das', level: 'A1', category: 'grammar', created_at: '2026-01-01' },
  { id: 8, title: 'Konjunktiv II', subtitle: 'würde + Infinitiv', level: 'B2', category: 'grammar', created_at: '2026-01-01' },
]

function renderLessons() {
  return renderPage(<Lessons />, { url: '/lessons', path: '/lessons' })
}

describe('Lessons', () => {
  it('shows a loading state, then links to every lesson', async () => {
    mockFetch({ 'GET /api/lessons': { body: { lessons } } })
    renderLessons()
    expect(screen.getByRole('status')).toHaveTextContent('በመጫን ላይ')

    const first = await screen.findByRole('link', { name: /Der Artikel/ })
    expect(first).toHaveAttribute('href', '/lessons/3')
    expect(first).toHaveTextContent('der, die, das')
    expect(screen.getByRole('link', { name: /Konjunktiv II/ })).toHaveAttribute('href', '/lessons/8')
    expect(screen.getByRole('link', { name: /የቃላት ዝርዝር/ })).toHaveAttribute('href', '/lessons/vocabulary')
    expect(document.title).toBe('ትምህርቶች | ጀ-አ ቋንቋ ማዕከል')
  })

  it('shows an Amharic error with retry, and retry loads the lessons', async () => {
    let attempts = 0
    mockFetch({
      'GET /api/lessons': () => {
        attempts++
        return attempts === 1 ? { status: 500, body: {} } : { body: { lessons } }
      },
    })
    renderLessons()

    expect(await screen.findByRole('alert')).toHaveTextContent('የአገልግሎት ችግር አጋጥሟል። እባክዎ ቆይተው እንደገና ይሞክሩ።')
    await userEvent.click(screen.getByRole('button', { name: 'እንደገና ይሞክሩ' }))
    expect(await screen.findByRole('link', { name: /Der Artikel/ })).toBeInTheDocument()
    expect(screen.queryByRole('alert')).not.toBeInTheDocument()
  })

  it('shows the friendly rate-limit message on 429', async () => {
    mockFetch({ 'GET /api/lessons': { status: 429, body: { error: 'Too many requests. Please slow down.' } } })
    renderLessons()
    const alert = await screen.findByRole('alert')
    expect(alert).toHaveTextContent('በጣም ብዙ ሙከራዎች። እባክዎ ከጥቂት ደቂቃዎች በኋላ እንደገና ይሞክሩ።')
    expect(alert).not.toHaveTextContent('Too many requests')
  })

  it('shows the connection message when the server is unreachable', async () => {
    const failing = vi.fn(async () => {
      throw new TypeError('Failed to fetch')
    })
    vi.stubGlobal('fetch', failing)
    renderLessons()
    expect(await screen.findByRole('alert')).toHaveTextContent('ከአገልጋዩ ጋር መገናኘት አልተቻለም')
    expect(failing).toHaveBeenCalledTimes(1)
  })
})
