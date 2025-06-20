import { useInfiniteQuery } from '@tanstack/react-query'
import { useEffect, useRef } from 'react'

import { RatingWithBookAndUser } from '@/@types/rating'
import { RatingCard } from '@/components/Card/Rating'
import { api } from '@/lib/axios'

import { HeadingCards } from '../HeadingCards'
import { Loader, LoaderContainer, MostRecentContainer } from './styles'

interface RatingPage {
  ratings: RatingWithBookAndUser[]
  hasMore: boolean
}

export function MostRecent() {
  const loadMoreLatestRatings = useRef<HTMLDivElement | null>(null)

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

  if (LatestRatings) {
    return (
      <MostRecentContainer>
        <HeadingCards title="Avaliações mais recentes" />

        {LatestRatings.pages.flatMap((page) => page.ratings.map((rating) => <RatingCard key={rating.id} rating={rating} />))}

        {hasNextPage && (
          <LoaderContainer ref={loadMoreLatestRatings}>
            <Loader />
          </LoaderContainer>
        )}
      </MostRecentContainer>
    )
  }
}

MostRecent.displayName = 'MostRecent'
