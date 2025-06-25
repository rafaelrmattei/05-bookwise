import { Prisma } from '@prisma/client'
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

  const search = req.query.search?.toString().toLowerCase() ?? ''

  const categoryIds = req.query.categoryIds
    ? req.query.categoryIds
        .toString()
        .split(',')
        .map((id) => id.trim())
        .filter(Boolean)
    : []

  const categoryFilter = categoryIds.length ? Prisma.sql`AND cob."categoryId" IN (${Prisma.join(categoryIds)})` : Prisma.sql``

  const results: BookWithReadedFlagAnbRatingType[] = await prisma.$queryRaw<BookWithReadedFlagAnbRatingType[]>`
    SELECT
      DISTINCT(b.*),
      COALESCE(AVG(r.rate), 0) AS "rateAvg",
      EXISTS (
        SELECT 1 FROM "Rating" r2
        WHERE r2."bookId" = b.id
        AND r2."userId" = ${session?.user?.id ?? ''}
      ) AS readed
    FROM "Book" b
    LEFT JOIN "Rating" r ON r."bookId" = b.id
    LEFT JOIN "CategoryOnBook" cob ON cob."bookId" = b.id
    WHERE (
      LOWER(b.title) LIKE ${'%' + search + '%'}
      OR LOWER(b.author) LIKE ${'%' + search + '%'}
    )
    ${categoryFilter}
    GROUP BY b.id
    ORDER BY b."createdAt" DESC
    LIMIT ${limit} OFFSET ${skip};
  `

  const total: Array<{ totalOfBooks: number }> = await prisma.$queryRaw<Array<{ totalOfBooks: number }>>`
    SELECT COUNT(DISTINCT b.id) as "totalOfBooks"
    FROM "Book" b
    LEFT JOIN "CategoryOnBook" cob ON cob."bookId" = b.id
    WHERE (
      LOWER(b.title) LIKE ${'%' + search + '%'}
      OR LOWER(b.author) LIKE ${'%' + search + '%'}
    )
    ${categoryFilter};
  `

  const hasMore = page * limit < (total[0]?.totalOfBooks ?? 0)

  return res.status(200).json({
    books: results,
    hasMore,
  })
}
