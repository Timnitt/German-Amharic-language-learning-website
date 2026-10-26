import { Router } from 'express'
import bcrypt from 'bcryptjs'
import { z } from 'zod'
import { get, run, type UserRow } from '../db.js'
import { signToken, requireAuth, type AuthedRequest } from '../auth.js'
import { passwordSchema } from '../validation.js'

export const authRouter = Router()

const registerSchema = z.object({
  name: z.string().trim().min(2, 'Name must be at least 2 characters').max(100),
  email: z.string().trim().toLowerCase().email('Invalid email address'),
  password: passwordSchema,
})

const loginSchema = z.object({
  email: z.string().trim().toLowerCase().email(),
  password: z.string().min(1),
})

function publicUser(user: UserRow) {
  return { id: user.id, name: user.name, email: user.email, createdAt: user.created_at }
}

authRouter.post('/register', async (req, res) => {
  const parsed = registerSchema.safeParse(req.body)
  if (!parsed.success) {
    res.status(400).json({ error: parsed.error.issues[0]?.message ?? 'Invalid input' })
    return
  }
  const { name, email, password } = parsed.data

  const existing = await get('SELECT id FROM users WHERE email = ?', [email])
  if (existing) {
    res.status(409).json({ error: 'An account with this email already exists' })
    return
  }

  const hash = bcrypt.hashSync(password, 10)
  const result = await run('INSERT INTO users (name, email, password_hash) VALUES (?, ?, ?)', [
    name,
    email,
    hash,
  ])
  const user = await get<UserRow>('SELECT * FROM users WHERE id = ?', [result.lastInsertRowid!])

  res.status(201).json({
    token: signToken({ userId: user!.id, email: user!.email }),
    user: publicUser(user!),
  })
})

authRouter.post('/login', async (req, res) => {
  const parsed = loginSchema.safeParse(req.body)
  if (!parsed.success) {
    res.status(400).json({ error: 'Invalid email or password' })
    return
  }
  const { email, password } = parsed.data

  const user = await get<UserRow>('SELECT * FROM users WHERE email = ?', [email])
  if (!user || !bcrypt.compareSync(password, user.password_hash)) {
    res.status(401).json({ error: 'Invalid email or password' })
    return
  }

  res.json({
    token: signToken({ userId: user.id, email: user.email }),
    user: publicUser(user),
  })
})

authRouter.get('/me', requireAuth, async (req: AuthedRequest, res) => {
  const user = await get<UserRow>('SELECT * FROM users WHERE id = ?', [req.user!.userId])
  if (!user) {
    res.status(404).json({ error: 'User not found' })
    return
  }
  res.json({ user: publicUser(user) })
})