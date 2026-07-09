import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { api } from '../api'
import { useAuth } from '../AuthContext'
import type { VocabMeta } from '../types'

const features = [
  {
    to: '/vocabulary',
    emoji: '📚',
    tag: 'የቃላት ማከማቻ',
    title: 'የቃላት ዝርዝር',
    text: 'ከ90 በላይ የጀርመንኛ ቃላት ከአማርኛ ትርጉም፣ አነባበብ እና ምሳሌያዊ ዓረፍተ-ነገሮች ጋር። በደረጃ (A1–B1) እና በምድብ ይፈልጉ።',
  },
  {
    to: '/flashcards',
    emoji: '🃏',
    tag: 'መለማመጃ',
    title: 'ፍላሽ ካርዶች',
    text: 'ቃላትን በካርድ መገልበጥ ይለማመዱ። ያወቁትን እና ያላወቁትን ምልክት ያድርጉ — እድገትዎ ይመዘገባል።',
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
  const { user } = useAuth()
  const [meta, setMeta] = useState<VocabMeta | null>(null)

  useEffect(() => {
    api.get<VocabMeta>('/api/vocabulary/meta').then(setMeta).catch(() => {})
  }, [])

  const totalWords = meta ? Object.values(meta.counts).reduce((a, b) => a + b, 0) : null

  return (
    <>
      <section className="max-w-4xl mx-auto text-center px-6 py-20">
        <span className="inline-block bg-amber-100 text-amber-900 font-semibold px-4 py-1.5 rounded-full text-xs uppercase tracking-wider mb-4 handwritten-border border border-amber-200">
          ነፃ የቋንቋ መማሪያ መድረክ
        </span>
        <h1 className="text-4xl sm:text-6xl font-black text-stone-900 tracking-tight mb-6 leading-tight">
          የጀርመንኛ ቋንቋ በቀላሉ ይማሩ!
        </h1>
        <p className="text-xl text-stone-600 max-w-xl mx-auto mb-10 leading-relaxed font-medium">
          የቃላት ዝርዝር፣ ፍላሽ ካርዶች፣ ፈተናዎች እና የሰዋስው ትምህርቶች — ሁሉም በአማርኛ ማብራሪያ።
          {totalWords ? ` አሁን ${totalWords} ቃላት ይገኛሉ።` : ''}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/flashcards"
            className="bg-amber-700 text-white font-bold text-lg px-8 py-4 rounded-xl shadow-md hover:bg-amber-800 transition-all transform hover:-translate-y-0.5 inline-block border-2 border-stone-900/10"
          >
            መማር ይጀምሩ
          </Link>
          {!user && (
            <Link
              to="/register"
              className="bg-stone-800 text-amber-50 font-bold text-lg px-8 py-4 rounded-xl shadow-md hover:bg-stone-700 transition-all transform hover:-translate-y-0.5 inline-block"
            >
              ነፃ መለያ ይክፈቱ
            </Link>
          )}
        </div>
      </section>

      <section className="bg-stone-100/60 border-t-2 border-b-2 border-stone-200/40 py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center md:text-left mb-12">
            <h2 className="text-3xl font-black text-stone-900 mb-2">ምን ይማራሉ?</h2>
            <p className="text-stone-500 font-medium">
              ለአማርኛ ተናጋሪዎች ተብሎ የተዘጋጀ ሙሉ የመማሪያ መድረክ።
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((f) => (
              <Link
                key={f.to}
                to={f.to}
                className="bg-paper border-2 border-stone-300/80 handwritten-border p-6 flex flex-col shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.01]"
              >
                <div className="flex justify-between items-start mb-4">
                  <span className="text-xs font-bold uppercase tracking-widest text-amber-700 bg-amber-50 px-2 py-1 rounded">
                    {f.tag}
                  </span>
                  <span className="text-2xl">{f.emoji}</span>
                </div>
                <h3 className="text-xl font-bold text-stone-900 mb-2">{f.title}</h3>
                <p className="text-stone-600 text-sm leading-relaxed">{f.text}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {meta && (
        <section className="max-w-4xl mx-auto px-6 py-16 text-center">
          <h2 className="text-2xl font-black text-stone-900 mb-8">የቃላት ብዛት በደረጃ</h2>
          <div className="grid grid-cols-3 gap-4 max-w-lg mx-auto">
            {meta.levels.map((level) => (
              <div key={level} className="bg-amber-50 border-2 border-amber-200 handwritten-border p-4">
                <div className="text-3xl font-black text-amber-800">{meta.counts[level] ?? 0}</div>
                <div className="text-sm font-semibold text-stone-600 mt-1">{level} ደረጃ</div>
              </div>
            ))}
          </div>
        </section>
      )}
    </>
  )
}
