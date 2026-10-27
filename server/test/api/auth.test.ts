import { beforeAll, describe, expect, it } from 'vitest'
import request from 'supertest'
import jwt from 'jsonwebtoken'
import type { Express } from 'express'
import { get } from '../../src/db.js'
import { JWT_SECRET } from '../../src/auth.js'
import { bearer, makeApp, registerUser } from '../helpers.js'

let app: Express

beforeAll(async () => {
  app = await makeApp()
})

describe('POST /api/auth/register', () => {
  it('creates a user, hashes the password and returns a working token', async () => {
    const res = await request(app)
      .post('/api/auth/register')
      .send({ name: 'Abebe', email: 'abebe@example.com', password: 'passw0rd!' })

    expect(res.status).toBe(201)
    expect(res.body.user).toEqual({
      id: expect.any(Number),
      name: 'Abebe',
      email: 'abebe@example.com',
      createdAt: expect.any(String),
    })
    expect(res.body.user).not.toHaveProperty('password_hash')

    const row = await get<{ password_hash: string }>(
      'SELECT password_hash FROM users WHERE email = ?',
      ['abebe@example.com'],
    )
    expect(row?.password_hash).toMatch(/^\$2[aby]\$10\$/)
    expect(row?.password_hash).not.toContain('passw0rd!')

    const me = await request(app).get('/api/auth/me').set(bearer(res.body.token))
    expect(me.status).toBe(200)
    expect(me.body.user.email).toBe('abebe@example.com')
  })

  it('normalises email to trimmed lowercase', async () => {
    const res = await request(app)
      .post('/api/auth/register')
      .send({ name: 'Case Test', email: '  MiXeD@Example.COM ', password: 'passw0rd!' })
    expect(res.status).toBe(201)
    expect(res.body.user.email).toBe('mixed@example.com')
  })

  it('rejects a duplicate email with 409, case-insensitively', async () => {
    const first = await request(app)
      .post('/api/auth/register')
      .send({ name: 'First', email: 'dup@example.com', password: 'passw0rd!' })
    expect(first.status).toBe(201)
    const res = await request(app)
      .post('/api/auth/register')
      .send({ name: 'Second', email: 'DUP@example.com', password: 'passw0rd!' })
    expect(res.status).toBe(409)
    expect(res.body.error).toMatch(/already exists/)
  })

  it.each([
    [{ name: 'Weak', email: 'weak@example.com', password: 'short1' }, /at least 8 characters/],
    [{ name: 'Weak', email: 'weak@example.com', password: 'onlyletters' }, /one letter and one number/],
    [{ name: 'W', email: 'weak@example.com', password: 'passw0rd!' }, /at least 2 characters/],
    [{ name: 'Weak', email: 'not-an-email', password: 'passw0rd!' }, /Invalid email/],
  ])('rejects invalid input %j with 400', async (body, message) => {
    const res = await request(app).post('/api/auth/register').send(body)
    expect(res.status).toBe(400)
    expect(res.body.error).toMatch(message)
    expect(await get('SELECT id FROM users WHERE email = ?', ['weak@example.com'])).toBeUndefined()
  })
})

describe('POST /api/auth/login', () => {
  it('logs in the seeded demo user', async () => {
    const res = await request(app)
      .post('/api/auth/login')
      .send({ email: 'demo@example.com', password: process.env.DEMO_PASSWORD || 'demo1234' })
    expect(res.status).toBe(200)
    expect(res.body.user.email).toBe('demo@example.com')
    expect(typeof res.body.token).toBe('string')
  })

  it('logs in a registered user with the email in any case', async () => {
    const u = await registerUser(app)
    const res = await request(app)
      .post('/api/auth/login')
      .send({ email: u.email.toUpperCase(), password: u.password })
    expect(res.status).toBe(200)
    expect(res.body.user.id).toBe(u.user.id)
  })

  it('returns the same 401 for a wrong password and an unknown email', async () => {
    const u = await registerUser(app)
    const wrongPw = await request(app)
      .post('/api/auth/login')
      .send({ email: u.email, password: 'nope1234' })
    const unknown = await request(app)
      .post('/api/auth/login')
      .send({ email: 'nobody@example.com', password: 'nope1234' })
    expect(wrongPw.status).toBe(401)
    expect(unknown.status).toBe(401)
    expect(wrongPw.body).toEqual(unknown.body)
    expect(wrongPw.body).not.toHaveProperty('token')
  })

  it('rejects a malformed body with 400', async () => {
    const res = await request(app).post('/api/auth/login').send({ email: 'x' })
    expect(res.status).toBe(400)
  })
})

describe('GET /api/auth/me', () => {
  it('requires a token', async () => {
    const res = await request(app).get('/api/auth/me')
    expect(res.status).toBe(401)
    expect(res.body.error).toBe('Authentication required')
  })

  it('rejects a token signed with another secret', async () => {
    const forged = jwt.sign({ userId: 1, email: 'demo@example.com' }, 'not-the-secret')
    const res = await request(app).get('/api/auth/me').set(bearer(forged))
    expect(res.status).toBe(401)
    expect(res.body.error).toBe('Invalid or expired token')
  })

  it('rejects an expired token', async () => {
    const expired = jwt.sign(
      { userId: 1, email: 'demo@example.com', exp: Math.floor(Date.now() / 1000) - 60 },
      JWT_SECRET,
    )
    const res = await request(app).get('/api/auth/me').set(bearer(expired))
    expect(res.status).toBe(401)
  })

  it('returns 404 for a valid token whose user no longer exists', async () => {
    const ghost = jwt.sign({ userId: 999999, email: 'ghost@example.com' }, JWT_SECRET)
    const res = await request(app).get('/api/auth/me').set(bearer(ghost))
    expect(res.status).toBe(404)
  })
})
