import { describe, expect, it } from 'vitest'
import { resolveJwtSecret } from '../../src/auth.js'

const LONG = 'x'.repeat(32)

describe('resolveJwtSecret', () => {
  it('uses the dev fallback outside production when JWT_SECRET is unset', () => {
    expect(resolveJwtSecret({})).toBe('dev-secret-change-in-production')
    expect(resolveJwtSecret({ NODE_ENV: 'development' })).toBe('dev-secret-change-in-production')
  })

  it('prefers an explicit JWT_SECRET in development', () => {
    expect(resolveJwtSecret({ NODE_ENV: 'development', JWT_SECRET: 'short' })).toBe('short')
  })

  it('throws in production when JWT_SECRET is missing', () => {
    expect(() => resolveJwtSecret({ NODE_ENV: 'production' })).toThrow(/at least 32 characters/)
  })

  it('throws in production when JWT_SECRET is shorter than 32 chars', () => {
    expect(() => resolveJwtSecret({ NODE_ENV: 'production', JWT_SECRET: 'x'.repeat(31) })).toThrow(
      /at least 32 characters/,
    )
  })

  it('accepts a 32+ char JWT_SECRET in production', () => {
    expect(resolveJwtSecret({ NODE_ENV: 'production', JWT_SECRET: LONG })).toBe(LONG)
  })
})
