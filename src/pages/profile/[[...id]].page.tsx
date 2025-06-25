import { User } from '@prisma/client'
import { GetServerSideProps } from 'next'
import { getServerSession } from 'next-auth'
import { NextSeo } from 'next-seo'

import { BookStatisticsType } from '@/@types/book'
import { api } from '@/lib/axios'

import { authOptions } from '../api/auth/[...nextauth].api'
import { Ratings } from './components/ratings'
import { Statistics } from './components/statistics'
import { UserDetails } from './components/user'
import { Analytics, Divider, ProfileContainer } from './styles'

interface ProfileProps {
  user: User
  statistics: BookStatisticsType
}

export default function Profile({ user, statistics }: ProfileProps) {
  return (
    <>
      <NextSeo
        title="Profile"
        description={`Perfil de ${user.name} com estatísticas de leitura.`}
        canonical={`https://05-bookwise.vercel.app/profile/${user.id}`}
      />

      <ProfileContainer>
        <Ratings userId={user.id} />

        <Analytics>
          <UserDetails user={user} />
          <Divider />
          <Statistics statistics={statistics} />
        </Analytics>
      </ProfileContainer>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getServerSession(context.req, context.res, authOptions)

  const paramId = context.params?.id
  const userId = paramId ? paramId : session && session.user && session.user.id ? session.user.id : undefined

  if (!userId) {
    return {
      notFound: true,
    }
  }

  try {
    const { data: user } = await api.get<User>(`/users/${userId}`)
    const { data: statistics } = await api.get<BookStatisticsType>(`/books/user/${userId}`)

    return {
      props: {
        user,
        statistics,
      },
    }
  } catch {
    return {
      notFound: true,
    }
  }
}
