import { NextApiRequest, NextApiResponse } from 'next'
import { getServerSession } from 'next-auth'

import { BookWithReadedFlagAnbRatingType } from '@/@types/book'
import { prisma } from '@/lib/prisma'
import { authOptions } from '@/pages/api/auth/[...nextauth].api'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).end()
  }

  const session = await getServerSession(req, res, authOptions)
  const page = Number(req.query.page) || 1
  const limit = 12
  const skip = (page - 1) * limit

  const results: BookWithReadedFlagAnbRatingType[] = await prisma.$queryRaw<BookWithReadedFlagAnbRatingType[]>`
    SELECT
      b.*,
      COALESCE(AVG(r.rate), 0) AS "rateAvg",
      EXISTS (
        SELECT 1 FROM "Rating" r2
        WHERE r2."bookId" = b.id
        AND r2."userId" = ${session?.user?.id ?? ''}
      ) AS readed
    FROM "Book" b
    LEFT JOIN "Rating" r ON r."bookId" = b.id
    GROUP BY b.id, b.title, b.author, b."coverUrl"
    ORDER BY b."createdAt" DESC
    LIMIT ${limit} OFFSET ${skip};
  `
  const total = await prisma.book.count()

  const hasMore = page * limit < total

  return res.status(200).json({
    books: results,
    hasMore,
  })
}
