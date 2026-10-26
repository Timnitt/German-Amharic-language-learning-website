import { useEffect, useState } from 'react'

type Theme = 'light' | 'dark'

// The initial class is set by the inline script in index.html before first paint
function currentTheme(): Theme {
  return document.documentElement.classList.contains('dark') ? 'dark' : 'light'
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(currentTheme)
  const isDark = theme === 'dark'

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark)
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute('content', isDark ? '#0e141b' : '#116eee')
  }, [isDark])

  // Follow OS theme changes until the user picks one explicitly
  useEffect(() => {
    const media = matchMedia('(prefers-color-scheme: dark)')
    function onChange(e: MediaQueryListEvent) {
      if (!localStorage.getItem('theme')) setTheme(e.matches ? 'dark' : 'light')
    }
    media.addEventListener('change', onChange)
    return () => media.removeEventListener('change', onChange)
  }, [])

  function toggle() {
    const next: Theme = isDark ? 'light' : 'dark'
    setTheme(next)
    try {
      localStorage.setItem('theme', next)
    } catch {
      // storage unavailable (private mode) — theme still applies for this visit
    }
  }

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isDark}
      aria-label={isDark ? 'ብሩህ ገጽታ አድርግ' : 'ጨለማ ገጽታ አድርግ'}
      title={isDark ? 'ብሩህ ገጽታ (Light mode)' : 'ጨለማ ገጽታ (Dark mode)'}
      onClick={toggle}
      className="relative inline-flex h-8 w-14 shrink-0 items-center rounded-full border-2 border-stone-300 bg-stone-200 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-paper dark:border-gray-600 dark:bg-gray-800 dark:focus-visible:ring-offset-night"
    >
      <span
        className={`absolute left-0.5 flex h-6 w-6 items-center justify-center rounded-full shadow-sm transition-transform duration-300 ${
          isDark ? 'translate-x-6 bg-night text-amber-300' : 'translate-x-0 bg-white text-amber-600'
        }`}
      >
        {isDark ? (
          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
          </svg>
        ) : (
          <svg
            className="h-4 w-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            aria-hidden="true"
          >
            <circle cx="12" cy="12" r="4" fill="currentColor" />
            <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
          </svg>
        )}
      </span>
    </button>
  )
}
