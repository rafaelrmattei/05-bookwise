import { User } from '@prisma/client'
import { useQuery } from '@tanstack/react-query'
import { GetServerSideProps } from 'next'
import { getServerSession } from 'next-auth'
import { useMemo, useState } from 'react'

import { BookStatisticsType } from '@/@types/book'
import { RatingWithBookAndUserType } from '@/@types/rating'
import { RatingCard } from '@/components/Card/Rating'
import { SearchInput } from '@/components/Form/Inputs/Search'
import { api } from '@/lib/axios'

import { authOptions } from '../api/auth/[...nextauth].api'
import { Statistics } from './components/statistics'
import { UserDetails } from './components/user'
import { Analytics, Divider, NotFound, ProfileContainer, Ratings } from './styles'

interface ProfileProps {
  user: User
  statistics: BookStatisticsType
}

export default function Profile({ user, statistics }: ProfileProps) {
  const [search, setSearch] = useState('')

  const { data: RatingsByUser } = useQuery({
    queryKey: ['ratings-by-user', user.id],
    queryFn: async () => await api.get<RatingWithBookAndUserType[]>(`/ratings/${user.id}`).then((res) => res.data),
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
    <ProfileContainer>
      <Ratings>
        <SearchInput placeholder="Buscar livro avaliado" value={search} onChange={handleSearch} full />
        {filteredRatings.length > 0 ? (
          filteredRatings.map((rating) => <RatingCard key={rating.id} rating={rating} type="User" />)
        ) : (
          <NotFound>Nenhum resultado encontrado.</NotFound>
        )}
      </Ratings>

      <Analytics>
        <UserDetails user={user} />
        <Divider />
        <Statistics statistics={statistics} />
      </Analytics>
    </ProfileContainer>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getServerSession(context.req, context.res, authOptions)

  const paramId = context.params?.id
  const clientId = paramId ? paramId : session && session.user && session.user.id ? session.user.id : undefined

  if (!clientId) {
    return {
      redirect: {
        destination: '/404',
        permanent: false,
      },
    }
  }

  try {
    const { data: statistics } = await api.get<BookStatisticsType>(`/books/user/${clientId}`)
    const { data: user } = await api.get<User>(`/users/${clientId}`)

    return {
      props: {
        user,
        statistics,
      },
    }
  } catch {
    return {
      redirect: {
        destination: '/404',
        permanent: false,
      },
    }
  }
}
