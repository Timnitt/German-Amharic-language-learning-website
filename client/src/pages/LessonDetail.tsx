import { useCallback, useEffect, useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { marked } from 'marked'
import DOMPurify from 'dompurify'
import { api, ApiError, toAmharicError } from '../api'
import { useAuth } from '../AuthContext'
import ErrorMessage from '../components/ErrorMessage'
import Spinner from '../components/Spinner'
import { usePageTitle } from '../usePageTitle'
import type { Lesson, LessonCompletion } from '../types'

export default function LessonDetail() {
  const { id } = useParams()
  const { user } = useAuth()
  const [lesson, setLesson] = useState<Lesson | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [notFound, setNotFound] = useState(false)
  const [completed, setCompleted] = useState(false)
  const [saving, setSaving] = useState(false)

  usePageTitle(lesson?.title ?? 'ትምህርት')

  const loadLesson = useCallback(() => {
    setLoading(true)
    setError('')
    setNotFound(false)
    api
      .get<{ lesson: Lesson }>(`/api/lessons/${id}`)
      .then((res) => setLesson(res.lesson))
      .catch((err) => {
        if (err instanceof ApiError && err.status === 404) setNotFound(true)
        else setError(toAmharicError(err))
      })
      .finally(() => setLoading(false))
  }, [id])

  useEffect(() => {
    loadLesson()
  }, [loadLesson])

  useEffect(() => {
    if (!user || !id) return
    api
      .get<{ completed: LessonCompletion[] }>('/api/progress/lessons')
      .then((res) => {
        if (res.completed.some((c) => c.lesson_id === Number(id))) {
          setCompleted(true)
        }
      })
      .catch(() => {})
  }, [user, id])

  // Lesson content is markdown rendered to HTML, then sanitized before it is injected
  // via dangerouslySetInnerHTML, so a malicious lesson body can't inject scripts.
  const html = useMemo(
    () =>
      lesson ? DOMPurify.sanitize(marked.parse(lesson.content, { async: false }) as string) : '',
    [lesson],
  )

  function markComplete() {
    if (!id || saving) return
    setSaving(true)
    api
      .post('/api/progress/lesson-complete', { lessonId: Number(id) })
      .then(() => setCompleted(true))
      .catch(() => {})
      .finally(() => setSaving(false))
  }

  if (notFound) {
    return (
      <div className="py-24 text-center">
        <p className="text-gray-500 dark:text-gray-400 text-lg mb-4">ትምህርቱ አልተገኘም።</p>
        <Link to="/lessons" className="text-blue-700 dark:text-blue-400 font-bold underline">
          ← ወደ ትምህርቶች ተመለስ
        </Link>
      </div>
    )
  }

  if (error) {
    return (
      <div className="max-w-3xl mx-auto px-6 py-12">
        <ErrorMessage message={error} onRetry={loadLesson} />
        <div className="text-center">
          <Link to="/lessons" className="text-blue-700 dark:text-blue-400 font-bold underline">
            ← ወደ ትምህርቶች ተመለስ
          </Link>
        </div>
      </div>
    )
  }

  if (loading || !lesson) {
    return <Spinner />
  }

  return (
    <article className="max-w-3xl mx-auto px-6 py-12">
      <Link to="/lessons" className="text-sm font-bold text-blue-700 dark:text-blue-400 hover:underline">
        ← ወደ ትምህርቶች ተመለስ
      </Link>

      <header className="mt-6 mb-10 pb-8 border-b-2 border-gray-200 dark:border-gray-800">
        <div className="flex items-center space-x-3 text-sm font-semibold mb-4">
          <span className="bg-gray-800 dark:bg-blue-100 text-blue-50 dark:text-gray-900 px-2.5 py-1 rounded text-xs font-bold">
            {lesson.level}
          </span>
          <span className="text-blue-700 dark:text-blue-400">{lesson.category}</span>
          {completed && (
            <span className="text-green-600 dark:text-green-400 font-bold text-xs bg-green-50 dark:bg-green-950/40 px-2 py-1 rounded">
              ✓ ተጠናቋል
            </span>
          )}
        </div>
        <h1 className="text-4xl font-black text-gray-900 dark:text-gray-100 mb-3 leading-tight">{lesson.title}</h1>
        <p className="text-xl text-gray-500 dark:text-gray-400 font-medium">{lesson.subtitle}</p>
      </header>

      <div className="lesson-content" dangerouslySetInnerHTML={{ __html: html }} />

      <footer className="mt-12 pt-8 border-t-2 border-gray-200 dark:border-gray-800 space-y-4">
        {user && !completed && (
          <button
            onClick={markComplete}
            disabled={saving}
            className="w-full bg-green-600 text-white font-bold py-3.5 rounded-xl hover:bg-green-700 transition cursor-pointer disabled:opacity-50"
          >
            ✓ ትምህርቱን ጨርሻለሁ
          </button>
        )}
        {user && completed && (
          <div className="w-full text-center bg-green-50 dark:bg-green-950/40 border-2 border-green-200 dark:border-green-900 text-green-700 dark:text-green-400 font-bold py-3.5 rounded-xl">
            ✓ ይህን ትምህርት ጨርሰዋል
          </div>
        )}
        {!user && (
          <p className="text-sm text-gray-500 dark:text-gray-400 bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-900 rounded-xl px-4 py-3 text-center">
            💡 <Link to="/login" className="font-bold text-blue-800 dark:text-blue-300 underline">ከገቡ</Link> ትምህርቱን
            እንደጨረሱ ምልክት ማድረግ ይችላሉ።
          </p>
        )}
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            to="/flashcards"
            className="flex-1 text-center bg-blue-700 text-white font-bold py-3.5 rounded-xl hover:bg-blue-800 transition"
          >
            🃏 በካርዶች ይለማመዱ
          </Link>
          <Link
            to="/quiz"
            className="flex-1 text-center bg-gray-800 dark:bg-blue-100 text-blue-50 dark:text-gray-900 font-bold py-3.5 rounded-xl hover:bg-gray-700 dark:hover:bg-blue-200 transition"
          >
            ✏️ ራስዎን ይፈትኑ
          </Link>
        </div>
      </footer>
    </article>
  )
}
