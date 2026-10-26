import { useEffect, useState } from 'react'
import { api, toAmharicError } from '../api'
import Spinner from '../components/Spinner'
import ErrorMessage from '../components/ErrorMessage'
import { usePageTitle } from '../usePageTitle'
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
  days: 'የሳምንት ቀናት',
  months: 'ወራት',
  seasons: 'ወቅቶች',
  weather: 'የአየር ሁኔታ',
  body: 'ሰውነት',
  clothing: 'ልብስ',
  house: 'ቤት እና ቁሳቁስ',
  shopping: 'ግብይት',
  transport: 'ትራንስፖርት',
  animals: 'እንስሳት',
  nature: 'ተፈጥሮ',
  emotions: 'ስሜቶች',
  professions: 'ሙያዎች',
  education: 'ትምህርት',
  hobbies: 'የትርፍ ጊዜ',
  technology: 'ቴክኖሎጂ',
  directions: 'አቅጣጫ',
  questions: 'ጥያቄዎች',
  restaurant: 'ምግብ ቤት',
  health: 'ጤና',
  fruits_vegetables: 'ፍራፍሬ እና አትክልት',
  prepositions: 'መስተዋድዶች',
  pronouns: 'ተውላጠ-ስሞች',
  countries: 'አገሮች',
  modal_verbs: 'ዋና ግሶች',
  separable_verbs: 'ተነጣይ ግሶች',
  conjunctions: 'ማያያዣዎች',
  classroom: 'ክፍል ውስጥ',
  city_places: 'ከተማ ውስጥ',
  legal_admin: 'ህጋዊ/አስተዳደራዊ',
  medical: 'ህክምና',
}

export default function Vocabulary() {
  usePageTitle('የቃላት ዝርዝር')
  const [meta, setMeta] = useState<VocabMeta | null>(null)
  const [items, setItems] = useState<VocabEntry[]>([])
  const [level, setLevel] = useState('')
  const [category, setCategory] = useState('')
  const [search, setSearch] = useState('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  // Bumped to force the search effect to re-run on retry.
  const [reload, setReload] = useState(0)

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
      setError('')
      api
        .get<{ items: VocabEntry[] }>(`/api/vocabulary?${params}`)
        .then((res) => setItems(res.items))
        .catch((err) => {
          setItems([])
          setError(toAmharicError(err))
        })
        .finally(() => setLoading(false))
    }, 200)
    return () => clearTimeout(timer)
  }, [level, category, search, reload])

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <div className="mb-10">
        <h1 className="text-3xl font-black text-gray-900 dark:text-gray-100 mb-2">የቃላት ዝርዝር</h1>
        <p className="text-gray-500 dark:text-gray-400 font-medium">
          የጀርመንኛ ቃላት ከአማርኛ ትርጉም እና አነባበብ ጋር።
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 mb-8">
        <input
          type="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="ቃል ይፈልጉ… (ጀርመንኛ ወይም አማርኛ)"
          aria-label="ቃል ይፈልጉ"
          className="flex-1 border-2 border-gray-300 dark:border-gray-700 rounded-xl px-4 py-2.5 bg-white dark:bg-night focus:outline-none focus:border-blue-600"
        />
        <select
          value={level}
          onChange={(e) => setLevel(e.target.value)}
          aria-label="በደረጃ ያጣሩ"
          className="border-2 border-gray-300 dark:border-gray-700 rounded-xl px-4 py-2.5 bg-white dark:bg-night focus:outline-none focus:border-blue-600 cursor-pointer"
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
          aria-label="በምድብ ያጣሩ"
          className="border-2 border-gray-300 dark:border-gray-700 rounded-xl px-4 py-2.5 bg-white dark:bg-night focus:outline-none focus:border-blue-600 cursor-pointer"
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
        <Spinner />
      ) : error ? (
        <ErrorMessage message={error} onRetry={() => setReload((n) => n + 1)} />
      ) : items.length === 0 ? (
        <div className="py-16 text-center text-gray-400 dark:text-gray-400 text-lg">ምንም ቃል አልተገኘም።</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {items.map((word) => (
            <div
              key={word.id}
              className="bg-paper dark:bg-night-raised border-2 border-gray-300/80 dark:border-gray-700 handwritten-border p-5 hover:shadow-md transition-shadow"
            >
              <div className="flex justify-between items-start mb-2">
                <div>
                  <div className="text-xl font-bold text-gray-900 dark:text-gray-100">{word.german}</div>
                  <div className="text-lg text-blue-800 dark:text-blue-300 font-semibold">{word.amharic}</div>
                  {word.pronunciation && (
                    <div className="text-sm text-gray-400 dark:text-gray-400">አነባበብ፦ {word.pronunciation}</div>
                  )}
                </div>
                <div className="flex flex-col items-end gap-1">
                  <span className="text-xs font-bold bg-gray-800 dark:bg-blue-100 text-blue-50 dark:text-gray-900 px-2 py-0.5 rounded">
                    {word.level}
                  </span>
                  <span className="text-xs font-semibold text-blue-700 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/40 px-2 py-0.5 rounded">
                    {categoryLabels[word.category] ?? word.category}
                  </span>
                </div>
              </div>
              {word.example_de && (
                <div className="mt-3 pt-3 border-t border-gray-200 dark:border-gray-800 text-sm">
                  <p className="text-gray-700 dark:text-gray-300 italic">„{word.example_de}“</p>
                  <p className="text-gray-500 dark:text-gray-400">{word.example_am}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
