import type { NextApiRequest, NextApiResponse } from 'next'
import { getServerSession } from 'next-auth'

import { prisma } from '@/lib/prisma'

import { authOptions } from '../auth/[...nextauth].api'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).end()
  }

  const session = await getServerSession(req, res, authOptions)

  if (!session || !session.user) {
    return res.status(401).json({ error: 'Unauthorized' })
  }

  const userId = session.user.id

  const result = await prisma.rating.findFirst({
    orderBy: { createdAt: 'desc' },
    include: { user: true, book: true },
    where: {
      userId,
    },
  })

  return res.status(200).json(result)
}
