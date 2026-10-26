import { z } from 'zod'

// Shared, DB-free request-validation schemas so they can be reused across routes
// and unit-tested without starting the server.

// The only valid CEFR levels, matching the DB CHECK constraint on vocabulary/lessons.
export const LEVELS = ['A1', 'A2', 'B1', 'B2'] as const
export const levelSchema = z.enum(LEVELS)

// Upper bound on free-text search so a request can't push a pathologically long LIKE term.
export const MAX_SEARCH_LENGTH = 100

// Registration password policy: at least 8 characters with at least one letter and one
// digit. Applied on register only - login keeps accepting whatever is already stored.
export const passwordSchema = z
  .string()
  .min(8, 'የይለፍ ቃል ቢያንስ 8 ፊደላት መሆን አለበት (Password must be at least 8 characters)')
  .max(128, 'Password must be at most 128 characters')
  .refine((p) => /[A-Za-z]/.test(p) && /[0-9]/.test(p), {
    message:
      'የይለፍ ቃል ቢያንስ አንድ ፊደልና አንድ ቁጥር መያዝ አለበት (Password must include at least one letter and one number)',
  })
