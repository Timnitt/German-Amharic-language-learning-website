import type { ReactElement } from 'react'
import { render } from '@testing-library/react'
import { MemoryRouter, Route, Routes, useLocation } from 'react-router-dom'
import { vi } from 'vitest'
import { AuthProvider } from '../src/AuthContext'
import type { User, VocabEntry } from '../src/types'

export const testUser: User = { id: 1, name: 'Abebe Kebede', email: 'a@example.com', createdAt: '2026-01-01' }

export function word(id: number, german: string, amharic: string, extra: Partial<VocabEntry> = {}): VocabEntry {
  return {
    id,
    german,
    amharic,
    pronunciation: '',
    level: 'A1',
    category: 'home',
    example_de: '',
    example_am: '',
    ...extra,
  }
}

export interface MatchMediaStub {
  /** Simulates the OS switching its colour scheme. */
  setDark(dark: boolean): void
}

/** jsdom has no matchMedia; ThemeToggle needs one. */
export function stubMatchMedia(initiallyDark = false): MatchMediaStub {
  const listeners = new Set<(e: MediaQueryListEvent) => void>()
  let matches = initiallyDark
  vi.stubGlobal('matchMedia', (query: string) => ({
    get matches() {
      return matches
    },
    media: query,
    addEventListener: (_: string, fn: (e: MediaQueryListEvent) => void) => listeners.add(fn),
    removeEventListener: (_: string, fn: (e: MediaQueryListEvent) => void) => listeners.delete(fn),
  }))
  return {
    setDark(dark) {
      matches = dark
      for (const fn of listeners) fn({ matches: dark } as MediaQueryListEvent)
    },
  }
}

/** Requests with no matching route; setup.ts fails the test if any remain. */
export const unexpectedFetches: string[] = []

export interface MockResponse {
  status?: number
  body?: unknown
}

type Handler = MockResponse | ((init: RequestInit) => MockResponse)

export interface FetchMock {
  calls: { key: string; init: RequestInit }[]
  bodiesFor(key: string): unknown[]
}

/** Stubs fetch with a route table keyed by "METHOD /path?query"; unmatched requests throw. */
export function mockFetch(routes: Record<string, Handler>): FetchMock {
  const calls: FetchMock['calls'] = []
  vi.stubGlobal(
    'fetch',
    vi.fn(async (input: RequestInfo | URL, init: RequestInit = {}) => {
      const key = `${(init.method ?? 'GET').toUpperCase()} ${String(input)}`
      calls.push({ key, init })
      const handler = routes[key]
      if (!handler) {
        unexpectedFetches.push(key)
        throw new Error(`Unexpected fetch: ${key}`)
      }
      const { status = 200, body = {} } = typeof handler === 'function' ? handler(init) : handler
      return new Response(JSON.stringify(body), {
        status,
        headers: { 'Content-Type': 'application/json' },
      })
    }),
  )
  return {
    calls,
    bodiesFor: (key) =>
      calls.filter((c) => c.key === key).map((c) => JSON.parse(String(c.init.body ?? 'null'))),
  }
}

function LocationProbe() {
  const location = useLocation()
  return <div data-testid="location">{location.pathname}</div>
}

export function renderPage(ui: ReactElement, { url = '/', path = '/' }: { url?: string; path?: string } = {}) {
  return render(
    <MemoryRouter initialEntries={[url]}>
      <AuthProvider>
        <Routes>
          <Route path={path} element={ui} />
          <Route path="*" element={null} />
        </Routes>
        <LocationProbe />
      </AuthProvider>
    </MemoryRouter>,
  )
}
