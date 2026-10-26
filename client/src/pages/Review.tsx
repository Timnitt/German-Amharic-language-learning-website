import { useCallback, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { api, toAmharicError } from '../api'
import { useAuth } from '../AuthContext'
import Spinner from '../components/Spinner'
import ErrorMessage from '../components/ErrorMessage'
import { usePageTitle } from '../usePageTitle'
import type { ReviewWord } from '../types'

export default function Review() {
  usePageTitle('የዕለት ክለሳ')
  const { user } = useAuth()
  const [words, setWords] = useState<ReviewWord[]>([])
  const [index, setIndex] = useState(0)
  const [flipped, setFlipped] = useState(false)
  const [known, setKnown] = useState(0)
  const [unknown, setUnknown] = useState(0)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [totalDue, setTotalDue] = useState(0)

  const load = useCallback(() => {
    if (!user) {
      setLoading(false)
      return
    }
    setLoading(true)
    setError('')
    api
      .get<{ items: ReviewWord[]; total: number }>('/api/progress/due?limit=20')
      .then((res) => {
        setWords(res.items)
        setTotalDue(res.total)
      })
      .catch((err) => setError(toAmharicError(err)))
      .finally(() => setLoading(false))
  }, [user])

  useEffect(() => {
    load()
  }, [load])

  const card = words[index]
  const done = !loading && words.length > 0 && index >= words.length

  function answer(correct: boolean) {
    if (!card) return
    if (correct) setKnown((k) => k + 1)
    else setUnknown((u) => u + 1)
    api.post('/api/progress/review', { vocabId: card.id, correct }).catch(() => {})
    setFlipped(false)
    setIndex((i) => i + 1)
  }

  if (!user) {
    return (
      <div className="max-w-2xl mx-auto px-6 py-16 text-center">
        <div className="text-5xl mb-4">🔒</div>
        <h1 className="text-3xl font-black text-gray-900 dark:text-gray-100 mb-3">የዕለት ክለሳ</h1>
        <p className="text-gray-500 dark:text-gray-400 mb-6">ክለሳ ለመጠቀም መግባት ያስፈልጋል።</p>
        <Link
          to="/login"
          className="bg-blue-700 text-white font-bold px-8 py-3 rounded-xl hover:bg-blue-800 transition inline-block"
        >
          ግባ
        </Link>
      </div>
    )
  }

  if (loading) {
    return <Spinner />
  }

  if (error) {
    return (
      <div className="max-w-2xl mx-auto px-6 py-12">
        <ErrorMessage message={error} onRetry={load} />
      </div>
    )
  }

  if (words.length === 0 && !done) {
    return (
      <div className="max-w-2xl mx-auto px-6 py-16 text-center">
        <div className="text-5xl mb-4">🎯</div>
        <h1 className="text-3xl font-black text-gray-900 dark:text-gray-100 mb-3">ለዛሬ ክለሳ የለም!</h1>
        <p className="text-gray-500 dark:text-gray-400 mb-6">
          ሁሉንም ቃላት ለዛሬ ክልሰዋል። ነገ ተመልሰው ይምጡ ወይም አዳዲስ ቃላት ይለማመዱ።
        </p>
        <Link
          to="/flashcards"
          className="bg-blue-700 text-white font-bold px-8 py-3 rounded-xl hover:bg-blue-800 transition inline-block"
        >
          አዳዲስ ቃላት ይለማመዱ
        </Link>
      </div>
    )
  }

  if (done) {
    return (
      <div className="max-w-2xl mx-auto px-6 py-12">
        <div className="text-center py-12 bg-paper dark:bg-night-raised border-2 border-gray-300 dark:border-gray-700 handwritten-border">
          <div className="text-5xl mb-4">🎉</div>
          <h2 className="text-2xl font-black text-gray-900 dark:text-gray-100 mb-2">ክለሳ ተጠናቀቀ!</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-2">
            ያወቁት፦ <span className="font-bold text-green-700 dark:text-green-400">{known}</span> · ያላወቁት፦{' '}
            <span className="font-bold text-red-700 dark:text-red-400">{unknown}</span>
          </p>
          {totalDue > words.length && (
            <p className="text-sm text-gray-400 dark:text-gray-400 mb-6">
              ሌላ {totalDue - words.length} ቃላት ገና ይጠብቃሉ
            </p>
          )}
          <div className="flex gap-4 justify-center mt-6">
            <Link
              to="/dashboard"
              className="bg-gray-800 dark:bg-blue-100 text-blue-50 dark:text-gray-900 font-bold px-6 py-3 rounded-xl hover:bg-gray-700 dark:hover:bg-blue-200 transition"
            >
              ዳሽቦርድ
            </Link>
            <button
              onClick={() => window.location.reload()}
              className="bg-blue-700 text-white font-bold px-6 py-3 rounded-xl hover:bg-blue-800 transition cursor-pointer"
            >
              ተጨማሪ ክለሳ
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-2xl mx-auto px-6 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-black text-gray-900 dark:text-gray-100 mb-1">የዕለት ክለሳ</h1>
        <p className="text-gray-500 dark:text-gray-400 font-medium">
          {totalDue - index} ቃላት ለዛሬ ይጠብቃሉ
        </p>
      </div>

      <div className="h-2 bg-gray-200 dark:bg-gray-800 rounded-full mb-6 overflow-hidden">
        <div
          className="h-full bg-blue-600 rounded-full transition-all"
          style={{ width: `${Math.round((index / words.length) * 100)}%` }}
        />
      </div>
      <p className="text-center text-sm text-gray-400 dark:text-gray-400 mb-4">
        {index + 1} / {words.length}
      </p>

      {card && (
        <>
          <button
            type="button"
            aria-pressed={flipped}
            aria-label={flipped ? 'መልሱን ለመደበቅ ካርዱን ይገልብጡ' : 'መልሱን ለማየት ካርዱን ይገልብጡ'}
            className={`flip-card block w-full cursor-pointer select-none rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${flipped ? 'flipped' : ''}`}
            onClick={() => setFlipped((f) => !f)}
          >
            <div className="flip-inner relative h-72">
              <div aria-hidden={flipped} className="flip-face absolute inset-0 bg-paper dark:bg-night-raised border-2 border-gray-300 dark:border-gray-700 handwritten-border flex flex-col items-center justify-center p-8 shadow-sm">
                <span className="text-xs font-bold uppercase tracking-widest text-blue-700 dark:text-blue-400 mb-4">
                  ጀርመንኛ
                </span>
                <span className="text-4xl font-black text-gray-900 dark:text-gray-100 text-center">{card.german}</span>
                <span className="mt-6 text-sm text-gray-400 dark:text-gray-400">ለመገልበጥ ይንኩ ↻</span>
              </div>
              <div aria-hidden={!flipped} className="flip-face flip-back absolute inset-0 bg-gray-800 text-blue-50 handwritten-border flex flex-col items-center justify-center p-8 shadow-sm dark:bg-blue-950 dark:border-2 dark:border-blue-900">
                <span className="text-xs font-bold uppercase tracking-widest text-blue-400 mb-4">
                  አማርኛ
                </span>
                <span className="text-4xl font-black text-center">{card.amharic}</span>
                {card.pronunciation && (
                  <span className="mt-3 text-blue-200/80">አነባበብ፦ {card.pronunciation}</span>
                )}
                {card.example_de && (
                  <span className="mt-4 text-sm text-gray-300 italic text-center">
                    „{card.example_de}"
                  </span>
                )}
              </div>
            </div>
          </button>
          <p className="sr-only" aria-live="polite">
            {flipped ? `${card.amharic}${card.pronunciation ? `, አነባበብ ${card.pronunciation}` : ''}` : ''}
          </p>

          <div className="flex gap-4 mt-8">
            <button
              onClick={() => answer(false)}
              className="flex-1 bg-white dark:bg-night-raised border-2 border-red-300 dark:border-red-800 text-red-700 dark:text-red-400 font-bold py-3.5 rounded-xl hover:bg-red-50 dark:hover:bg-red-950/40 transition cursor-pointer"
            >
              ✗ አላወቅኩም
            </button>
            <button
              onClick={() => answer(true)}
              className="flex-1 bg-white dark:bg-night-raised border-2 border-green-300 dark:border-green-800 text-green-700 dark:text-green-400 font-bold py-3.5 rounded-xl hover:bg-green-50 dark:hover:bg-green-950/40 transition cursor-pointer"
            >
              ✓ አውቀዋለሁ
            </button>
          </div>
        </>
      )}
    </div>
  )
}
