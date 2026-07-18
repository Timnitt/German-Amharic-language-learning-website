import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { api } from '../api'
import { useAuth } from '../AuthContext'
import type { VocabEntry, Level } from '../types'

function shuffle<T>(arr: T[]): T[] {
  const copy = [...arr]
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[copy[i], copy[j]] = [copy[j], copy[i]]
  }
  return copy
}

export default function Flashcards() {
  const { user } = useAuth()
  const [level, setLevel] = useState<Level>('A1')
  const [cards, setCards] = useState<VocabEntry[]>([])
  const [index, setIndex] = useState(0)
  const [flipped, setFlipped] = useState(false)
  const [known, setKnown] = useState(0)
  const [unknown, setUnknown] = useState(0)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    api
      .get<{ items: VocabEntry[] }>(`/api/vocabulary?level=${level}`)
      .then((res) => {
        setCards(shuffle(res.items).slice(0, 15))
        setIndex(0)
        setFlipped(false)
        setKnown(0)
        setUnknown(0)
      })
      .finally(() => setLoading(false))
  }, [level])

  const card = cards[index]
  const done = !loading && cards.length > 0 && index >= cards.length
  const progressPct = useMemo(
    () => (cards.length ? Math.round((index / cards.length) * 100) : 0),
    [index, cards.length],
  )

  function answer(correct: boolean) {
    if (!card) return
    if (correct) setKnown((k) => k + 1)
    else setUnknown((u) => u + 1)
    if (user) {
      api.post('/api/progress/review', { vocabId: card.id, correct }).catch(() => {})
    }
    setFlipped(false)
    setIndex((i) => i + 1)
  }

  function restart() {
    setCards((c) => shuffle(c))
    setIndex(0)
    setFlipped(false)
    setKnown(0)
    setUnknown(0)
  }

  return (
    <div className="max-w-2xl mx-auto px-6 py-12">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-black text-gray-900 mb-1">ፍላሽ ካርዶች</h1>
          <p className="text-gray-500 font-medium">ካርዱን ይንኩ — ትርጉሙን ያዩ።</p>
        </div>
        <div className="flex gap-2">
          {(['A1', 'A2', 'B1'] as Level[]).map((l) => (
            <button
              key={l}
              onClick={() => setLevel(l)}
              className={`px-4 py-2 rounded-xl font-bold text-sm border-2 transition cursor-pointer ${
                level === l
                  ? 'bg-gray-800 text-blue-50 border-gray-800'
                  : 'bg-white text-gray-600 border-gray-300 hover:border-gray-500'
              }`}
            >
              {l}
            </button>
          ))}
        </div>
      </div>

      {!user && (
        <p className="mb-6 text-sm text-gray-500 bg-blue-50 border border-blue-200 rounded-xl px-4 py-3">
          💡 <Link to="/login" className="font-bold text-blue-800 underline">ከገቡ</Link> እድገትዎ
          ተመዝግቦ በዳሽቦርድ ላይ ይታያል።
        </p>
      )}

      {loading ? (
        <div className="py-24 text-center text-gray-400 text-lg">በመጫን ላይ…</div>
      ) : done ? (
        <div className="text-center py-12 bg-paper border-2 border-gray-300 handwritten-border">
          <div className="text-5xl mb-4">🎉</div>
          <h2 className="text-2xl font-black text-gray-900 mb-2">ጨርሰዋል!</h2>
          <p className="text-gray-600 mb-6">
            ያወቁት፦ <span className="font-bold text-green-700">{known}</span> · ያላወቁት፦{' '}
            <span className="font-bold text-red-700">{unknown}</span>
          </p>
          <button
            onClick={restart}
            className="bg-blue-700 text-white font-bold px-6 py-3 rounded-xl hover:bg-blue-800 transition cursor-pointer"
          >
            እንደገና ጀምር
          </button>
        </div>
      ) : card ? (
        <>
          <div className="h-2 bg-gray-200 rounded-full mb-6 overflow-hidden">
            <div
              className="h-full bg-blue-600 rounded-full transition-all"
              style={{ width: `${progressPct}%` }}
            />
          </div>
          <p className="text-center text-sm text-gray-400 mb-4">
            ካርድ {index + 1} / {cards.length}
          </p>

          <div
            className={`flip-card cursor-pointer select-none ${flipped ? 'flipped' : ''}`}
            onClick={() => setFlipped((f) => !f)}
          >
            <div className="flip-inner relative h-72">
              <div className="flip-face absolute inset-0 bg-paper border-2 border-gray-300 handwritten-border flex flex-col items-center justify-center p-8 shadow-sm">
                <span className="text-xs font-bold uppercase tracking-widest text-blue-700 mb-4">
                  ጀርመንኛ
                </span>
                <span className="text-4xl font-black text-gray-900 text-center">{card.german}</span>
                <span className="mt-6 text-sm text-gray-400">ለመገልበጥ ይንኩ ↻</span>
              </div>
              <div className="flip-face flip-back absolute inset-0 bg-gray-800 text-blue-50 handwritten-border flex flex-col items-center justify-center p-8 shadow-sm">
                <span className="text-xs font-bold uppercase tracking-widest text-blue-400 mb-4">
                  አማርኛ
                </span>
                <span className="text-4xl font-black text-center">{card.amharic}</span>
                {card.pronunciation && (
                  <span className="mt-3 text-blue-200/80">አነባበብ፦ {card.pronunciation}</span>
                )}
                {card.example_de && (
                  <span className="mt-4 text-sm text-gray-300 italic text-center">
                    „{card.example_de}“
                  </span>
                )}
              </div>
            </div>
          </div>

          <div className="flex gap-4 mt-8">
            <button
              onClick={() => answer(false)}
              className="flex-1 bg-white border-2 border-red-300 text-red-700 font-bold py-3.5 rounded-xl hover:bg-red-50 transition cursor-pointer"
            >
              ✗ አላወቅኩም
            </button>
            <button
              onClick={() => answer(true)}
              className="flex-1 bg-white border-2 border-green-300 text-green-700 font-bold py-3.5 rounded-xl hover:bg-green-50 transition cursor-pointer"
            >
              ✓ አውቀዋለሁ
            </button>
          </div>
        </>
      ) : (
        <div className="py-24 text-center text-gray-400 text-lg">ለዚህ ደረጃ ቃላት የሉም።</div>
      )}
    </div>
  )
}
