import { useState, type FormEvent } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../AuthContext'

export default function Login() {
  const { login } = useAuth()
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [busy, setBusy] = useState(false)

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setError('')
    setBusy(true)
    try {
      await login(email, password)
      navigate('/dashboard')
    } catch (err) {
      setError(err instanceof Error ? err.message : 'መግባት አልተቻለም')
    } finally {
      setBusy(false)
    }
  }

  return (
    <div className="max-w-md mx-auto px-6 py-16">
      <div className="bg-paper border-2 border-stone-300 handwritten-border p-8">
        <h1 className="text-3xl font-black text-stone-900 mb-2 text-center">እንኳን ደህና መጡ!</h1>
        <p className="text-stone-500 text-center mb-8">ወደ መለያዎ ይግቡ።</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-bold text-stone-700 mb-1">ኢሜይል</label>
            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border-2 border-stone-300 rounded-xl px-4 py-2.5 bg-white focus:outline-none focus:border-amber-600"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-bold text-stone-700 mb-1">የይለፍ ቃል</label>
            <input
              id="password"
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border-2 border-stone-300 rounded-xl px-4 py-2.5 bg-white focus:outline-none focus:border-amber-600"
              placeholder="••••••••"
            />
          </div>

          {error && <p className="text-red-600 text-sm font-semibold">{error}</p>}

          <button
            type="submit"
            disabled={busy}
            className="w-full bg-amber-700 text-white font-bold py-3.5 rounded-xl hover:bg-amber-800 transition disabled:opacity-50 cursor-pointer"
          >
            {busy ? 'በመግባት ላይ…' : 'ግባ'}
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-stone-500">
          መለያ የለዎትም?{' '}
          <Link to="/register" className="font-bold text-amber-700 underline">
            ነፃ ይመዝገቡ
          </Link>
        </p>
      </div>
    </div>
  )
}
