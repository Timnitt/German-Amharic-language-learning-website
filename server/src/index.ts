import 'express-async-errors'
import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import rateLimit from 'express-rate-limit'
import crypto from 'node:crypto'
import path from 'node:path'
import fs from 'node:fs'
import { fileURLToPath } from 'node:url'
import { seedDatabase } from './seed.js'
import { authRouter } from './routes/authRoutes.js'
import { vocabularyRouter } from './routes/vocabularyRoutes.js'
import { quizRouter } from './routes/quizRoutes.js'
import { progressRouter } from './routes/progressRoutes.js'
import { lessonRouter } from './routes/lessonRoutes.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const PORT = Number(process.env.PORT) || 3001
const clientDist = process.env.CLIENT_DIST || path.resolve(__dirname, '../../client/dist')

// The SPA's index.html runs one inline script (the pre-paint theme switcher). A strict
// CSP blocks inline scripts, so hash the script that is actually served and allow exactly
// that hash - no 'unsafe-inline'. Reading the built file keeps the hash correct even if the
// bundler rewrites the script. In dev this server only serves the API (Vite serves the HTML),
// so there is nothing to hash.
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

await seedDatabase()

const app = express()
// Render (and most hosts) put the app behind one reverse proxy. Trust a single hop so
// express-rate-limit keys on the real client IP from X-Forwarded-For, not the proxy's.
app.set('trust proxy', 1)

// Tight limiter for credential endpoints to blunt brute-force / credential-stuffing.
const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 10,
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: 'Too many attempts. Please try again in a few minutes.' },
})

// Looser limiter for the rest of the API as a general abuse backstop.
const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 300,
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

// CORS allowlist from CORS_ORIGINS (comma-separated). In production the SPA is served
// from the same origin as the API, so the default is an empty allowlist (CORS disabled).
// In dev the Vite dev server runs on a different origin, so default to it.
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

// Stricter limit on the two credential endpoints; looser limit on everything else under /api.
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

app.use((err: Error, _req: express.Request, res: express.Response, _next: express.NextFunction) => {
  // Log the full error (stack, DB text) server-side only. The client always gets a generic
  // message in production; outside production the message is included to aid local debugging,
  // but never the stack trace.
  console.error(err)
  const body =
    process.env.NODE_ENV === 'production'
      ? { error: 'Internal server error' }
      : { error: 'Internal server error', detail: err instanceof Error ? err.message : String(err) }
  res.status(500).json(body)
})

app.listen(PORT, () => {
  console.log(`API server listening on http://localhost:${PORT}`)
})