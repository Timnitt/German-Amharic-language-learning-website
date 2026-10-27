import type { ReactElement } from 'react'
import { render } from '@testing-library/react'
import { MemoryRouter, Route, Routes, useLocation } from 'react-router-dom'
import { vi } from 'vitest'
import { AuthProvider } from '../src/AuthContext'

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
