import express from 'express'
import cors from 'cors'
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

seedDatabase()

const app = express()
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

// Serve the built client in production (single-container deployment)
const clientDist = process.env.CLIENT_DIST || path.resolve(__dirname, '../../client/dist')
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
