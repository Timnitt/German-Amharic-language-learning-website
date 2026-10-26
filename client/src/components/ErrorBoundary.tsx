import { Component, type ErrorInfo, type ReactNode } from 'react'

interface Props {
  children: ReactNode
}

interface State {
  hasError: boolean
}

// Catches render-time crashes anywhere in the route tree and shows an Amharic fallback
// instead of a blank white screen, with reload and go-home actions.
export default class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false }

  static getDerivedStateFromError(): State {
    return { hasError: true }
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error('Unhandled UI error:', error, info)
  }

  render() {
    if (!this.state.hasError) return this.props.children

    return (
      <div role="alert" className="max-w-md mx-auto px-6 py-24 text-center">
        <div className="text-5xl mb-4" aria-hidden="true">
          😕
        </div>
        <h1 className="text-2xl font-black text-gray-900 dark:text-gray-100 mb-3">የሆነ ችግር ተፈጥሯል</h1>
        <p className="text-gray-500 dark:text-gray-400 mb-8">
          ያልተጠበቀ ስህተት አጋጥሟል። እባክዎ ገጹን እንደገና ይጫኑ ወይም ወደ መነሻ ይመለሱ።
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={() => window.location.reload()}
            className="bg-blue-700 text-white font-bold px-6 py-3 rounded-xl hover:bg-blue-800 transition cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-paper dark:focus-visible:ring-offset-night"
          >
            ገጹን እንደገና ይጫኑ
          </button>
          <a
            href="/"
            className="bg-gray-800 dark:bg-blue-100 text-blue-50 dark:text-gray-900 font-bold px-6 py-3 rounded-xl hover:bg-gray-700 dark:hover:bg-blue-200 transition"
          >
            ወደ መነሻ ይመለሱ
          </a>
        </div>
      </div>
    )
  }
}
