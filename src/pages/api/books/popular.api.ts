import { NextApiRequest, NextApiResponse } from 'next'

import { PopularBookType } from '@/@types/book'
import { prisma } from '@/lib/prisma'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).end()
  }

  const results: PopularBookType[] = await prisma.$queryRaw<PopularBookType[]>`
    SELECT
      r."bookId",
      COALESCE(AVG(r.rate))::int AS "rateAvg",
      b.title,
      b.author,
      b."coverUrl"
    FROM "Rating" r
    JOIN "Book" b ON b.id = r."bookId"
    GROUP BY r."bookId", b.title, b.author, b."coverUrl"
    ORDER BY AVG(r.rate) DESC, RANDOM()
    LIMIT 3;
  `

  return res.status(200).json(results)
}
