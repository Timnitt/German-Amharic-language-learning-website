import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { api } from '../api'
import { useAuth } from '../AuthContext'
import type { DashboardStats, QuizResult } from '../types'

function StatCard({ label, value, accent }: { label: string; value: string | number; accent?: boolean }) {
  return (
    <div
      className={`handwritten-border border-2 p-5 text-center ${
        accent ? 'bg-blue-50 border-blue-200' : 'bg-paper border-gray-300/80'
      }`}
    >
      <div className={`text-3xl font-black ${accent ? 'text-blue-800' : 'text-gray-900'}`}>{value}</div>
      <div className="text-sm font-semibold text-gray-500 mt-1">{label}</div>
    </div>
  )
}

export default function Dashboard() {
  const { user } = useAuth()
  const [stats, setStats] = useState<DashboardStats | null>(null)
  const [history, setHistory] = useState<QuizResult[]>([])

  useEffect(() => {
    api.get<DashboardStats>('/api/progress/stats').then(setStats).catch(() => {})
    api
      .get<{ results: QuizResult[] }>('/api/quiz/history')
      .then((res) => setHistory(res.results))
      .catch(() => {})
  }, [])

  if (!stats) {
    return <div className="py-24 text-center text-gray-400 text-lg">በመጫን ላይ…</div>
  }

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <div className="mb-10">
        <h1 className="text-3xl font-black text-gray-900 mb-2">ሰላም {user?.name}! 👋</h1>
        <p className="text-gray-500 font-medium">የመማር እድገትዎ ማጠቃለያ ይኸውና።</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
        <StatCard label="የተለማመዷቸው ቃላት" value={`${stats.reviewed}/${stats.totalVocab}`} accent />
        <StatCard label="የተካኑ ቃላት" value={stats.mastered} />
        <StatCard label="ትክክለኛነት" value={`${stats.accuracy}%`} />
        <StatCard label="አማካይ የፈተና ውጤት" value={`${stats.quizAverage}%`} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <section className="bg-paper border-2 border-gray-300/80 handwritten-border p-6">
          <h2 className="text-xl font-black text-gray-900 mb-5">እድገት በደረጃ</h2>
          <div className="space-y-4">
            {stats.byLevel.map((row) => {
              const pct = row.total ? Math.round((row.reviewed / row.total) * 100) : 0
              return (
                <div key={row.level}>
                  <div className="flex justify-between text-sm font-bold text-gray-600 mb-1">
                    <span>{row.level}</span>
                    <span>
                      {row.reviewed}/{row.total} ({pct}%)
                    </span>
                  </div>
                  <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-600 rounded-full" style={{ width: `${pct}%` }} />
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        <section className="bg-paper border-2 border-gray-300/80 handwritten-border p-6">
          <h2 className="text-xl font-black text-gray-900 mb-5">የሚከብዱ ቃላት</h2>
          {stats.weakest.length === 0 ? (
            <p className="text-gray-400">
              እስካሁን የተሳሳቱት ቃል የለም — ጥሩ ስራ! 🎉
            </p>
          ) : (
            <ul className="space-y-3">
              {stats.weakest.map((w, i) => (
                <li key={i} className="flex justify-between items-center border-b border-gray-200 pb-2">
                  <div>
                    <span className="font-bold text-gray-900">{w.german}</span>
                    <span className="text-gray-500"> — {w.amharic}</span>
                  </div>
                  <span className="text-xs font-bold text-red-600 bg-red-50 px-2 py-1 rounded">
                    ✗ {w.wrong_count}
                  </span>
                </li>
              ))}
            </ul>
          )}
          <Link
            to="/flashcards"
            className="mt-6 inline-block text-sm font-bold text-blue-700 hover:underline"
          >
            መለማመዱን ይቀጥሉ →
          </Link>
        </section>
      </div>

      <section className="bg-paper border-2 border-gray-300/80 handwritten-border p-6">
        <h2 className="text-xl font-black text-gray-900 mb-5">
          የፈተና ታሪክ ({stats.quizCount})
        </h2>
        {history.length === 0 ? (
          <p className="text-gray-400">
            እስካሁን ፈተና አልወሰዱም።{' '}
            <Link to="/quiz" className="font-bold text-blue-700 underline">
              የመጀመሪያዎን ይውሰዱ!
            </Link>
          </p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="text-sm text-gray-400 border-b-2 border-gray-200">
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
                    <tr key={r.id} className="border-b border-gray-100">
                      <td className="py-2.5 pr-4 text-gray-500 text-sm">
                        {new Date(r.taken_at + 'Z').toLocaleDateString()}
                      </td>
                      <td className="py-2.5 pr-4">
                        <span className="bg-gray-800 text-blue-50 px-2 py-0.5 rounded text-xs font-bold">
                          {r.level}
                        </span>
                      </td>
                      <td className="py-2.5 pr-4 font-bold text-gray-800">
                        {r.score}/{r.total}
                      </td>
                      <td className={`py-2.5 font-bold ${pct >= 70 ? 'text-green-700' : 'text-blue-700'}`}>
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
