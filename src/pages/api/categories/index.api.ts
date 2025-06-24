import { NextApiRequest, NextApiResponse } from 'next'

import { checkOrigin } from '@/lib/middleware/check-origin'
import { prisma } from '@/lib/prisma'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (!checkOrigin(req, res)) return

  if (req.method !== 'GET') {
    return res.status(405).end()
  }

  const results = prisma.category.findMany()

  return res.status(200).json(results)
}
