import { useInfiniteQuery } from '@tanstack/react-query'
import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'

import { BookWithReadedFlagAnbRatingType } from '@/@types/book'
import { BookCard } from '@/components/Card/Book/Book'
import { Loader } from '@/components/Loader'
import { api } from '@/lib/axios'

import { CategoriesFilter } from './components/CategoriesFilter'
import { ExploreContainer } from './styles'

interface ExploreProps {
  books: BookWithReadedFlagAnbRatingType[]
  hasMore: boolean
}

export default function Explore() {
  const [ref, inView] = useInView()

  const {
    data: ListOfBooks,
    isLoading: isLoadingListOfBooks,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery<ExploreProps>({
    queryKey: ['list-books'],
    initialPageParam: 1,
    queryFn: async ({ pageParam = 1 }) => {
      const res = await api.get(`/books/page/${pageParam}`)
      return res.data
    },
    getNextPageParam: (lastPage, allPages) => {
      if (lastPage.hasMore) return allPages.length + 1
      return undefined
    },
  })

  useEffect(() => {
    if (inView && hasNextPage && !isLoadingListOfBooks) {
      fetchNextPage()
    }
  }, [inView, hasNextPage, fetchNextPage, isLoadingListOfBooks])

  return (
    <ExploreContainer>
      <CategoriesFilter />
      {ListOfBooks && ListOfBooks.pages.flatMap((page) => page.books.map((book) => <BookCard key={book.id} book={book} />))}
      {hasNextPage && <Loader refProp={ref} />}
    </ExploreContainer>
  )
}
