import type { NextApiRequest, NextApiResponse } from 'next'

export function checkOrigin(req: NextApiRequest, res: NextApiResponse): boolean {
  const origin = req.headers.origin || ''
  const allowedOrigin = process.env.ALLOWED_ORIGIN || ''

  if (!origin.includes(allowedOrigin)) {
    res.status(403).json({ error: 'Forbidden origin' })
    return false
  }

  return true
}
