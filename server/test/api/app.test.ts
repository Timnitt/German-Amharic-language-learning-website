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
