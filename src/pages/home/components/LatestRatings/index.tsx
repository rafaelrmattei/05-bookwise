import { useInfiniteQuery } from '@tanstack/react-query'
import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'

import { RatingWithBookAndUserType } from '@/@types/rating'
import { RatingCard } from '@/components/Card/Rating'
import { Loader } from '@/components/Loader/Spinner'
import { api } from '@/lib/axios'

import { HeadingCards } from '../HeadingCards'
import { LatestRatingsContainer, RefNextPage } from './styles'

interface LatestRatingsProps {
  ratings: RatingWithBookAndUserType[]
  hasMore: boolean
}

export function LatestRatings() {
  const [ref, inView] = useInView()

  const {
    data: LatestRatings,
    isLoading,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery<LatestRatingsProps>({
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
    if (inView && hasNextPage && !isLoading) {
      fetchNextPage()
    }
  }, [inView, hasNextPage, fetchNextPage, isLoading])

  if (LatestRatings) {
    return (
      <LatestRatingsContainer>
        <HeadingCards title="Avaliações mais recentes" />
        {LatestRatings.pages.flatMap((page) => page.ratings.map((rating) => <RatingCard key={rating.id} rating={rating} type="Public" />))}
        {hasNextPage && <RefNextPage ref={ref}>{isFetchingNextPage && <Loader />}</RefNextPage>}
      </LatestRatingsContainer>
    )
  }
}

LatestRatings.displayName = 'LatestRatings'
