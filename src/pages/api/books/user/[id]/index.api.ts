import type { NextApiRequest, NextApiResponse } from 'next'

import { BookStatisticsType } from '@/@types/book'
import { prisma } from '@/lib/prisma'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).end()
  }

  const idParam = req.query.id
  const id = Array.isArray(idParam) ? idParam[0] : idParam

  const user = await prisma.user.findUnique({
    where: { id },
  })

  if (!user) {
    return res.status(404).json({ error: 'User not found' })
  }

  const [statistics] = await prisma.$queryRaw<BookStatisticsType[]>`
    SELECT
      SUM(b."totalPages")::int AS "totalPagesReaded",
      COUNT(b.id)::int AS "totalBooksReaded",
      COUNT(DISTINCT(b."author"))::int AS "totalAuthorsReaded",
      (
        SELECT
          c2.name
        FROM "Book" b2
        JOIN "CategoryOnBook" cob2 ON cob2."bookId" = b2.id
        JOIN "Category" c2 ON c2.id = cob2."categoryId"
        JOIN "Rating" r2 ON r2."bookId" = b2.id AND r2."userId" = ${id}
        GROUP BY c2.name
        ORDER BY COUNT(c2.name) desc
        LIMIT 1
      ) AS "mostReadedCategory"
    FROM "Rating" r
    JOIN "Book" b ON b.id = r."bookId" AND r."userId" = ${id}
    JOIN "User" u ON u.id = r."userId";
  `

  return res.status(200).json(statistics)
}
