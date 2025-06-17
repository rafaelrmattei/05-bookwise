import type { NextApiRequest, NextApiResponse } from 'next'
import { getServerSession } from 'next-auth'

import { prisma } from '@/lib/prisma'

import { authOptions } from '../auth/[...nextauth].api'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).end()
  }

  const session = await getServerSession(req, res, authOptions)

  const results = await prisma.rating.findMany({
    orderBy: { createdAt: 'desc' },
    include: { user: true, book: true },
    where: session?.user?.id ? { userId: { not: session.user.id } } : undefined,
  })

  return res.status(200).json(results)
}
