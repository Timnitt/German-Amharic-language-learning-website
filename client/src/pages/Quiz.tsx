import { useState } from 'react'
import { Link } from 'react-router-dom'
import { api } from '../api'
import { useAuth } from '../AuthContext'
import type { QuizQuestion, Level } from '../types'

type Phase = 'setup' | 'playing' | 'finished'

export default function Quiz() {
  const { user } = useAuth()
  const [phase, setPhase] = useState<Phase>('setup')
  const [level, setLevel] = useState<Level>('A1')
  const [questions, setQuestions] = useState<QuizQuestion[]>([])
  const [index, setIndex] = useState(0)
  const [score, setScore] = useState(0)
  const [selected, setSelected] = useState<number | null>(null)
  const [error, setError] = useState('')

  async function start() {
    setError('')
    try {
      const res = await api.get<{ questions: QuizQuestion[] }>(`/api/quiz?level=${level}&count=10`)
      setQuestions(res.questions)
      setIndex(0)
      setScore(0)
      setSelected(null)
      setPhase('playing')
    } catch {
      setError('ፈተናውን መጫን አልተቻለም። እባክዎ እንደገና ይሞክሩ።')
    }
  }

  const question = questions[index]

  function choose(optionIndex: number) {
    if (selected !== null || !question) return
    setSelected(optionIndex)
    const correct = optionIndex === question.answer
    const newScore = correct ? score + 1 : score
    if (correct) setScore(newScore)

    setTimeout(() => {
      if (index + 1 >= questions.length) {
        setPhase('finished')
        if (user) {
          api.post('/api/quiz/submit', { level, score: newScore, total: questions.length }).catch(() => {})
        }
      } else {
        setIndex((i) => i + 1)
        setSelected(null)
      }
    }, 1100)
  }

  if (phase === 'setup') {
    return (
      <div className="max-w-xl mx-auto px-6 py-16 text-center">
        <h1 className="text-3xl font-black text-stone-900 mb-3">የቃላት ፈተና</h1>
        <p className="text-stone-500 font-medium mb-10">
          10 የምርጫ ጥያቄዎች — ጀርመንኛ ወደ አማርኛ እና አማርኛ ወደ ጀርመንኛ።
        </p>

        <div className="bg-paper border-2 border-stone-300 handwritten-border p-8">
          <p className="font-bold text-stone-700 mb-4">ደረጃ ይምረጡ፦</p>
          <div className="flex justify-center gap-3 mb-8">
            {(['A1', 'A2', 'B1'] as Level[]).map((l) => (
              <button
                key={l}
                onClick={() => setLevel(l)}
                className={`px-6 py-3 rounded-xl font-bold border-2 transition cursor-pointer ${
                  level === l
                    ? 'bg-stone-800 text-amber-50 border-stone-800'
                    : 'bg-white text-stone-600 border-stone-300 hover:border-stone-500'
                }`}
              >
                {l}
              </button>
            ))}
          </div>
          <button
            onClick={start}
            className="w-full bg-amber-700 text-white font-bold text-lg py-4 rounded-xl hover:bg-amber-800 transition cursor-pointer"
          >
            ፈተናውን ጀምር
          </button>
          {error && <p className="mt-4 text-red-600 text-sm">{error}</p>}
          {!user && (
            <p className="mt-6 text-sm text-stone-500">
              💡 ውጤትዎ እንዲመዘገብ <Link to="/login" className="font-bold text-amber-800 underline">ይግቡ</Link>።
            </p>
          )}
        </div>
      </div>
    )
  }

  if (phase === 'finished') {
    const pct = Math.round((score / questions.length) * 100)
    return (
      <div className="max-w-xl mx-auto px-6 py-16 text-center">
        <div className="bg-paper border-2 border-stone-300 handwritten-border p-10">
          <div className="text-5xl mb-4">{pct >= 80 ? '🏆' : pct >= 50 ? '👏' : '💪'}</div>
          <h1 className="text-3xl font-black text-stone-900 mb-2">ውጤትዎ</h1>
          <p className="text-6xl font-black text-amber-700 my-6">
            {score}/{questions.length}
          </p>
          <p className="text-stone-600 mb-8 text-lg">
            {pct >= 80 ? 'እጅግ በጣም ጥሩ! (Sehr gut!)' : pct >= 50 ? 'ጥሩ ሙከራ! መለማመዱን ይቀጥሉ።' : 'ተስፋ አይቁረጡ — ፍላሽ ካርዶችን ይለማመዱ!'}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={() => setPhase('setup')}
              className="bg-amber-700 text-white font-bold px-6 py-3 rounded-xl hover:bg-amber-800 transition cursor-pointer"
            >
              እንደገና ይሞክሩ
            </button>
            {user && (
              <Link
                to="/dashboard"
                className="bg-stone-800 text-amber-50 font-bold px-6 py-3 rounded-xl hover:bg-stone-700 transition"
              >
                ዳሽቦርድ ይመልከቱ
              </Link>
            )}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-xl mx-auto px-6 py-12">
      <div className="flex justify-between items-center mb-6 text-sm font-bold text-stone-500">
        <span>
          ጥያቄ {index + 1} / {questions.length}
        </span>
        <span>ነጥብ፦ {score}</span>
      </div>
      <div className="h-2 bg-stone-200 rounded-full mb-8 overflow-hidden">
        <div
          className="h-full bg-amber-600 rounded-full transition-all"
          style={{ width: `${(index / questions.length) * 100}%` }}
        />
      </div>

      <div className="bg-paper border-2 border-stone-300 handwritten-border p-8 mb-6 text-center">
        <span className="text-xs font-bold uppercase tracking-widest text-amber-700">
          {question.direction === 'de-am' ? 'ወደ አማርኛ ተርጉም' : 'ወደ ጀርመንኛ ተርጉም'}
        </span>
        <h2 className="text-4xl font-black text-stone-900 mt-3">{question.prompt}</h2>
      </div>

      <div className="space-y-3">
        {question.options.map((option, i) => {
          let style = 'bg-white border-stone-300 hover:border-amber-600 text-stone-800'
          if (selected !== null) {
            if (i === question.answer) style = 'bg-green-50 border-green-500 text-green-800'
            else if (i === selected) style = 'bg-red-50 border-red-400 text-red-700'
            else style = 'bg-white border-stone-200 text-stone-400'
          }
          return (
            <button
              key={i}
              onClick={() => choose(i)}
              disabled={selected !== null}
              className={`w-full text-left border-2 rounded-xl px-5 py-4 font-bold text-lg transition cursor-pointer disabled:cursor-default ${style}`}
            >
              {option}
            </button>
          )
        })}
      </div>

      {selected !== null && question.example && (
        <p className="mt-6 text-center text-stone-500 italic">ምሳሌ፦ „{question.example}“</p>
      )}
    </div>
  )
}
