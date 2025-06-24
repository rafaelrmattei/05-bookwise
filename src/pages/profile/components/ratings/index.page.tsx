import { useQuery } from '@tanstack/react-query'
import { useMemo, useState } from 'react'

import { RatingWithBookAndUserType } from '@/@types/rating'
import { RatingCard } from '@/components/Card/Rating'
import { SearchInput } from '@/components/Form/Inputs/Search'
import { api } from '@/lib/axios'

import { NotFound, RatingsContainer } from './styles'

interface RatingsProps {
  userId: string
}

export function Ratings({ userId }: RatingsProps) {
  const [search, setSearch] = useState('')

  const { data: RatingsByUser, isLoading } = useQuery({
    queryKey: ['ratings-by-user', userId],
    queryFn: async () => await api.get<RatingWithBookAndUserType[]>(`/ratings/${userId}`).then((res) => res.data),
    staleTime: 1000 * 60 * 1,
  })

  const filteredRatings = useMemo(() => {
    if (!RatingsByUser) return []
    return RatingsByUser.filter((rating) => {
      const query = search.toLowerCase()
      return (
        rating.book.title.toLowerCase().includes(query) ||
        rating.book.author.toLowerCase().includes(query) ||
        rating.description.toLowerCase().includes(query)
      )
    })
  }, [RatingsByUser, search])

  function handleSearch(e: React.ChangeEvent<HTMLInputElement>) {
    setSearch(e.target.value)
  }

  return (
    <RatingsContainer>
      <SearchInput placeholder="Buscar livro avaliado" value={search} onChange={handleSearch} full />
      {isLoading ? (
        <NotFound>Carregando avaliações...</NotFound>
      ) : filteredRatings.length > 0 ? (
        filteredRatings.map((rating) => <RatingCard key={rating.id} rating={rating} type="User" />)
      ) : (
        <NotFound>Nenhum resultado encontrado.</NotFound>
      )}
    </RatingsContainer>
  )
}
