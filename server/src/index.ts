import 'express-async-errors'
import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
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

app.use(cors())
app.use(express.json())

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', uptime: process.uptime() })
})

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
  console.error(err)
  res.status(500).json({ error: 'Internal server error' })
})

app.listen(PORT, () => {
  console.log(`API server listening on http://localhost:${PORT}`)
})