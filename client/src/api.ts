const TOKEN_KEY = 'ga_token'

/** Fired when a request is rejected with 401 on a non-auth endpoint (expired/invalid session). */
export const UNAUTHORIZED_EVENT = 'auth:unauthorized'

export function getToken(): string | null {
  return localStorage.getItem(TOKEN_KEY)
}

export function setToken(token: string | null): void {
  if (token) localStorage.setItem(TOKEN_KEY, token)
  else localStorage.removeItem(TOKEN_KEY)
}

export class ApiError extends Error {
  constructor(
    public status: number,
    /** Raw message from the server body, if any (status 0 means the request never reached the server). */
    public serverMessage: string,
  ) {
    super(serverMessage || `Request failed (${status})`)
    this.name = 'ApiError'
  }
}

// Single place that turns any thrown error into a user-facing Amharic message.
// 429 / 401 / 5xx / network get a fixed Amharic line (the server's text for these is English);
// 400 and 404 surface the server's own message, which is the user-relevant Amharic one
// (e.g. the password rule or "not found").
export function toAmharicError(err: unknown): string {
  if (err instanceof ApiError) {
    if (err.status === 429) return 'በጣም ብዙ ሙከራዎች። እባክዎ ከጥቂት ደቂቃዎች በኋላ እንደገና ይሞክሩ።'
    if (err.status === 0) return 'ከአገልጋዩ ጋር መገናኘት አልተቻለም። የኢንተርኔት ግንኙነትዎን ያረጋግጡ።'
    if (err.status >= 500) return 'የአገልግሎት ችግር አጋጥሟል። እባክዎ ቆይተው እንደገና ይሞክሩ።'
    if (err.status === 401) return 'ኢሜይል ወይም የይለፍ ቃል ትክክል አይደለም፣ ወይም ክፍለ-ጊዜዎ አብቅቷል። እባክዎ ይግቡ።'
    if (err.serverMessage) return err.serverMessage
  }
  return 'ስህተት ተፈጥሯል። እባክዎ እንደገና ይሞክሩ።'
}

interface RequestOptions {
  /** Skip the global unauthorized event on 401 (used by the silent session probe). */
  silent401?: boolean
}

async function request<T>(
  path: string,
  init: RequestInit = {},
  opts: RequestOptions = {},
): Promise<T> {
  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
    ...(init.headers as Record<string, string>),
  }
  const token = getToken()
  if (token) headers.Authorization = `Bearer ${token}`

  let res: Response
  try {
    res = await fetch(path, { ...init, headers })
  } catch {
    // Network failure, server unreachable, CORS, etc. - never reached the server.
    throw new ApiError(0, '')
  }

  const body = await res.json().catch(() => ({}))
  if (!res.ok) {
    const serverMessage = (body as { error?: string }).error ?? ''
    if (res.status === 401 && !opts.silent401 && !path.startsWith('/api/auth/')) {
      // Expired/invalid token on a protected endpoint: drop it and let the app send the
      // user to login. Auth endpoints (login/register) handle 401 inline as bad credentials.
      setToken(null)
      window.dispatchEvent(new Event(UNAUTHORIZED_EVENT))
    }
    throw new ApiError(res.status, serverMessage)
  }
  return body as T
}

export const api = {
  get: <T>(path: string, opts?: RequestOptions) => request<T>(path, {}, opts),
  post: <T>(path: string, data: unknown, opts?: RequestOptions) =>
    request<T>(path, { method: 'POST', body: JSON.stringify(data) }, opts),
}
