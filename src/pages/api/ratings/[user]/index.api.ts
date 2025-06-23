import type { NextApiRequest, NextApiResponse } from 'next'

import { prisma } from '@/lib/prisma'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).end()
  }

  const idParam = req.query.user
  const id = Array.isArray(idParam) ? idParam[0] : idParam

  const user = await prisma.user.findUnique({
    where: { id },
  })

  if (!user) {
    return res.status(404).json({ error: 'User not found' })
  }

  const results = await prisma.rating.findMany({
    orderBy: { createdAt: 'desc' },
    include: { user: true, book: true },
    where: {
      userId: id,
    },
  })

  return res.status(200).json(results)
}
