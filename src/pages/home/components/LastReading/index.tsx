import { useQuery } from '@tanstack/react-query'
import { useContextSelector } from 'use-context-selector'

import { RatingWithBookAndUser } from '@/@types/rating'
import { RatingCard } from '@/components/Card/Rating'
import { SessionContext } from '@/contexts/Session/SessionContext'
import { api } from '@/lib/axios'

import { HeadingCards } from '../HeadingCards'
import { LastReadingContainer } from './styles'

export function LastReading() {
  const session = useContextSelector(SessionContext, (context) => context.session)

  const { data: LastReadingBySessionUser } = useQuery({
    queryKey: ['last-reading-session-user'],
    queryFn: async () => api.get<RatingWithBookAndUser>('/ratings/last').then((res) => res.data),
    staleTime: 1000 * 60,
  })

  if (LastReadingBySessionUser && session) {
    return (
      <LastReadingContainer>
        <HeadingCards title="Sua última leitura" link={{ title: 'Ver todas', href: 'profile' }} />

        <RatingCard rating={LastReadingBySessionUser} active />
      </LastReadingContainer>
    )
  }
}

LastReading.displayName = 'LastReading'
