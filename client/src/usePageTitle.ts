import { useEffect } from 'react'

const SUFFIX = 'ጀ-አ ቋንቋ ማዕከል'

// Sets document.title per page (and restores nothing - the next page sets its own).
export function usePageTitle(title: string): void {
  useEffect(() => {
    document.title = title ? `${title} | ${SUFFIX}` : SUFFIX
  }, [title])
}
