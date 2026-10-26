interface ErrorMessageProps {
  /** Amharic message describing what went wrong. */
  message?: string
  /** When provided, a retry button is shown. */
  onRetry?: () => void
}

// Reusable error panel with an optional retry button. role="alert" so screen readers
// announce it immediately.
export default function ErrorMessage({
  message = 'ስህተት ተፈጥሯል። እባክዎ እንደገና ይሞክሩ።',
  onRetry,
}: ErrorMessageProps) {
  return (
    <div
      role="alert"
      className="max-w-md mx-auto my-12 bg-red-50 dark:bg-red-950/40 border-2 border-red-200 dark:border-red-900 handwritten-border p-6 text-center"
    >
      <div className="text-4xl mb-3" aria-hidden="true">
        ⚠️
      </div>
      <p className="text-red-700 dark:text-red-300 font-semibold mb-5">{message}</p>
      {onRetry && (
        <button
          onClick={onRetry}
          className="bg-blue-700 text-white font-bold px-6 py-2.5 rounded-xl hover:bg-blue-800 transition cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-paper dark:focus-visible:ring-offset-night"
        >
          እንደገና ይሞክሩ
        </button>
      )}
    </div>
  )
}
