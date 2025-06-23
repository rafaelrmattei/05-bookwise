import { useInfiniteQuery } from '@tanstack/react-query'
import { useEffect, useRef } from 'react'

import { RatingWithBookAndUserType } from '@/@types/rating'
import { RatingCard } from '@/components/Card/Rating'
import { api } from '@/lib/axios'

import { HeadingCards } from '../HeadingCards'
import { LatestRatingsContainer, Loader, LoaderContainer } from './styles'

interface RatingPage {
  ratings: RatingWithBookAndUserType[]
  hasMore: boolean
}

export function LatestRatings() {
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
      const res = await api.get(`/ratings/page/${pageParam}`)
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
      <LatestRatingsContainer>
        <HeadingCards title="Avaliações mais recentes" />

        {LatestRatings.pages.flatMap((page) => page.ratings.map((rating) => <RatingCard key={rating.id} rating={rating} type="Public" />))}

        {hasNextPage && (
          <LoaderContainer ref={loadMoreLatestRatings}>
            <Loader />
          </LoaderContainer>
        )}
      </LatestRatingsContainer>
    )
  }
}

LatestRatings.displayName = 'LatestRatings'
