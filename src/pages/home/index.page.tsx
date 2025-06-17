import { useInfiniteQuery, useQueries } from '@tanstack/react-query'
import Link from 'next/link'
import { useSession } from 'next-auth/react'
import { CaretRight } from 'phosphor-react'
import { useEffect, useRef } from 'react'

import { PopularBook, RatingWithBookAndUser } from '@/@types/rating'
import { BookCard } from '@/components/Card/Book'
import { RatingCard } from '@/components/Card/Rating'
import { Layout } from '@/components/Layout'
import { api } from '@/lib/axios'

import { HeadingCards, HomeContainer, LastReading, Loader, LoaderContainer, MostRecent, PopularBooks, Ratings } from './styles'

interface RatingPage {
  ratings: RatingWithBookAndUser[]
  hasMore: boolean
}

export default function Home() {
  const { data: session } = useSession()
  const loadMoreLatestRatings = useRef<HTMLDivElement | null>(null)

  const [LastReadingBySessionUserQuery, PopularBooksByRatingQuery] = useQueries({
    queries: [
      {
        queryKey: ['last-reading-session-user'],
        queryFn: async () => api.get<RatingWithBookAndUser>('/ratings/last').then((res) => res.data),
      },
      {
        queryKey: ['popular-books-by-rating'],
        queryFn: async () => api.get<PopularBook[]>('/ratings/popular').then((res) => res.data),
      },
    ],
  })

  const { data: LastReadingBySessionUser } = LastReadingBySessionUserQuery
  const { data: PopularBooksByRating } = PopularBooksByRatingQuery

  const {
    data: LatestRatings,
    isLoading: isLoadingLatestRatings,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery<RatingPage>({
    queryKey: ['latest-ratings'],
    initialPageParam: 1,
    queryFn: async ({ pageParam = 1 }) => {
      const res = await api.get(`/ratings/${pageParam}`)
      return res.data
    },
    getNextPageParam: (lastPage, allPages) => {
      if (lastPage.hasMore) return allPages.length + 1
      return undefined
    },
  })

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !isLoadingLatestRatings && hasNextPage) {
        fetchNextPage()
      }
    })

    const el = loadMoreLatestRatings.current
    if (el) observer.observe(el)

    return () => {
      if (el) observer.unobserve(el)
    }
  }, [fetchNextPage, hasNextPage, isLoadingLatestRatings])

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

              {LatestRatings.pages.flatMap((page) => page.ratings.map((rating) => <RatingCard key={rating.id} rating={rating} />))}

              {hasNextPage && (
                <LoaderContainer ref={loadMoreLatestRatings}>
                  <Loader />
                </LoaderContainer>
              )}
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
