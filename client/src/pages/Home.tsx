import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { api } from '../api'
import { useAuth } from '../AuthContext'
import { usePageTitle } from '../usePageTitle'
import type { VocabMeta, DashboardStats } from '../types'

const features = [
  {
    to: '/lessons/vocabulary',
    emoji: '📚',
    tag: 'የቃላት ማከማቻ',
    title: 'የቃላት ዝርዝር',
    text: 'ከ1000 በላይ የጀርመንኛ ቃላት ከአማርኛ ትርጉም፣ አነባበብ እና ምሳሌያዊ ዓረፍተ-ነገሮች ጋር። በደረጃ (A1–B2) እና በምድብ ይፈልጉ።',
  },
  {
    to: '/flashcards',
    emoji: '🃏',
    tag: 'መለማመጃ',
    title: 'ፍላሽ ካርዶች',
    text: 'ቃላትን በካርድ መገልበጥ ይለማመዱ። ያወቁትን እና ያላወቁትን ምልክት ያድርጉ — እድገትዎ ይመዘገባል።',
  },
  {
    to: '/review',
    emoji: '🔁',
    tag: 'የዕለት ክለሳ',
    title: 'ክለሳ (Spaced Repetition)',
    text: 'ሳይንሳዊ በሆነ ዘዴ ቃላትን በየቀኑ ይከልሱ። ስርዓቱ መቼ መከለስ እንዳለብዎ ያሰላል — ረስቶ አይጠፋም።',
  },
  {
    to: '/quiz',
    emoji: '✏️',
    tag: 'ራስን መፈተኛ',
    title: 'የቃላት ፈተና',
    text: 'በየደረጃው የተዘጋጁ የምርጫ ጥያቄዎችን ይሞክሩ። ውጤትዎ ተመዝግቦ እድገትዎን ይከታተሉ።',
  },
  {
    to: '/lessons',
    emoji: '📖',
    tag: 'ሰዋስው እና ንግግር',
    title: 'የሰዋስው ትምህርቶች',
    text: 'የጀርመንኛ ሰዋስው በአማርኛ ማብራሪያ — የዓረፍተ-ነገር አወቃቀር፣ አርቲክሎች፣ የግሥ አርባ እና ተጨማሪ።',
  },
]

export default function Home() {
  usePageTitle('')
  const { user } = useAuth()
  const [meta, setMeta] = useState<VocabMeta | null>(null)
  const [dueCount, setDueCount] = useState(0)

  useEffect(() => {
    api.get<VocabMeta>('/api/vocabulary/meta').then(setMeta).catch(() => {})
  }, [])

  useEffect(() => {
    if (!user) return
    api.get<DashboardStats>('/api/progress/stats').then((s) => setDueCount(s.dueToday)).catch(() => {})
  }, [user])

  const totalWords = meta ? Object.values(meta.counts).reduce((a, b) => a + b, 0) : null

  return (
    <>
      {user && dueCount > 0 && (
        <Link
          to="/review"
          className="block bg-amber-50 dark:bg-amber-950/40 border-b-2 border-amber-200 dark:border-amber-900 px-6 py-3 text-center hover:bg-amber-100 dark:hover:bg-amber-950/60 transition"
        >
          <span className="font-bold text-amber-800 dark:text-amber-300">
            🔥 {dueCount} ቃላት ለዛሬ ክለሳ ይጠብቃሉ — አሁን ይጀምሩ →
          </span>
        </Link>
      )}
      <section className="relative overflow-hidden">
        <img
          src="/home-bg.svg"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none select-none dark:hidden"
        />
        <img
          src="/home-bg-dark.svg"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none select-none hidden dark:block"
        />
        <div className="relative max-w-4xl mx-auto text-center px-6 py-20">
        <span className="inline-block bg-blue-100 dark:bg-blue-950 text-blue-900 dark:text-blue-200 font-semibold px-4 py-1.5 rounded-full text-xs uppercase tracking-wider mb-4 handwritten-border border border-blue-200 dark:border-blue-900">
          የቋንቋ መማሪያ መድረክ
        </span>
        <h1 className="text-4xl sm:text-6xl font-black text-gray-900 dark:text-gray-100 tracking-tight mb-6 leading-tight">
          የጀርመንኛ ቋንቋ በቀላሉ ይማሩ!
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-xl mx-auto mb-10 leading-relaxed font-medium">
          የቃላት ዝርዝር፣ ፍላሽ ካርዶች፣ ፈተናዎች እና የሰዋስው ትምህርቶች — ሁሉም በአማርኛ ማብራሪያ።
          {totalWords ? ` አሁን ${totalWords} ቃላት ይገኛሉ።` : ''}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/flashcards"
            className="bg-blue-700 text-white font-bold text-lg px-8 py-4 rounded-xl shadow-md hover:bg-blue-800 transition-all transform hover:-translate-y-0.5 inline-block border-2 border-gray-900/10"
          >
            መማር ይጀምሩ
          </Link>
          {!user && (
            <Link
              to="/register"
              className="bg-gray-800 dark:bg-blue-100 text-blue-50 dark:text-gray-900 font-bold text-lg px-8 py-4 rounded-xl shadow-md hover:bg-gray-700 dark:hover:bg-blue-200 transition-all transform hover:-translate-y-0.5 inline-block"
            >
              ነፃ መለያ ይክፈቱ
            </Link>
          )}
        </div>
      </div>
      </section>

      <section className="bg-gray-100/60 dark:bg-night-raised/50 border-t-2 border-b-2 border-gray-200/40 dark:border-gray-800 py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center md:text-left mb-12">
            <h2 className="text-3xl font-black text-gray-900 dark:text-gray-100 mb-2">ምን ይማራሉ?</h2>
            <p className="text-gray-500 dark:text-gray-400 font-medium">
              ለአማርኛ ተናጋሪዎች ተብሎ የተዘጋጀ ሙሉ የመማሪያ መድረክ።
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((f) => (
              <Link
                key={f.to}
                to={f.to}
                className="bg-paper dark:bg-night-raised border-2 border-gray-300/80 dark:border-gray-700 handwritten-border p-6 flex flex-col shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.01]"
              >
                <div className="flex justify-between items-start mb-4">
                  <span className="text-xs font-bold uppercase tracking-widest text-blue-700 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/40 px-2 py-1 rounded">
                    {f.tag}
                  </span>
                  <span className="text-2xl">{f.emoji}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">{f.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{f.text}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {meta && (
        <section className="max-w-4xl mx-auto px-6 py-16 text-center">
          <h2 className="text-2xl font-black text-gray-900 dark:text-gray-100 mb-8">የቃላት ብዛት በደረጃ</h2>
          <div className="grid grid-cols-3 gap-4 max-w-lg mx-auto">
            {meta.levels.map((level) => (
              <div key={level} className="bg-blue-50 dark:bg-blue-950/40 border-2 border-blue-200 dark:border-blue-900 handwritten-border p-4">
                <div className="text-3xl font-black text-blue-800 dark:text-blue-300">{meta.counts[level] ?? 0}</div>
                <div className="text-sm font-semibold text-gray-600 dark:text-gray-300 mt-1">{level} ደረጃ</div>
              </div>
            ))}
          </div>
        </section>
      )}
    </>
  )
}
