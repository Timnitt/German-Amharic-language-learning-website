import '@testing-library/jest-dom/vitest'
import { afterEach, beforeEach, expect } from 'vitest'
import { cleanup } from '@testing-library/react'
import { unexpectedFetches } from './helpers'

beforeEach(() => {
  localStorage.clear()
  unexpectedFetches.length = 0
  expect.hasAssertions()
})

afterEach(() => {
  cleanup()
  const unexpected = unexpectedFetches.splice(0)
  if (unexpected.length > 0) {
    throw new Error(`Test made requests with no mocked route: ${unexpected.join(', ')}`)
  }
})
