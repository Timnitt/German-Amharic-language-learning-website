import { Router } from 'express'
import { all, get, type LessonRow } from '../db.js'

export const lessonRouter = Router()

lessonRouter.get('/', async (_req, res) => {
  const rows = await all(
    'SELECT id, title, subtitle, level, category, created_at FROM lessons ORDER BY level, id',
  )
  res.json({ lessons: rows })
})

lessonRouter.get('/:id', async (req, res) => {
  const id = Number(req.params.id)
  if (!Number.isInteger(id)) {
    res.status(400).json({ error: 'Invalid lesson id' })
    return
  }
  const lesson = await get<LessonRow>('SELECT * FROM lessons WHERE id = ?', [id])
  if (!lesson) {
    res.status(404).json({ error: 'Lesson not found' })
    return
  }
  res.json({ lesson })
})