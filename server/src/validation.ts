import { z } from 'zod'

// Shared, DB-free request-validation schemas so they can be reused across routes
// and unit-tested without starting the server.

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
