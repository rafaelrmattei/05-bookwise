import { Category } from '@prisma/client'
import { useInfiniteQuery, useQuery } from '@tanstack/react-query'
import { NextSeo } from 'next-seo'
import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'

import { BookWithReadedFlagAnbRatingType } from '@/@types/book'
import { BookCard } from '@/components/Card/Book/Book'
import { SearchInput } from '@/components/Form/Inputs/Search'
import { Loader } from '@/components/Loader/Spinner'
import { LoaderText } from '@/components/Loader/Text'
import { api } from '@/lib/axios'

import { CategoriesFilter, ExploreContainer, Filter, RefNextPage } from './styles'

interface ExploreProps {
  books: BookWithReadedFlagAnbRatingType[]
  hasMore: boolean
}

export default function Explore() {
  const [ref, inView] = useInView()
  const [search, setSearch] = useState('')
  const [categoryIds, setCategoryIds] = useState<string[]>([])
  const [hasInteracted, setHasInteracted] = useState(false)

  const { data: ListOfCategories } = useQuery({
    queryKey: ['list-categories'],
    queryFn: async () => await api.get<Category[]>('/categories').then((res) => res.data),
    staleTime: 1000 * 60 * 5,
  })

  const {
    data: ListOfBooks,
    isLoading: isLoadingListOfBooks,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery<ExploreProps>({
    queryKey: ['list-books', search, categoryIds],
    initialPageParam: 1,
    queryFn: async ({ pageParam = 1 }) => {
      const res = await api.get(`/books/page/${pageParam}`, {
        params: {
          search,
          categoryIds: categoryIds.join(','),
        },
      })

      setHasInteracted(true)
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

  function handleSearch(e: React.ChangeEvent<HTMLInputElement>) {
    setSearch(e.target.value)
  }

  function handleToggleCategory(category: string, pressed: boolean) {
    if (pressed) {
      setCategoryIds((state) => [...state, category])
    } else {
      setCategoryIds((state) => state.filter((cat) => cat !== category))
    }
  }

  return (
    <>
      <NextSeo
        title="Explorar"
        description="Explore a nossa seção de livros e encontre o perfeito para você"
        canonical="https://05-bookwise.vercel.app/explore"
      />

      <ExploreContainer>
        <SearchInput placeholder="Buscar livro avaliado" value={search} onChange={handleSearch} absolute />

        {ListOfCategories && (
          <CategoriesFilter>
            {ListOfCategories.map((category) => (
              <Filter key={category.id} onPressedChange={(pressed) => handleToggleCategory(category.id, pressed)}>
                {category.name}
              </Filter>
            ))}
          </CategoriesFilter>
        )}

        {hasInteracted && isLoadingListOfBooks && <LoaderText message="Buscando livros..." />}

        {ListOfBooks &&
          ListOfBooks.pages.flatMap((page) =>
            page.books
              .filter((book) => {
                const query = search.toLowerCase()
                return book.title.toLowerCase().includes(query) || book.author.toLowerCase().includes(query)
              })
              .map((book) => <BookCard key={book.id} book={book} />)
          )}

        {hasNextPage && <RefNextPage ref={ref}>{isFetchingNextPage && <Loader />}</RefNextPage>}
      </ExploreContainer>
    </>
  )
}
