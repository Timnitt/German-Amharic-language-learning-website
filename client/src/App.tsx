import { lazy, Suspense, type ReactNode } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { useAuth } from './AuthContext'
import Layout from './components/Layout'
import ErrorBoundary from './components/ErrorBoundary'
import Spinner from './components/Spinner'
import Home from './pages/Home'

// Home loads eagerly (it's the landing page); the rest are code-split so each route
// only pulls its own chunk. They load under the same-origin CSP as /assets/*.js.
const Vocabulary = lazy(() => import('./pages/Vocabulary'))
const Flashcards = lazy(() => import('./pages/Flashcards'))
const Quiz = lazy(() => import('./pages/Quiz'))
const Lessons = lazy(() => import('./pages/Lessons'))
const LessonDetail = lazy(() => import('./pages/LessonDetail'))
const Review = lazy(() => import('./pages/Review'))
const Dashboard = lazy(() => import('./pages/Dashboard'))
const Login = lazy(() => import('./pages/Login'))
const Register = lazy(() => import('./pages/Register'))
const NotFound = lazy(() => import('./pages/NotFound'))

function RequireAuth({ children }: { children: ReactNode }) {
  const { user, loading } = useAuth()
  if (loading) {
    return <div className="py-24 text-center text-gray-400 dark:text-gray-400 text-lg">በመጫን ላይ…</div>
  }
  if (!user) return <Navigate to="/login" replace />
  return <>{children}</>
}

export default function App() {
  return (
    <Layout>
      <ErrorBoundary>
        <Suspense fallback={<Spinner />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/flashcards" element={<Flashcards />} />
            <Route path="/review" element={<Review />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/lessons" element={<Lessons />} />
            <Route path="/lessons/vocabulary" element={<Vocabulary />} />
            <Route path="/lessons/:id" element={<LessonDetail />} />
            <Route path="/vocabulary" element={<Navigate to="/lessons/vocabulary" replace />} />
            <Route
              path="/dashboard"
              element={
                <RequireAuth>
                  <Dashboard />
                </RequireAuth>
              }
            />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </ErrorBoundary>
    </Layout>
  )
}
