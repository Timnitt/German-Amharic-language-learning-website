import 'express-async-errors'
import express, { type Express } from 'express'
import cors from 'cors'
import helmet from 'helmet'
import rateLimit from 'express-rate-limit'
import crypto from 'node:crypto'
import path from 'node:path'
import fs from 'node:fs'
import { fileURLToPath } from 'node:url'
import { authRouter } from './routes/authRoutes.js'
import { vocabularyRouter } from './routes/vocabularyRoutes.js'
import { quizRouter } from './routes/quizRoutes.js'
import { progressRouter } from './routes/progressRoutes.js'
import { lessonRouter } from './routes/lessonRoutes.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const clientDist = process.env.CLIENT_DIST || path.resolve(__dirname, '../../client/dist')

// CSP allows only the hash of index.html's inline theme script, no 'unsafe-inline'.
function inlineScriptHashes(distDir: string): string[] {
  try {
    const html = fs.readFileSync(path.join(distDir, 'index.html'), 'utf8')
    const hashes: string[] = []
    for (const match of html.matchAll(/<script(?![^>]*\bsrc=)[^>]*>([\s\S]*?)<\/script>/gi)) {
      const digest = crypto.createHash('sha256').update(match[1], 'utf8').digest('base64')
      hashes.push(`'sha256-${digest}'`)
    }
    return hashes
  } catch {
    return []
  }
}

// Full errors are logged server-side only; clients never get the stack trace.
export function errorHandler(
  err: Error,
  _req: express.Request,
  res: express.Response,
  _next: express.NextFunction,
): void {
  console.error(err)
  const body =
    process.env.NODE_ENV === 'production'
      ? { error: 'Internal server error' }
      : { error: 'Internal server error', detail: err instanceof Error ? err.message : String(err) }
  res.status(500).json(body)
}

export interface AppOptions {
  authLimit?: number
  apiLimit?: number
}

// No seeding or listen() here, so tests can use the app directly.
export function createApp(opts: AppOptions = {}): Express {
  const app = express()
  // One proxy hop on Render, so rate limits see the real client IP.
  app.set('trust proxy', 1)

  const authLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    limit: opts.authLimit ?? 10,
    standardHeaders: true,
    legacyHeaders: false,
    message: { error: 'Too many attempts. Please try again in a few minutes.' },
  })

  const apiLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    limit: opts.apiLimit ?? 300,
    standardHeaders: true,
    legacyHeaders: false,
    message: { error: 'Too many requests. Please slow down.' },
  })

  app.use(
    helmet({
      contentSecurityPolicy: {
        directives: {
          defaultSrc: ["'self'"],
          scriptSrc: ["'self'", ...inlineScriptHashes(clientDist)],
          styleSrc: ["'self'", "'unsafe-inline'", 'https://fonts.googleapis.com'],
          fontSrc: ["'self'", 'https://fonts.gstatic.com', 'data:'],
          imgSrc: ["'self'", 'data:', 'https:'],
          connectSrc: ["'self'"],
          objectSrc: ["'none'"],
          baseUri: ["'self'"],
        },
      },
    }),
  )

  // Production serves the SPA from the same origin, so CORS is off unless CORS_ORIGINS is set.
  const corsOrigins = (
    process.env.CORS_ORIGINS ??
    (process.env.NODE_ENV === 'production' ? '' : 'http://localhost:5173')
  )
    .split(',')
    .map((o) => o.trim())
    .filter(Boolean)

  app.use(cors({ origin: corsOrigins.length > 0 ? corsOrigins : false }))
  app.use(express.json())

  app.get('/api/health', (_req, res) => {
    res.json({ status: 'ok', uptime: process.uptime() })
  })

  app.use('/api/auth/login', authLimiter)
  app.use('/api/auth/register', authLimiter)
  app.use('/api', apiLimiter)

  app.use('/api/auth', authRouter)
  app.use('/api/vocabulary', vocabularyRouter)
  app.use('/api/quiz', quizRouter)
  app.use('/api/progress', progressRouter)
  app.use('/api/lessons', lessonRouter)

  if (fs.existsSync(clientDist)) {
    app.use(express.static(clientDist))
    app.get(/^(?!\/api\/).*/, (_req, res) => {
      res.sendFile(path.join(clientDist, 'index.html'))
    })
  }

  app.use((_req, res) => {
    res.status(404).json({ error: 'Not found' })
  })

  app.use(errorHandler)

  return app
}
