import request from 'supertest'
import type { Express } from 'express'
import { seedDatabase } from '../src/seed.js'
import { createApp, type AppOptions } from '../src/app.js'

/** Seeds this test file's temp database and builds an app with a high auth limit. */
export async function makeApp(opts: AppOptions = {}): Promise<Express> {
  await seedDatabase()
  return createApp({ authLimit: 1000, apiLimit: 10000, ...opts })
}

let userCounter = 0

export interface TestUser {
  token: string
  user: { id: number; name: string; email: string; createdAt: string }
  email: string
  password: string
}

/** Registers a fresh user through the real endpoint and returns its token. */
export async function registerUser(app: Express, name = 'Test User'): Promise<TestUser> {
  userCounter++
  const email = `user${userCounter}-${Date.now()}@example.com`
  const password = 'passw0rd123'
  const res = await request(app).post('/api/auth/register').send({ name, email, password })
  if (res.status !== 201) {
    throw new Error(`registerUser failed: ${res.status} ${JSON.stringify(res.body)}`)
  }
  return { token: res.body.token, user: res.body.user, email, password }
}

export function bearer(token: string): { Authorization: string } {
  return { Authorization: `Bearer ${token}` }
}
