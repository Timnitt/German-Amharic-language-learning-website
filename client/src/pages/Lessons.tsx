import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { api } from '../api'
import type { LessonSummary } from '../types'

export default function Lessons() {
  const [lessons, setLessons] = useState<LessonSummary[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    api
      .get<{ lessons: LessonSummary[] }>('/api/lessons')
      .then((res) => setLessons(res.lessons))
      .finally(() => setLoading(false))
  }, [])

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <div className="text-center max-w-xl mx-auto mb-16">
        <h1 className="text-3xl font-black text-stone-900 mb-3">የቋንቋ ትምህርቶች</h1>
        <p className="text-stone-500 font-medium mb-4">
          የጀርመንኛ ሰዋስው እና ንግግር — በአማርኛ ማብራሪያ።
        </p>
        <div className="w-24 h-1 bg-amber-700 mx-auto rounded-full" />
      </div>

      {loading ? (
        <div className="py-16 text-center text-stone-400 text-lg">በመጫን ላይ…</div>
      ) : (
        <div className="space-y-8">
          {lessons.map((lesson) => (
            <Link
              key={lesson.id}
              to={`/lessons/${lesson.id}`}
              className="block group bg-paper border border-stone-200 p-8 rounded-2xl shadow-sm hover:shadow-md transition duration-200"
            >
              <div className="flex items-center space-x-3 text-sm text-stone-400 font-semibold mb-3">
                <span className="bg-stone-800 text-amber-50 px-2 py-0.5 rounded text-xs font-bold">
                  {lesson.level}
                </span>
                <span className="text-amber-700">{lesson.category}</span>
              </div>
              <h2 className="text-2xl font-bold text-stone-900 group-hover:text-amber-800 transition-colors mb-2">
                {lesson.title}
              </h2>
              <p className="text-stone-600 leading-relaxed">{lesson.subtitle}</p>
              <div className="mt-4">
                <span className="text-sm font-bold text-amber-700 group-hover:underline">
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
