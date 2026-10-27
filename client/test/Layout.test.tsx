import { beforeEach, describe, expect, it } from 'vitest'
import { screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Layout from '../src/components/Layout'
import { getToken, setToken } from '../src/api'
import { mockFetch, renderPage, stubMatchMedia, testUser } from './helpers'

function renderLayout(url = '/flashcards') {
  return renderPage(
    <Layout>
      <p>page body</p>
    </Layout>,
    { url, path: '*' },
  )
}

function menuButton() {
  return screen.getByRole('button', { name: /ዝርዝሩን/ })
}

beforeEach(() => {
  stubMatchMedia()
})

describe('Layout', () => {
  it('renders the page inside the main landmark with a skip link', () => {
    mockFetch({})
    renderLayout()
    expect(within(screen.getByRole('main')).getByText('page body')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'ወደ ይዘቱ ዝለል' })).toHaveAttribute('href', '#main-content')
  })

  it('toggles the mobile menu and reflects it in aria-expanded', async () => {
    mockFetch({})
    renderLayout()
    expect(menuButton()).toHaveAttribute('aria-expanded', 'false')
    expect(menuButton()).toHaveAccessibleName('ዝርዝሩን ክፈት')
    expect(screen.queryByRole('navigation', { name: 'ዋና ዝርዝር' })).not.toBeInTheDocument()

    await userEvent.click(menuButton())
    expect(menuButton()).toHaveAttribute('aria-expanded', 'true')
    expect(menuButton()).toHaveAccessibleName('ዝርዝሩን ዝጋ')
    const menu = screen.getByRole('navigation', { name: 'ዋና ዝርዝር' })
    expect(menuButton()).toHaveAttribute('aria-controls', menu.id)
    expect(within(menu).getAllByRole('link').map((a) => a.getAttribute('href'))).toEqual([
      '/flashcards',
      '/review',
      '/quiz',
      '/lessons',
      '/login',
    ])

    await userEvent.click(menuButton())
    expect(menuButton()).toHaveAttribute('aria-expanded', 'false')
    expect(screen.queryByRole('navigation', { name: 'ዋና ዝርዝር' })).not.toBeInTheDocument()
  })

  it('closes the menu on Escape', async () => {
    mockFetch({})
    renderLayout()
    await userEvent.click(menuButton())
    expect(menuButton()).toHaveAttribute('aria-expanded', 'true')

    await userEvent.keyboard('{Escape}')
    expect(menuButton()).toHaveAttribute('aria-expanded', 'false')
    expect(screen.queryByRole('navigation', { name: 'ዋና ዝርዝር' })).not.toBeInTheDocument()
  })

  it('closes the menu after following a link', async () => {
    mockFetch({})
    renderLayout()
    await userEvent.click(menuButton())
    await userEvent.click(within(screen.getByRole('navigation', { name: 'ዋና ዝርዝር' })).getByRole('link', { name: 'ፈተና' }))

    expect(screen.getByTestId('location')).toHaveTextContent('/quiz')
    expect(menuButton()).toHaveAttribute('aria-expanded', 'false')
  })

  it('shows the dashboard link and a logout button for a logged-in user', async () => {
    setToken('t')
    mockFetch({ 'GET /api/auth/me': { body: { user: testUser } } })
    renderLayout('/dashboard')

    const logout = await screen.findByRole('button', { name: 'ውጣ (Abebe)' })
    expect(screen.getAllByRole('link', { name: 'ዳሽቦርድ' })[0]).toHaveAttribute('href', '/dashboard')
    expect(screen.queryByRole('link', { name: 'ግባ' })).not.toBeInTheDocument()

    await userEvent.click(logout)
    expect(getToken()).toBeNull()
    expect(screen.getByTestId('location').textContent).toBe('/')
    expect(screen.getAllByRole('link', { name: 'ግባ' })[0]).toHaveAttribute('href', '/login')
  })

  it('logs out from the mobile menu too', async () => {
    setToken('t')
    mockFetch({ 'GET /api/auth/me': { body: { user: testUser } } })
    renderLayout('/dashboard')
    await screen.findByRole('button', { name: 'ውጣ (Abebe)' })

    await userEvent.click(menuButton())
    await userEvent.click(within(screen.getByRole('navigation', { name: 'ዋና ዝርዝር' })).getByRole('button', { name: 'ውጣ' }))
    expect(getToken()).toBeNull()
    expect(screen.getByTestId('location').textContent).toBe('/')
  })

  it('marks the current page in the navigation', () => {
    mockFetch({})
    renderLayout('/review')
    const links = screen.getAllByRole('link', { name: 'ክለሳ' })
    expect(links[0]).toHaveAttribute('aria-current', 'page')
    expect(screen.getAllByRole('link', { name: 'ካርዶች' })[0]).not.toHaveAttribute('aria-current')
  })
})
