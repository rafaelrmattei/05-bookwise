import { GetServerSideProps } from 'next'
import { getServerSession } from 'next-auth'
import { BookmarkSimple, BookOpen, Books, UserList } from 'phosphor-react'

import { UserWithStatistics } from '@/@types/user'
import { Avatar } from '@/components/Avatar'
import { SearchInput } from '@/components/Form/Inputs/Search'
import { api } from '@/lib/axios'

import { authOptions } from '../api/auth/[...nextauth].api'
import { Analytics, Divider, ProfileContainer, Profiler, Ratings, Statistic, Statistics, UserDetails } from './styles'

interface ProfileProps {
  ratings: string
  profile: UserWithStatistics
}

export default function Profile({ ratings, profile }: ProfileProps) {
  console.log(ratings)

  return (
    <ProfileContainer>
      <Ratings>
        <SearchInput placeholder="Buscar livro avaliado" full />
      </Ratings>

      <Analytics>
        <Profiler>
          <Avatar image={profile.user.image} name={profile.user.name} size="lg" />
          <UserDetails>
            <strong>{profile.user.name}</strong>
            <span>Membro desde {new Date(profile.user.createdAt).getFullYear()}</span>
          </UserDetails>
        </Profiler>

        <Divider />

        {profile.statistics.totalPagesReaded && (
          <Statistics>
            <Statistic>
              <BookOpen size={32} />
              <div>
                <strong>{profile.statistics.totalPagesReaded}</strong>
                <span>Páginas lidas</span>
              </div>
            </Statistic>
            <Statistic>
              <Books size={32} />
              <div>
                <strong>{profile.statistics.totalBooksReaded}</strong>
                <span>Livros avaliados</span>
              </div>
            </Statistic>
            <Statistic>
              <UserList size={32} />
              <div>
                <strong>{profile.statistics.totalAuthorsReaded}</strong>
                <span>Autores lidos</span>
              </div>
            </Statistic>
            <Statistic>
              <BookmarkSimple size={32} />
              <div>
                <strong>{profile.statistics.mostReadedCategory}</strong>
                <span>Categoria mais lida</span>
              </div>
            </Statistic>
          </Statistics>
        )}
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
      notFound: true,
    }
  }

  try {
    const { data: profile } = await api.get<UserWithStatistics>(`/users/${clientId}`)
    const { data: ratings } = await api.get<UserWithStatistics>(`/ratings/${clientId}`)

    return {
      props: {
        ratings,
        profile,
      },
    }
  } catch {
    return {
      notFound: true,
    }
  }
}
