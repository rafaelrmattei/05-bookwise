import { useQuery } from '@tanstack/react-query'

import { PopularBookType } from '@/@types/book'
import { PopularBookCard, PopularBookCardSkeleton } from '@/components/Card/Book/Popular'
import { api } from '@/lib/axios'

import { HeadingCards } from '../HeadingCards'
import { PopularBooksContainer } from './styles'

export function PopularBooks() {
  const { data: PopularBooksByRating, isFetching } = useQuery({
    queryKey: ['popular-books-by-rating'],
    queryFn: async () => api.get<PopularBookType[]>('/books/popular').then((res) => res.data),
    staleTime: 1000 * 60,
  })

  return (
    <PopularBooksContainer>
      <HeadingCards title="Livros populares" link={{ title: 'Ver todos', href: 'explore' }} />
      {isFetching ? (
        <>
          <PopularBookCardSkeleton />
          <PopularBookCardSkeleton />
          <PopularBookCardSkeleton />
        </>
      ) : (
        PopularBooksByRating?.map((popularBook) => <PopularBookCard key={popularBook.bookId} book={popularBook} />)
      )}
    </PopularBooksContainer>
  )
}

PopularBooks.displayName = 'PopularBooks'
