import jwt from 'jsonwebtoken'
import type { Request, Response, NextFunction } from 'express'

const DEV_SECRET = 'dev-secret-change-in-production'
const MIN_SECRET_LENGTH = 32

/**
 * Resolves the JWT secret for the current environment.
 * In production a real `JWT_SECRET` of at least 32 chars is mandatory - the dev
 * fallback is never used, so a misconfigured deploy fails fast instead of signing
 * tokens with a public, guessable key. Exported so it can be unit-tested without
 * starting the server.
 */
export function resolveJwtSecret(env: NodeJS.ProcessEnv = process.env): string {
  const secret = env.JWT_SECRET
  if (env.NODE_ENV === 'production') {
    if (!secret || secret.length < MIN_SECRET_LENGTH) {
      throw new Error(
        `JWT_SECRET must be set to at least ${MIN_SECRET_LENGTH} characters in production`,
      )
    }
    return secret
  }
  return secret || DEV_SECRET
}

export const JWT_SECRET = resolveJwtSecret()
const TOKEN_TTL = '7d'

export interface AuthPayload {
  userId: number
  email: string
}

export interface AuthedRequest extends Request {
  user?: AuthPayload
}

export function signToken(payload: AuthPayload): string {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: TOKEN_TTL })
}

export function requireAuth(req: AuthedRequest, res: Response, next: NextFunction): void {
  const header = req.headers.authorization
  if (!header?.startsWith('Bearer ')) {
    res.status(401).json({ error: 'Authentication required' })
    return
  }
  try {
    const decoded = jwt.verify(header.slice(7), JWT_SECRET) as AuthPayload
    req.user = { userId: decoded.userId, email: decoded.email }
    next()
  } catch {
    res.status(401).json({ error: 'Invalid or expired token' })
  }
}

/** Attaches user if a valid token is present, but never rejects. */
export function optionalAuth(req: AuthedRequest, _res: Response, next: NextFunction): void {
  const header = req.headers.authorization
  if (header?.startsWith('Bearer ')) {
    try {
      const decoded = jwt.verify(header.slice(7), JWT_SECRET) as AuthPayload
      req.user = { userId: decoded.userId, email: decoded.email }
    } catch {
      // ignore invalid tokens on optional routes
    }
  }
  next()
}
