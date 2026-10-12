import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { api } from '../api'
import { useAuth } from '../AuthContext'
import type { DashboardStats, QuizResult, LessonSummary, LessonCompletion } from '../types'

function StatCard({ label, value, accent }: { label: string; value: string | number; accent?: boolean }) {
  return (
    <div
      className={`handwritten-border border-2 p-5 text-center ${
        accent ? 'bg-blue-50 dark:bg-blue-950/40 border-blue-200 dark:border-blue-900' : 'bg-paper dark:bg-night-raised border-gray-300/80 dark:border-gray-700'
      }`}
    >
      <div className={`text-3xl font-black ${accent ? 'text-blue-800 dark:text-blue-300' : 'text-gray-900 dark:text-gray-100'}`}>{value}</div>
      <div className="text-sm font-semibold text-gray-500 dark:text-gray-400 mt-1">{label}</div>
    </div>
  )
}

export default function Dashboard() {
  const { user } = useAuth()
  const [stats, setStats] = useState<DashboardStats | null>(null)
  const [history, setHistory] = useState<QuizResult[]>([])
  const [lessons, setLessons] = useState<LessonSummary[]>([])
  const [completedLessons, setCompletedLessons] = useState<LessonCompletion[]>([])

  useEffect(() => {
    api.get<DashboardStats>('/api/progress/stats').then(setStats).catch(() => {})
    api
      .get<{ results: QuizResult[] }>('/api/quiz/history')
      .then((res) => setHistory(res.results))
      .catch(() => {})
    api
      .get<{ lessons: LessonSummary[] }>('/api/lessons')
      .then((res) => setLessons(res.lessons))
      .catch(() => {})
    api
      .get<{ completed: LessonCompletion[] }>('/api/progress/lessons')
      .then((res) => setCompletedLessons(res.completed))
      .catch(() => {})
  }, [])

  if (!stats) {
    return <div className="py-24 text-center text-gray-400 dark:text-gray-400 text-lg">በመጫን ላይ…</div>
  }

  const completedIds = new Set(completedLessons.map((c) => c.lesson_id))

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
        <div>
          <h1 className="text-3xl font-black text-gray-900 dark:text-gray-100 mb-2">ሰላም {user?.name}! 👋</h1>
          <p className="text-gray-500 dark:text-gray-400 font-medium">የመማር እድገትዎ ማጠቃለያ ይኸውና።</p>
        </div>
        {stats.currentStreak > 0 && (
          <div className="bg-amber-50 dark:bg-amber-950/40 border-2 border-amber-200 dark:border-amber-900 handwritten-border px-5 py-3 text-center">
            <div className="text-2xl font-black text-amber-700 dark:text-amber-300">🔥 {stats.currentStreak}</div>
            <div className="text-xs font-semibold text-amber-600 dark:text-amber-400 mt-0.5">ተከታታይ ቀናት</div>
          </div>
        )}
      </div>

      {stats.dueToday > 0 && (
        <Link
          to="/review"
          className="block mb-8 bg-blue-50 dark:bg-blue-950/40 border-2 border-blue-200 dark:border-blue-900 handwritten-border p-5 hover:shadow-md transition group"
        >
          <div className="flex items-center justify-between">
            <div>
              <span className="text-lg font-black text-blue-800 dark:text-blue-300">
                {stats.dueToday} ቃላት ለዛሬ ይጠብቃሉ
              </span>
              <p className="text-sm text-blue-600 dark:text-blue-400 mt-1">አሁን ክለሳ ይጀምሩ →</p>
            </div>
            <span className="text-3xl group-hover:scale-110 transition-transform">📖</span>
          </div>
        </Link>
      )}

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
        <StatCard label="የተለማመዷቸው ቃላት" value={`${stats.reviewed}/${stats.totalVocab}`} accent />
        <StatCard label="የተካኑ ቃላት" value={stats.mastered} />
        <StatCard label="ትክክለኛነት" value={`${stats.accuracy}%`} />
        <StatCard label="አማካይ የፈተና ውጤት" value={`${stats.quizAverage}%`} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <section className="bg-paper dark:bg-night-raised border-2 border-gray-300/80 dark:border-gray-700 handwritten-border p-6">
          <h2 className="text-xl font-black text-gray-900 dark:text-gray-100 mb-5">እድገት በደረጃ</h2>
          <div className="space-y-4">
            {stats.byLevel.map((row) => {
              const pct = row.total ? Math.round((row.reviewed / row.total) * 100) : 0
              return (
                <div key={row.level}>
                  <div className="flex justify-between text-sm font-bold text-gray-600 dark:text-gray-300 mb-1">
                    <span>{row.level}</span>
                    <span>
                      {row.reviewed}/{row.total} ({pct}%)
                    </span>
                  </div>
                  <div className="h-3 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-600 rounded-full" style={{ width: `${pct}%` }} />
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        <section className="bg-paper dark:bg-night-raised border-2 border-gray-300/80 dark:border-gray-700 handwritten-border p-6">
          <h2 className="text-xl font-black text-gray-900 dark:text-gray-100 mb-5">የሚከብዱ ቃላት</h2>
          {stats.weakest.length === 0 ? (
            <p className="text-gray-400 dark:text-gray-400">
              እስካሁን የተሳሳቱት ቃል የለም — ጥሩ ስራ! 🎉
            </p>
          ) : (
            <ul className="space-y-3">
              {stats.weakest.map((w, i) => (
                <li key={i} className="flex justify-between items-center border-b border-gray-200 dark:border-gray-800 pb-2">
                  <div>
                    <span className="font-bold text-gray-900 dark:text-gray-100">{w.german}</span>
                    <span className="text-gray-500 dark:text-gray-400"> — {w.amharic}</span>
                  </div>
                  <span className="text-xs font-bold text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-950/40 px-2 py-1 rounded">
                    ✗ {w.wrong_count}
                  </span>
                </li>
              ))}
            </ul>
          )}
          <Link
            to="/flashcards"
            className="mt-6 inline-block text-sm font-bold text-blue-700 dark:text-blue-400 hover:underline"
          >
            መለማመዱን ይቀጥሉ →
          </Link>
        </section>
      </div>

      {lessons.length > 0 && (
        <section className="bg-paper dark:bg-night-raised border-2 border-gray-300/80 dark:border-gray-700 handwritten-border p-6 mb-12">
          <h2 className="text-xl font-black text-gray-900 dark:text-gray-100 mb-5">
            የትምህርት እድገት ({completedIds.size}/{lessons.length})
          </h2>
          <div className="space-y-3">
            {lessons.map((lesson) => {
              const isDone = completedIds.has(lesson.id)
              return (
                <Link
                  key={lesson.id}
                  to={`/lessons/${lesson.id}`}
                  className="flex items-center justify-between border-b border-gray-200 dark:border-gray-800 pb-3 hover:bg-gray-50 dark:hover:bg-gray-800/50 px-2 -mx-2 rounded transition"
                >
                  <div className="flex items-center gap-3">
                    <span className={`text-lg ${isDone ? 'text-green-600 dark:text-green-400' : 'text-gray-300 dark:text-gray-600'}`}>
                      {isDone ? '✓' : '○'}
                    </span>
                    <div>
                      <span className="font-bold text-gray-900 dark:text-gray-100">{lesson.title}</span>
                      <span className="ml-2 text-xs bg-gray-800 dark:bg-blue-100 text-blue-50 dark:text-gray-900 px-1.5 py-0.5 rounded font-bold">
                        {lesson.level}
                      </span>
                    </div>
                  </div>
                  {isDone && (
                    <span className="text-xs text-gray-400 dark:text-gray-400">
                      {(() => {
                        const c = completedLessons.find((c) => c.lesson_id === lesson.id)
                        return c ? new Date(c.completed_at + 'Z').toLocaleDateString() : ''
                      })()}
                    </span>
                  )}
                </Link>
              )
            })}
          </div>
        </section>
      )}

      <section className="bg-paper dark:bg-night-raised border-2 border-gray-300/80 dark:border-gray-700 handwritten-border p-6">
        <h2 className="text-xl font-black text-gray-900 dark:text-gray-100 mb-5">
          የፈተና ታሪክ ({stats.quizCount})
        </h2>
        {history.length === 0 ? (
          <p className="text-gray-400 dark:text-gray-400">
            እስካሁን ፈተና አልወሰዱም።{' '}
            <Link to="/quiz" className="font-bold text-blue-700 dark:text-blue-400 underline">
              የመጀመሪያዎን ይውሰዱ!
            </Link>
          </p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="text-sm text-gray-400 dark:text-gray-400 border-b-2 border-gray-200 dark:border-gray-800">
                  <th className="py-2 pr-4 font-semibold">ቀን</th>
                  <th className="py-2 pr-4 font-semibold">ደረጃ</th>
                  <th className="py-2 pr-4 font-semibold">ውጤት</th>
                  <th className="py-2 font-semibold">በመቶኛ</th>
                </tr>
              </thead>
              <tbody>
                {history.map((r) => {
                  const pct = Math.round((r.score / r.total) * 100)
                  return (
                    <tr key={r.id} className="border-b border-gray-100 dark:border-gray-800">
                      <td className="py-2.5 pr-4 text-gray-500 dark:text-gray-400 text-sm">
                        {new Date(r.taken_at + 'Z').toLocaleDateString()}
                      </td>
                      <td className="py-2.5 pr-4">
                        <span className="bg-gray-800 dark:bg-blue-100 text-blue-50 dark:text-gray-900 px-2 py-0.5 rounded text-xs font-bold">
                          {r.level}
                        </span>
                      </td>
                      <td className="py-2.5 pr-4 font-bold text-gray-800 dark:text-gray-200">
                        {r.score}/{r.total}
                      </td>
                      <td className={`py-2.5 font-bold ${pct >= 70 ? 'text-green-700 dark:text-green-400' : 'text-blue-700 dark:text-blue-400'}`}>
                        {pct}%
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        )}
      </section>
    </div>
  )
}
