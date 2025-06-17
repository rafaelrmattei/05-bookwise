import { NextApiRequest, NextApiResponse } from 'next'

import { PopularBook } from '@/@types/rating'
import { prisma } from '@/lib/prisma'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).end()
  }

  const result: PopularBook[] = await prisma.$queryRaw<PopularBook[]>`
    SELECT
      r."bookId",
      AVG(r.rate) AS "rateAvg",
      b.title,
      b.author,
      b."coverUrl"
    FROM "Rating" r
    JOIN "Book" b ON b.id = r."bookId"
    GROUP BY r."bookId", b.title, b.author, b."coverUrl"
    ORDER BY AVG(r.rate) DESC
    LIMIT 3;
  `

  const serialized = result.map((item) => ({
    ...item,
    rateAvg: Number(item.rateAvg),
  }))

  return res.status(200).json(serialized)
}
