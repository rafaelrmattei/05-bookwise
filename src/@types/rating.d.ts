import { Prisma } from '@prisma/client'

export type RatingWithBookAndUserType = Prisma.RatingGetPayload<{
  include: {
    user: true
    book: true
  }
}>
