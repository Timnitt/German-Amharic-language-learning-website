import { describe, expect, it } from 'vitest'
import { levelSchema, passwordSchema } from '../../src/validation.js'

describe('levelSchema', () => {
  it('accepts the four CEFR levels', () => {
    for (const level of ['A1', 'A2', 'B1', 'B2']) {
      expect(levelSchema.safeParse(level).success).toBe(true)
    }
  })

  it('rejects unknown or malformed levels', () => {
    for (const bad of ['Z9', 'a1', 'C1', '', 1, null, ['A1']]) {
      expect(levelSchema.safeParse(bad).success).toBe(false)
    }
  })
})

describe('passwordSchema', () => {
  it('accepts a password with 8+ chars including a letter and a digit', () => {
    expect(passwordSchema.safeParse('passw0rd').success).toBe(true)
    expect(passwordSchema.safeParse('Str0ngPass!99').success).toBe(true)
  })

  it('rejects passwords shorter than 8 characters', () => {
    const result = passwordSchema.safeParse('ab1')
    expect(result.success).toBe(false)
    expect(result.error!.issues[0].message).toMatch(/at least 8 characters/)
  })

  it('rejects a password with no digit', () => {
    const result = passwordSchema.safeParse('onlyletters')
    expect(result.success).toBe(false)
    expect(result.error!.issues[0].message).toMatch(/one letter and one number/)
  })

  it('rejects a password with no letter', () => {
    expect(passwordSchema.safeParse('12345678').success).toBe(false)
  })

  it('rejects passwords longer than 128 characters', () => {
    expect(passwordSchema.safeParse('a1'.repeat(65)).success).toBe(false)
  })
})
