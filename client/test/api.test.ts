import { describe, expect, it, vi } from 'vitest'
import { api, ApiError, getToken, setToken, toAmharicError, UNAUTHORIZED_EVENT } from '../src/api'
import { mockFetch } from './helpers'

describe('api request', () => {
  it('sends JSON and the stored token as a Bearer header', async () => {
    setToken('abc.def')
    const fetchMock = mockFetch({ 'POST /api/quiz/submit': { status: 201, body: { saved: true } } })

    const res = await api.post('/api/quiz/submit', { level: 'A1', score: 1, total: 3 })

    expect(res).toEqual({ saved: true })
    const headers = fetchMock.calls[0].init.headers as Record<string, string>
    expect(headers.Authorization).toBe('Bearer abc.def')
    expect(headers['Content-Type']).toBe('application/json')
    expect(fetchMock.bodiesFor('POST /api/quiz/submit')).toEqual([{ level: 'A1', score: 1, total: 3 }])
  })

  it('sends no Authorization header when logged out', async () => {
    const fetchMock = mockFetch({ 'GET /api/lessons': { body: { lessons: [] } } })
    await api.get('/api/lessons')
    const headers = fetchMock.calls[0].init.headers as Record<string, string>
    expect(headers).not.toHaveProperty('Authorization')
  })

  it('throws ApiError with the server message on a non-2xx response', async () => {
    mockFetch({ 'GET /api/lessons/9': { status: 404, body: { error: 'Lesson not found' } } })
    const err = await api.get('/api/lessons/9').catch((e: unknown) => e)
    expect(err).toBeInstanceOf(ApiError)
    expect(err).toMatchObject({ status: 404, serverMessage: 'Lesson not found' })
  })

  it('turns a network failure into ApiError status 0', async () => {
    vi.stubGlobal('fetch', vi.fn().mockRejectedValue(new TypeError('Failed to fetch')))
    const err = await api.get('/api/lessons').catch((e: unknown) => e)
    expect(err).toMatchObject({ status: 0, serverMessage: '' })
  })

  it('on 401 from a protected endpoint, clears the token and fires the unauthorized event', async () => {
    setToken('expired')
    mockFetch({ 'GET /api/progress/stats': { status: 401, body: { error: 'Invalid or expired token' } } })
    const onUnauthorized = vi.fn()
    window.addEventListener(UNAUTHORIZED_EVENT, onUnauthorized)

    await expect(api.get('/api/progress/stats')).rejects.toMatchObject({ status: 401 })

    window.removeEventListener(UNAUTHORIZED_EVENT, onUnauthorized)
    expect(getToken()).toBeNull()
    expect(onUnauthorized).toHaveBeenCalledTimes(1)
  })

  it('on 401 from login, keeps the event quiet (wrong password is not an expired session)', async () => {
    setToken('still-valid')
    mockFetch({ 'POST /api/auth/login': { status: 401, body: { error: 'Invalid email or password' } } })
    const onUnauthorized = vi.fn()
    window.addEventListener(UNAUTHORIZED_EVENT, onUnauthorized)

    await expect(api.post('/api/auth/login', {})).rejects.toMatchObject({ status: 401 })

    window.removeEventListener(UNAUTHORIZED_EVENT, onUnauthorized)
    expect(onUnauthorized).not.toHaveBeenCalled()
    expect(getToken()).toBe('still-valid')
  })

  it('with silent401, does not fire the unauthorized event', async () => {
    setToken('expired')
    mockFetch({ 'GET /api/progress/due': { status: 401, body: {} } })
    const onUnauthorized = vi.fn()
    window.addEventListener(UNAUTHORIZED_EVENT, onUnauthorized)

    await expect(api.get('/api/progress/due', { silent401: true })).rejects.toBeInstanceOf(ApiError)

    window.removeEventListener(UNAUTHORIZED_EVENT, onUnauthorized)
    expect(onUnauthorized).not.toHaveBeenCalled()
  })
})

describe('toAmharicError', () => {
  it.each([
    [new ApiError(0, ''), 'ከአገልጋዩ ጋር መገናኘት አልተቻለም። የኢንተርኔት ግንኙነትዎን ያረጋግጡ።'],
    [new ApiError(429, 'Too many attempts'), 'በጣም ብዙ ሙከራዎች። እባክዎ ከጥቂት ደቂቃዎች በኋላ እንደገና ይሞክሩ።'],
    [new ApiError(500, 'secret detail'), 'የአገልግሎት ችግር አጋጥሟል። እባክዎ ቆይተው እንደገና ይሞክሩ።'],
    [new ApiError(503, ''), 'የአገልግሎት ችግር አጋጥሟል። እባክዎ ቆይተው እንደገና ይሞክሩ።'],
    [new ApiError(401, ''), 'ኢሜይል ወይም የይለፍ ቃል ትክክል አይደለም፣ ወይም ክፍለ-ጊዜዎ አብቅቷል። እባክዎ ይግቡ።'],
    // The server's English 401 text is replaced, not shown.
    [new ApiError(401, 'Invalid email or password'), 'ኢሜይል ወይም የይለፍ ቃል ትክክል አይደለም፣ ወይም ክፍለ-ጊዜዎ አብቅቷል። እባክዎ ይግቡ።'],
    [new ApiError(400, 'Password must be at least 8 characters'), 'Password must be at least 8 characters'],
    [new ApiError(404, ''), 'ስህተት ተፈጥሯል። እባክዎ እንደገና ይሞክሩ።'],
    [new Error('boom'), 'ስህተት ተፈጥሯል። እባክዎ እንደገና ይሞክሩ።'],
  ])('maps %o to the right message', (err, message) => {
    expect(toAmharicError(err)).toBe(message)
  })

  it('never leaks a 5xx server message to the user', () => {
    expect(toAmharicError(new ApiError(500, 'SQLITE_ERROR: no such table'))).not.toContain('SQLITE')
  })
})
