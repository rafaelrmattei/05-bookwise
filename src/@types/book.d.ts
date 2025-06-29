import { Book } from '@prisma/client'

export type BookStatisticsType = {
  totalPagesReaded: number
  totalBooksReaded: number
  totalAuthorsReaded: number
  mostReadedCategory: string
}

export type PopularBookType = {
  bookId: string
  coverUrl: string
  title: string
  author: string
  rateAvg: number
}

export type BookWithReadedFlagAnbRatingType = Book & {
  readed: boolean
  rateAvg: number
}
