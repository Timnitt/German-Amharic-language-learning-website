import { afterEach, describe, expect, it, vi } from 'vitest'
import { act, render, screen } from '@testing-library/react'
import ErrorBoundary from '../src/components/ErrorBoundary'
import Spinner from '../src/components/Spinner'
import ErrorMessage from '../src/components/ErrorMessage'
import NotFound from '../src/pages/NotFound'
import { mockFetch, renderPage } from './helpers'

function Boom(): never {
  throw new Error('render crash')
}

describe('ErrorBoundary', () => {
  it('renders its children when nothing throws', () => {
    render(
      <ErrorBoundary>
        <p>fine</p>
      </ErrorBoundary>,
    )
    expect(screen.getByText('fine')).toBeInTheDocument()
    expect(screen.queryByRole('alert')).not.toBeInTheDocument()
  })

  it('replaces a crashed page with an Amharic fallback and logs the error', () => {
    const error = vi.spyOn(console, 'error').mockImplementation(() => {})
    render(
      <ErrorBoundary>
        <Boom />
      </ErrorBoundary>,
    )
    const alert = screen.getByRole('alert')
    expect(alert).toContainElement(screen.getByRole('heading', { name: 'የሆነ ችግር ተፈጥሯል' }))
    expect(screen.getByRole('button', { name: 'ገጹን እንደገና ይጫኑ' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'ወደ መነሻ ይመለሱ' })).toHaveAttribute('href', '/')
    expect(error).toHaveBeenCalledWith('Unhandled UI error:', expect.objectContaining({ message: 'render crash' }), expect.anything())
  })
})

describe('Spinner', () => {
  afterEach(() => {
    vi.useRealTimers()
  })

  it('announces loading and adds a cold-start note after 5 seconds', () => {
    vi.useFakeTimers()
    render(<Spinner />)
    const status = screen.getByRole('status')
    expect(status).toHaveTextContent('በመጫን ላይ…')
    expect(status).not.toHaveTextContent('አገልጋዩ ከእንቅልፉ')

    act(() => vi.advanceTimersByTime(4999))
    expect(status).not.toHaveTextContent('አገልጋዩ ከእንቅልፉ')
    act(() => vi.advanceTimersByTime(1))
    expect(status).toHaveTextContent('አገልጋዩ ከእንቅልፉ እየነቃ ሊሆን ይችላል')
  })
})

describe('ErrorMessage', () => {
  it('shows the default message without a retry button', () => {
    render(<ErrorMessage />)
    expect(screen.getByRole('alert')).toHaveTextContent('ስህተት ተፈጥሯል። እባክዎ እንደገና ይሞክሩ።')
    expect(screen.queryByRole('button')).not.toBeInTheDocument()
  })
})

describe('NotFound', () => {
  it('explains the page is missing and links home', () => {
    mockFetch({})
    renderPage(<NotFound />, { url: '/nope', path: '*' })
    expect(screen.getByRole('heading', { name: 'ገጹ አልተገኘም' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'ወደ መነሻ ይመለሱ' })).toHaveAttribute('href', '/')
    expect(document.title).toBe('ገጹ አልተገኘም | ጀ-አ ቋንቋ ማዕከል')
  })
})
