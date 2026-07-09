import { Router } from 'express'
import { db, type LessonRow } from '../db.js'

export const lessonRouter = Router()

lessonRouter.get('/', (_req, res) => {
  const rows = db
    .prepare('SELECT id, title, subtitle, level, category, created_at FROM lessons ORDER BY level, id')
    .all()
  res.json({ lessons: rows })
})

lessonRouter.get('/:id', (req, res) => {
  const id = Number(req.params.id)
  if (!Number.isInteger(id)) {
    res.status(400).json({ error: 'Invalid lesson id' })
    return
  }
  const lesson = db.prepare('SELECT * FROM lessons WHERE id = ?').get(id) as LessonRow | undefined
  if (!lesson) {
    res.status(404).json({ error: 'Lesson not found' })
    return
  }
  res.json({ lesson })
})
