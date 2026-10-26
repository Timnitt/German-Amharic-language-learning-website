import { describe, expect, it } from 'vitest'
import { passwordSchema } from '../src/validation.js'

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
