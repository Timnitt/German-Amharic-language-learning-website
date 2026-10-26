import { useCallback, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { api, toAmharicError } from '../api'
import Spinner from '../components/Spinner'
import ErrorMessage from '../components/ErrorMessage'
import type { LessonSummary } from '../types'

export default function Lessons() {
  const [lessons, setLessons] = useState<LessonSummary[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  const load = useCallback(() => {
    setLoading(true)
    setError('')
    api
      .get<{ lessons: LessonSummary[] }>('/api/lessons')
      .then((res) => setLessons(res.lessons))
      .catch((err) => setError(toAmharicError(err)))
      .finally(() => setLoading(false))
  }, [])

  useEffect(() => {
    load()
  }, [load])

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <div className="text-center max-w-xl mx-auto mb-16">
        <h1 className="text-3xl font-black text-gray-900 dark:text-gray-100 mb-3">የቋንቋ ትምህርቶች</h1>
        <p className="text-gray-500 dark:text-gray-400 font-medium mb-4">
          የጀርመንኛ ሰዋስው እና ንግግር - በአማርኛ ማብራሪያ።
        </p>
        <div className="w-24 h-1 bg-blue-700 mx-auto rounded-full" />
      </div>
          <section className="mb-16">
        <h2 className="text-2xl font-black text-gray-900 dark:text-gray-100 mb-6">የቃላት ክፍል</h2>
        <Link
          to="/lessons/vocabulary"
          className="block group bg-blue-50 dark:bg-blue-950/40 border-2 border-blue-200 dark:border-blue-900 handwritten-border p-8 shadow-sm hover:shadow-md transition duration-200"
        >
          <div className="flex items-center space-x-3 text-sm font-semibold mb-3">
            <span className="bg-gray-800 dark:bg-blue-100 text-blue-50 dark:text-gray-900 px-2 py-0.5 rounded text-xs font-bold">A1–B1</span>
            <span className="text-blue-700 dark:text-blue-400">የቃላት ማከማቻ</span>
            <span className="text-2xl ml-auto">📚</span>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 group-hover:text-blue-800 transition-colors mb-2">
            የቃላት ዝርዝር
          </h3>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            የጀርመንኛ ቃላት ከአማርኛ ትርጉም፣ አነባበብ እና ምሳሌያዊ ዓረፍተ-ነገሮች ጋር — በደረጃ እና በምድብ ይፈልጉ።
          </p>
          <div className="mt-4">
            <span className="text-sm font-bold text-blue-700 dark:text-blue-400 group-hover:underline">
              ወደ ቃላት ዝርዝር ይሂዱ &rarr;
            </span>
          </div>
        </Link>
      </section>

      <h2 className="text-2xl font-black text-gray-900 dark:text-gray-100 mb-6">የሰዋስው ትምህርቶች</h2>
      {loading ? (
        <Spinner />
      ) : error ? (
        <ErrorMessage message={error} onRetry={load} />
      ) : (
        <div className="space-y-8">
          {lessons.map((lesson) => (
            <Link
              key={lesson.id}
              to={`/lessons/${lesson.id}`}
              className="block group bg-paper dark:bg-night-raised border border-gray-200 dark:border-gray-800 p-8 rounded-2xl shadow-sm hover:shadow-md transition duration-200"
            >
              <div className="flex items-center space-x-3 text-sm text-gray-400 dark:text-gray-400 font-semibold mb-3">
                <span className="bg-gray-800 dark:bg-blue-100 text-blue-50 dark:text-gray-900 px-2 py-0.5 rounded text-xs font-bold">
                  {lesson.level}
                </span>
                <span className="text-blue-700 dark:text-blue-400">{lesson.category}</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 group-hover:text-blue-800 transition-colors mb-2">
                {lesson.title}
              </h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{lesson.subtitle}</p>
              <div className="mt-4">
                <span className="text-sm font-bold text-blue-700 dark:text-blue-400 group-hover:underline">
                  ሙሉውን ትምህርት ያንብቡ &rarr;
                </span>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
