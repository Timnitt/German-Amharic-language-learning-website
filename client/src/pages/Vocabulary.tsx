import { useEffect, useState } from 'react'
import { api } from '../api'
import type { VocabEntry, VocabMeta } from '../types'

const categoryLabels: Record<string, string> = {
  greetings: 'ሰላምታ',
  family: 'ቤተሰብ',
  food: 'ምግብ',
  numbers: 'ቁጥሮች',
  colors: 'ቀለሞች',
  verbs: 'ግሶች',
  everyday: 'የዕለት ኑሮ',
  time: 'ጊዜ',
  adjectives: 'ቅጽሎች',
  work: 'ሥራ እና ኑሮ',
}

export default function Vocabulary() {
  const [meta, setMeta] = useState<VocabMeta | null>(null)
  const [items, setItems] = useState<VocabEntry[]>([])
  const [level, setLevel] = useState('')
  const [category, setCategory] = useState('')
  const [search, setSearch] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    api.get<VocabMeta>('/api/vocabulary/meta').then(setMeta).catch(() => {})
  }, [])

  useEffect(() => {
    const params = new URLSearchParams()
    if (level) params.set('level', level)
    if (category) params.set('category', category)
    if (search) params.set('search', search)
    const timer = setTimeout(() => {
      setLoading(true)
      api
        .get<{ items: VocabEntry[] }>(`/api/vocabulary?${params}`)
        .then((res) => setItems(res.items))
        .catch(() => setItems([]))
        .finally(() => setLoading(false))
    }, 200)
    return () => clearTimeout(timer)
  }, [level, category, search])

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <div className="mb-10">
        <h1 className="text-3xl font-black text-gray-900 mb-2">የቃላት ዝርዝር</h1>
        <p className="text-gray-500 font-medium">
          የጀርመንኛ ቃላት ከአማርኛ ትርጉም እና አነባበብ ጋር።
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 mb-8">
        <input
          type="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="ቃል ይፈልጉ… (ጀርመንኛ ወይም አማርኛ)"
          className="flex-1 border-2 border-gray-300 rounded-xl px-4 py-2.5 bg-white focus:outline-none focus:border-blue-600"
        />
        <select
          value={level}
          onChange={(e) => setLevel(e.target.value)}
          className="border-2 border-gray-300 rounded-xl px-4 py-2.5 bg-white focus:outline-none focus:border-blue-600 cursor-pointer"
        >
          <option value="">ሁሉም ደረጃ</option>
          {meta?.levels.map((l) => (
            <option key={l} value={l}>
              {l}
            </option>
          ))}
        </select>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border-2 border-gray-300 rounded-xl px-4 py-2.5 bg-white focus:outline-none focus:border-blue-600 cursor-pointer"
        >
          <option value="">ሁሉም ምድብ</option>
          {meta?.categories.map((c) => (
            <option key={c} value={c}>
              {categoryLabels[c] ?? c}
            </option>
          ))}
        </select>
      </div>

      {loading ? (
        <div className="py-16 text-center text-gray-400 text-lg">በመጫን ላይ…</div>
      ) : items.length === 0 ? (
        <div className="py-16 text-center text-gray-400 text-lg">ምንም ቃል አልተገኘም።</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {items.map((word) => (
            <div
              key={word.id}
              className="bg-paper border-2 border-gray-300/80 handwritten-border p-5 hover:shadow-md transition-shadow"
            >
              <div className="flex justify-between items-start mb-2">
                <div>
                  <div className="text-xl font-bold text-gray-900">{word.german}</div>
                  <div className="text-lg text-blue-800 font-semibold">{word.amharic}</div>
                  {word.pronunciation && (
                    <div className="text-sm text-gray-400">አነባበብ፦ {word.pronunciation}</div>
                  )}
                </div>
                <div className="flex flex-col items-end gap-1">
                  <span className="text-xs font-bold bg-gray-800 text-blue-50 px-2 py-0.5 rounded">
                    {word.level}
                  </span>
                  <span className="text-xs font-semibold text-blue-700 bg-blue-50 px-2 py-0.5 rounded">
                    {categoryLabels[word.category] ?? word.category}
                  </span>
                </div>
              </div>
              {word.example_de && (
                <div className="mt-3 pt-3 border-t border-gray-200 text-sm">
                  <p className="text-gray-700 italic">„{word.example_de}“</p>
                  <p className="text-gray-500">{word.example_am}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
