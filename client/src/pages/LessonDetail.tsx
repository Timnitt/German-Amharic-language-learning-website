import { useEffect, useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { marked } from 'marked'
import { api } from '../api'
import type { Lesson } from '../types'

export default function LessonDetail() {
  const { id } = useParams()
  const [lesson, setLesson] = useState<Lesson | null>(null)
  const [error, setError] = useState('')

  useEffect(() => {
    api
      .get<{ lesson: Lesson }>(`/api/lessons/${id}`)
      .then((res) => setLesson(res.lesson))
      .catch(() => setError('ትምህርቱ አልተገኘም።'))
  }, [id])

  const html = useMemo(
    () => (lesson ? (marked.parse(lesson.content, { async: false }) as string) : ''),
    [lesson],
  )

  if (error) {
    return (
      <div className="py-24 text-center">
        <p className="text-gray-500 text-lg mb-4">{error}</p>
        <Link to="/lessons" className="text-blue-700 font-bold underline">
          ← ወደ ትምህርቶች ተመለስ
        </Link>
      </div>
    )
  }

  if (!lesson) {
    return <div className="py-24 text-center text-gray-400 text-lg">በመጫን ላይ…</div>
  }

  return (
    <article className="max-w-3xl mx-auto px-6 py-12">
      <Link to="/lessons" className="text-sm font-bold text-blue-700 hover:underline">
        ← ወደ ትምህርቶች ተመለስ
      </Link>

      <header className="mt-6 mb-10 pb-8 border-b-2 border-gray-200">
        <div className="flex items-center space-x-3 text-sm font-semibold mb-4">
          <span className="bg-gray-800 text-blue-50 px-2.5 py-1 rounded text-xs font-bold">
            {lesson.level}
          </span>
          <span className="text-blue-700">{lesson.category}</span>
        </div>
        <h1 className="text-4xl font-black text-gray-900 mb-3 leading-tight">{lesson.title}</h1>
        <p className="text-xl text-gray-500 font-medium">{lesson.subtitle}</p>
      </header>

      <div className="lesson-content" dangerouslySetInnerHTML={{ __html: html }} />

      <footer className="mt-12 pt-8 border-t-2 border-gray-200 flex flex-col sm:flex-row gap-4">
        <Link
          to="/flashcards"
          className="flex-1 text-center bg-blue-700 text-white font-bold py-3.5 rounded-xl hover:bg-blue-800 transition"
        >
          🃏 በካርዶች ይለማመዱ
        </Link>
        <Link
          to="/quiz"
          className="flex-1 text-center bg-gray-800 text-blue-50 font-bold py-3.5 rounded-xl hover:bg-gray-700 transition"
        >
          ✏️ ራስዎን ይፈትኑ
        </Link>
      </footer>
    </article>
  )
}
