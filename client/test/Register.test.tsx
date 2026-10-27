import { describe, expect, it, vi } from 'vitest'
import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Register from '../src/pages/Register'
import { getToken } from '../src/api'
import { mockFetch, renderPage, testUser } from './helpers'

const WEAK_PASSWORD_MESSAGE =
  'የይለፍ ቃል ቢያንስ አንድ ፊደልና አንድ ቁጥር መያዝ አለበት (Password must include at least one letter and one number)'

function renderRegister() {
  return renderPage(<Register />, { url: '/register', path: '/register' })
}

async function fillForm(password: string) {
  await userEvent.type(screen.getByLabelText('ስም'), 'Abebe Kebede')
  await userEvent.type(screen.getByLabelText('ኢሜይል'), 'a@example.com')
  await userEvent.type(screen.getByLabelText(/የይለፍ ቃል/), password)
  await userEvent.click(screen.getByRole('button', { name: 'ተመዝገብ' }))
}

describe('Register page', () => {
  it('shows the password rule next to the password field', () => {
    mockFetch({})
    renderRegister()
    expect(screen.getByLabelText(/የይለፍ ቃል/)).toHaveAttribute('minLength', '8')
    expect(screen.getByText('(ቢያንስ 8 ፊደላት፣ አንድ ፊደልና አንድ ቁጥር)')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'ይግቡ' })).toHaveAttribute('href', '/login')
  })

  it('creates the account, stores the token and goes to the dashboard', async () => {
    const fetchMock = mockFetch({ 'POST /api/auth/register': { status: 201, body: { token: 'new', user: testUser } } })
    renderRegister()
    await fillForm('passw0rd1')

    expect(await screen.findByTestId('location')).toHaveTextContent('/dashboard')
    expect(getToken()).toBe('new')
    expect(fetchMock.bodiesFor('POST /api/auth/register')).toEqual([
      { name: 'Abebe Kebede', email: 'a@example.com', password: 'passw0rd1' },
    ])
  })

  it("shows the server's message for a weak password and stays on the page", async () => {
    mockFetch({ 'POST /api/auth/register': { status: 400, body: { error: WEAK_PASSWORD_MESSAGE } } })
    renderRegister()
    await fillForm('onlyletters')

    expect(await screen.findByText(WEAK_PASSWORD_MESSAGE)).toBeInTheDocument()
    expect(screen.getByTestId('location')).toHaveTextContent('/register')
    expect(getToken()).toBeNull()
    expect(screen.getByRole('button', { name: 'ተመዝገብ' })).toBeEnabled()
  })

  it('shows the friendly rate-limit message on 429', async () => {
    mockFetch({ 'POST /api/auth/register': { status: 429, body: { error: 'Too many attempts.' } } })
    renderRegister()
    await fillForm('passw0rd1')
    expect(await screen.findByText('በጣም ብዙ ሙከራዎች። እባክዎ ከጥቂት ደቂቃዎች በኋላ እንደገና ይሞክሩ።')).toBeInTheDocument()
  })

  it('disables the button while the request is in flight', async () => {
    let release!: () => void
    const pending = new Promise<void>((r) => (release = r))
    vi.stubGlobal(
      'fetch',
      vi.fn(async () => {
        await pending
        return new Response(JSON.stringify({ token: 'new', user: testUser }), { status: 201 })
      }),
    )
    renderRegister()
    await fillForm('passw0rd1')

    expect(screen.getByRole('button', { name: 'በመመዝገብ ላይ…' })).toBeDisabled()
    release()
    expect(await screen.findByTestId('location')).toHaveTextContent('/dashboard')
  })
})
