import { Category } from '@prisma/client'
import { NextApiRequest, NextApiResponse } from 'next'

import { prisma } from '@/lib/prisma'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).end()
  }

  const results: Category[] = await prisma.$queryRaw<Category[]>`
    SELECT c.*
    FROM "Category" c
    JOIN "CategoryOnBook" cob ON c.id = cob."categoryId"
    GROUP BY DISTINCT(c.id)
    ORDER BY c."name";
  `

  return res.status(200).json(results)
}
