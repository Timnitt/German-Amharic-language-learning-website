import { useEffect, useState } from 'react'

interface SpinnerProps {
  /** Main loading message (Amharic). */
  message?: string
  /** Shown after `slowAfterMs` to reassure on a slow cold start (Render free tier). */
  slowMessage?: string
  slowAfterMs?: number
}

// Centered loading state reused across pages. Announces itself to screen readers and,
// after a few seconds, shows a reassuring note because the free-tier server can take up
// to a minute to wake from sleep.
export default function Spinner({
  message = 'በመጫን ላይ…',
  slowMessage = 'አገልጋዩ ከእንቅልፉ እየነቃ ሊሆን ይችላል — እባክዎ ትንሽ ይጠብቁ…',
  slowAfterMs = 5000,
}: SpinnerProps) {
  const [slow, setSlow] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setSlow(true), slowAfterMs)
    return () => clearTimeout(timer)
  }, [slowAfterMs])

  return (
    <div role="status" aria-live="polite" className="py-24 flex flex-col items-center justify-center gap-4 text-center">
      <span
        aria-hidden="true"
        className="h-10 w-10 rounded-full border-4 border-gray-200 border-t-blue-600 dark:border-gray-700 dark:border-t-blue-400 motion-safe:animate-spin"
      />
      <span className="text-gray-500 dark:text-gray-400 text-lg">{message}</span>
      {slow && <span className="text-gray-400 dark:text-gray-500 text-sm max-w-xs">{slowMessage}</span>}
    </div>
  )
}
