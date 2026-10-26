import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'
import { useNavigate } from 'react-router-dom'
import { api, getToken, setToken, UNAUTHORIZED_EVENT } from './api'
import type { User } from './types'

interface AuthState {
  user: User | null
  loading: boolean
  login: (email: string, password: string) => Promise<void>
  register: (name: string, email: string, password: string) => Promise<void>
  logout: () => void
}

const AuthContext = createContext<AuthState | null>(null)

export function AuthProvider({ children }: { children: ReactNode }) {
  const navigate = useNavigate()
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!getToken()) {
      setLoading(false)
      return
    }
    // Silent probe: a stale token here just clears the session without bouncing the user,
    // since public pages work logged-out.
    api
      .get<{ user: User }>('/api/auth/me', { silent401: true })
      .then((res) => setUser(res.user))
      .catch(() => setToken(null))
      .finally(() => setLoading(false))
  }, [])

  // A 401 on a protected endpoint (expired token mid-session) clears the session and
  // sends the user to login.
  useEffect(() => {
    function onUnauthorized() {
      setUser(null)
      setToken(null)
      navigate('/login')
    }
    window.addEventListener(UNAUTHORIZED_EVENT, onUnauthorized)
    return () => window.removeEventListener(UNAUTHORIZED_EVENT, onUnauthorized)
  }, [navigate])

  async function login(email: string, password: string) {
    const res = await api.post<{ token: string; user: User }>('/api/auth/login', { email, password })
    setToken(res.token)
    setUser(res.user)
  }

  async function register(name: string, email: string, password: string) {
    const res = await api.post<{ token: string; user: User }>('/api/auth/register', {
      name,
      email,
      password,
    })
    setToken(res.token)
    setUser(res.user)
  }

  function logout() {
    setToken(null)
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, loading, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth(): AuthState {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used within AuthProvider')
  return ctx
}
