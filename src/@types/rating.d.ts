import { Prisma } from '@prisma/client'

export type RatingWithBookAndUser = Prisma.RatingGetPayload<{
  include: {
    user: true
    book: true
  }
}>

export type PopularBook = {
  bookId: string
  coverUrl: string
  title: string
  author: string
  rateAvg: number
}
