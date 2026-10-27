import os from 'node:os'
import path from 'node:path'
import { afterEach, beforeAll, describe, expect, it, vi } from 'vitest'
import express, { type Express } from 'express'
import request from 'supertest'
import { all } from '../../src/db.js'
import { createApp, errorHandler } from '../../src/app.js'
import { makeApp } from '../helpers.js'

let app: Express

beforeAll(async () => {
  app = await makeApp()
})

afterEach(() => {
  vi.unstubAllEnvs()
})

describe('test database', () => {
  it('is a local SQLite file under the OS temp dir, never Turso', async () => {
    const rows = await all<{ name: string; file: string }>('PRAGMA database_list')
    const main = rows.find((r) => r.name === 'main')
    expect(main?.file).toBeTruthy()
    expect(path.resolve(main!.file).startsWith(path.resolve(os.tmpdir()))).toBe(true)
  })
})

describe('app shell', () => {
  it('serves /api/health', async () => {
    const res = await request(app).get('/api/health')
    expect(res.status).toBe(200)
    expect(res.body.status).toBe('ok')
  })

  it('returns JSON 404 for unknown API routes', async () => {
    const res = await request(app).get('/api/does-not-exist')
    expect(res.status).toBe(404)
    expect(res.body).toEqual({ error: 'Not found' })
  })

  it('sets a strict Content-Security-Policy', async () => {
    const res = await request(app).get('/api/health')
    const csp = res.headers['content-security-policy']
    expect(csp).toContain("default-src 'self'")
    expect(csp).toContain("object-src 'none'")
    expect(csp).not.toMatch(/script-src[^;]*'unsafe-inline'/)
  })

  it('does not send CORS headers to an origin outside the allowlist', async () => {
    const res = await request(app).get('/api/health').set('Origin', 'https://evil.example')
    expect(res.headers['access-control-allow-origin']).toBeUndefined()
  })
})

describe('rate limiting', () => {
  it('returns 429 on login after the auth limit is used up', async () => {
    const limited = createApp({ authLimit: 3 })
    const body = { email: 'nobody@example.com', password: 'wrong1234' }
    for (let i = 0; i < 3; i++) {
      expect((await request(limited).post('/api/auth/login').send(body)).status).toBe(401)
    }
    const res = await request(limited).post('/api/auth/login').send(body)
    expect(res.status).toBe(429)
    expect(res.body.error).toMatch(/Too many attempts/)
  })

  it('keeps the production default of 10 auth attempts', async () => {
    const defaults = createApp()
    const body = { email: 'nobody@example.com', password: 'wrong1234' }
    for (let i = 0; i < 10; i++) {
      expect((await request(defaults).post('/api/auth/login').send(body)).status).toBe(401)
    }
    expect((await request(defaults).post('/api/auth/login').send(body)).status).toBe(429)
  })

  it('keeps a separate bucket per client IP behind the proxy', async () => {
    const limited = createApp({ authLimit: 1 })
    const body = { email: 'nobody@example.com', password: 'wrong1234' }
    const login = (ip: string) =>
      request(limited).post('/api/auth/login').set('X-Forwarded-For', ip).send(body)

    expect((await login('203.0.113.1')).status).toBe(401)
    expect((await login('203.0.113.1')).status).toBe(429)
    expect((await login('203.0.113.2')).status).toBe(401)
  })

  it('limits public API routes with a JSON error and RateLimit headers', async () => {
    const limited = createApp({ apiLimit: 2 })
    for (let i = 0; i < 2; i++) {
      expect((await request(limited).get('/api/lessons')).status).toBe(200)
    }
    const res = await request(limited).get('/api/lessons')
    expect(res.status).toBe(429)
    expect(res.headers['content-type']).toMatch(/application\/json/)
    expect(res.body).toEqual({ error: 'Too many requests. Please slow down.' })
    expect(res.headers['ratelimit-limit']).toBe('2')
    expect(res.headers['ratelimit-remaining']).toBe('0')
    expect(Number(res.headers['ratelimit-reset'])).toBeGreaterThan(0)
    expect(res.headers['x-ratelimit-limit']).toBeUndefined()
  })

  it('does not count /api/health against the API limit', async () => {
    const limited = createApp({ apiLimit: 1 })
    for (let i = 0; i < 3; i++) {
      expect((await request(limited).get('/api/health')).status).toBe(200)
    }
    expect((await request(limited).get('/api/lessons')).status).toBe(200)
  })
})

describe('errorHandler', () => {
  function failingApp(): Express {
    const a = express()
    a.get('/boom', () => {
      throw new Error('secret db detail')
    })
    a.use(errorHandler)
    return a
  }

  it('hides error details in production', async () => {
    vi.stubEnv('NODE_ENV', 'production')
    vi.spyOn(console, 'error').mockImplementation(() => {})
    const res = await request(failingApp()).get('/boom')
    expect(res.status).toBe(500)
    expect(res.body).toEqual({ error: 'Internal server error' })
    expect(JSON.stringify(res.body)).not.toContain('secret db detail')
  })

  it('includes the message but no stack outside production', async () => {
    vi.stubEnv('NODE_ENV', 'development')
    vi.spyOn(console, 'error').mockImplementation(() => {})
    const res = await request(failingApp()).get('/boom')
    expect(res.status).toBe(500)
    expect(res.body).toEqual({ error: 'Internal server error', detail: 'secret db detail' })
  })
})
