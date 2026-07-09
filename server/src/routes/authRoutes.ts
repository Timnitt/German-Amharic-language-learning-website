import { Router } from 'express'
import bcrypt from 'bcryptjs'
import { z } from 'zod'
import { db, type UserRow } from '../db.js'
import { signToken, requireAuth, type AuthedRequest } from '../auth.js'

export const authRouter = Router()

const registerSchema = z.object({
  name: z.string().trim().min(2, 'Name must be at least 2 characters').max(100),
  email: z.string().trim().toLowerCase().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters').max(128),
})

const loginSchema = z.object({
  email: z.string().trim().toLowerCase().email(),
  password: z.string().min(1),
})

function publicUser(user: UserRow) {
  return { id: user.id, name: user.name, email: user.email, createdAt: user.created_at }
}

authRouter.post('/register', (req, res) => {
  const parsed = registerSchema.safeParse(req.body)
  if (!parsed.success) {
    res.status(400).json({ error: parsed.error.issues[0]?.message ?? 'Invalid input' })
    return
  }
  const { name, email, password } = parsed.data

  const existing = db.prepare('SELECT id FROM users WHERE email = ?').get(email)
  if (existing) {
    res.status(409).json({ error: 'An account with this email already exists' })
    return
  }

  const hash = bcrypt.hashSync(password, 10)
  const result = db
    .prepare('INSERT INTO users (name, email, password_hash) VALUES (?, ?, ?)')
    .run(name, email, hash)
  const user = db.prepare('SELECT * FROM users WHERE id = ?').get(result.lastInsertRowid) as UserRow

  res.status(201).json({
    token: signToken({ userId: user.id, email: user.email }),
    user: publicUser(user),
  })
})

authRouter.post('/login', (req, res) => {
  const parsed = loginSchema.safeParse(req.body)
  if (!parsed.success) {
    res.status(400).json({ error: 'Invalid email or password' })
    return
  }
  const { email, password } = parsed.data

  const user = db.prepare('SELECT * FROM users WHERE email = ?').get(email) as UserRow | undefined
  if (!user || !bcrypt.compareSync(password, user.password_hash)) {
    res.status(401).json({ error: 'Invalid email or password' })
    return
  }

  res.json({
    token: signToken({ userId: user.id, email: user.email }),
    user: publicUser(user),
  })
})

authRouter.get('/me', requireAuth, (req: AuthedRequest, res) => {
  const user = db.prepare('SELECT * FROM users WHERE id = ?').get(req.user!.userId) as UserRow | undefined
  if (!user) {
    res.status(404).json({ error: 'User not found' })
    return
  }
  res.json({ user: publicUser(user) })
})
