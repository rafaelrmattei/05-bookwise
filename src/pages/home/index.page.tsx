import { useQueries } from '@tanstack/react-query'
import Link from 'next/link'
import { useSession } from 'next-auth/react'
import { CaretRight } from 'phosphor-react'

import { PopularBook, RatingWithBookAndUser } from '@/@types/rating'
import { BookCard } from '@/components/Card/Book'
import { RatingCard } from '@/components/Card/Rating'
import { Layout } from '@/components/Layout'
import { api } from '@/lib/axios'

import { HeadingCards, HomeContainer, LastReading, MostRecent, PopularBooks, Ratings } from './styles'

export default function Home() {
  const { data: session } = useSession()

  const [LastReadingBySessionUserQuery, LatestRatingsQuery, PopularBooksByRatingQuery] = useQueries({
    queries: [
      {
        queryKey: ['last-reading-session-user'],
        queryFn: async () => api.get<RatingWithBookAndUser>('/ratings/last').then((res) => res.data),
      },
      {
        queryKey: ['latest-ratings'],
        queryFn: async () => api.get<RatingWithBookAndUser[]>('/ratings').then((res) => res.data),
      },
      {
        queryKey: ['popular-books-by-rating'],
        queryFn: async () => api.get<PopularBook[]>('/ratings/popular').then((res) => res.data),
      },
    ],
  })

  const { data: LastReadingBySessionUser } = LastReadingBySessionUserQuery
  const { data: LatestRatings } = LatestRatingsQuery
  const { data: PopularBooksByRating } = PopularBooksByRatingQuery

  return (
    <Layout>
      <HomeContainer>
        <Ratings>
          {LastReadingBySessionUser && session && (
            <LastReading>
              <HeadingCards>
                <h2>Sua última leitura</h2>
                <Link href="profile">
                  Ver todas <CaretRight size={16} />
                </Link>
              </HeadingCards>

              <RatingCard rating={LastReadingBySessionUser} active />
            </LastReading>
          )}

          {LatestRatings && (
            <MostRecent>
              <HeadingCards>
                <h2>Avaliações mais recentes</h2>
              </HeadingCards>
              {LatestRatings.map((rating) => (
                <RatingCard key={rating.id} rating={rating} />
              ))}
            </MostRecent>
          )}
        </Ratings>

        {PopularBooksByRating && (
          <Ratings>
            <PopularBooks>
              <HeadingCards>
                <h2>Livros populares</h2>
                <Link href="explore">
                  Ver todas <CaretRight size={16} />
                </Link>
              </HeadingCards>

              {PopularBooksByRating.map((popularBook) => (
                <BookCard key={popularBook.bookId} book={popularBook} />
              ))}
            </PopularBooks>
          </Ratings>
        )}
      </HomeContainer>
    </Layout>
  )
}
