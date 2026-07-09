import jwt from 'jsonwebtoken'
import type { Request, Response, NextFunction } from 'express'

export const JWT_SECRET = process.env.JWT_SECRET || 'dev-secret-change-in-production'
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
