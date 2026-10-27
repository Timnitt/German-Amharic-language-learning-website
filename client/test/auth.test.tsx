import { describe, expect, it } from 'vitest'
import { act, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Login from '../src/pages/Login'
import { useAuth } from '../src/AuthContext'
import { getToken, setToken, UNAUTHORIZED_EVENT } from '../src/api'
import type { User } from '../src/types'
import { mockFetch, renderPage } from './helpers'

const user: User = { id: 1, name: 'Abebe', email: 'a@example.com', createdAt: '2026-01-01' }

function WhoAmI() {
  const { user, loading } = useAuth()
  if (loading) return <p>loading</p>
  return <p>{user ? `user:${user.name}` : 'anonymous'}</p>
}

describe('AuthProvider', () => {
  it('restores the session from a stored token', async () => {
    setToken('good')
    mockFetch({ 'GET /api/auth/me': { body: { user } } })
    renderPage(<WhoAmI />)
    expect(await screen.findByText('user:Abebe')).toBeInTheDocument()
  })

  it('drops a stale token silently, without redirecting', async () => {
    setToken('stale')
    mockFetch({ 'GET /api/auth/me': { status: 401, body: { error: 'Invalid or expired token' } } })
    renderPage(<WhoAmI />, { url: '/lessons', path: '/lessons' })

    expect(await screen.findByText('anonymous')).toBeInTheDocument()
    expect(getToken()).toBeNull()
    expect(screen.getByTestId('location')).toHaveTextContent('/lessons')
  })

  it('logs out and goes to /login when a request reports an expired session', async () => {
    setToken('good')
    mockFetch({ 'GET /api/auth/me': { body: { user } } })
    renderPage(<WhoAmI />, { url: '/dashboard', path: '/dashboard' })
    await screen.findByText('user:Abebe')

    act(() => {
      window.dispatchEvent(new Event(UNAUTHORIZED_EVENT))
    })

    expect(getToken()).toBeNull()
    expect(screen.getByTestId('location')).toHaveTextContent('/login')
  })
})

describe('Login page', () => {
  it('logs in, stores the token and goes to the dashboard', async () => {
    const fetchMock = mockFetch({
      'POST /api/auth/login': { body: { token: 'new-token', user } },
    })
    renderPage(<Login />, { url: '/login', path: '/login' })

    await userEvent.type(screen.getByLabelText('ኢሜይል'), 'a@example.com')
    await userEvent.type(screen.getByLabelText('የይለፍ ቃል'), 'passw0rd!')
    await userEvent.click(screen.getByRole('button', { name: 'ግባ' }))

    expect(await screen.findByTestId('location')).toHaveTextContent('/dashboard')
    expect(getToken()).toBe('new-token')
    expect(fetchMock.bodiesFor('POST /api/auth/login')).toEqual([
      { email: 'a@example.com', password: 'passw0rd!' },
    ])
  })

  it('shows an Amharic error and stays on the page for wrong credentials', async () => {
    mockFetch({ 'POST /api/auth/login': { status: 401, body: { error: 'Invalid email or password' } } })
    renderPage(<Login />, { url: '/login', path: '/login' })

    await userEvent.type(screen.getByLabelText('ኢሜይል'), 'a@example.com')
    await userEvent.type(screen.getByLabelText('የይለፍ ቃል'), 'wrong')
    await userEvent.click(screen.getByRole('button', { name: 'ግባ' }))

    expect(await screen.findByText(/የይለፍ ቃል ትክክል አይደለም/)).toBeInTheDocument()
    expect(screen.getByTestId('location')).toHaveTextContent('/login')
    expect(getToken()).toBeNull()
  })

  it('shows the friendly rate-limit message after too many attempts', async () => {
    mockFetch({ 'POST /api/auth/login': { status: 429, body: { error: 'Too many attempts. Please try again in a few minutes.' } } })
    renderPage(<Login />, { url: '/login', path: '/login' })

    await userEvent.type(screen.getByLabelText('ኢሜይል'), 'a@example.com')
    await userEvent.type(screen.getByLabelText('የይለፍ ቃል'), 'passw0rd!')
    await userEvent.click(screen.getByRole('button', { name: 'ግባ' }))

    expect(await screen.findByText('በጣም ብዙ ሙከራዎች። እባክዎ ከጥቂት ደቂቃዎች በኋላ እንደገና ይሞክሩ።')).toBeInTheDocument()
    expect(screen.getByTestId('location')).toHaveTextContent('/login')
  })

  it('logs in with the demo account', async () => {
    const fetchMock = mockFetch({ 'POST /api/auth/login': { body: { token: 'demo-token', user } } })
    renderPage(<Login />, { url: '/login', path: '/login' })

    await userEvent.click(screen.getByRole('button', { name: /Try Demo/ }))

    expect(await screen.findByTestId('location')).toHaveTextContent('/dashboard')
    expect(fetchMock.bodiesFor('POST /api/auth/login')).toEqual([
      { email: 'demo@example.com', password: 'demo1234' },
    ])
  })
})
