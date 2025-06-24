import Image from 'next/image'

import { PopularBookType } from '@/@types/book'
import { Skeleton } from '@/components/Skeleton'
import { Stars } from '@/components/Stars'

import { BookCardContainer, Header, Info } from './styles'

interface PopularBookCardProps {
  book: PopularBookType
}

export function PopularBookCard({ book }: PopularBookCardProps) {
  return (
    <BookCardContainer>
      <Image src={book.coverUrl} alt={book.title} width={64} height={94} />
      <Info>
        <Header>
          <strong>{book.title}</strong>
          <span>{book.author}</span>
        </Header>
        <Stars rate={book.rateAvg} />
      </Info>
    </BookCardContainer>
  )
}

PopularBookCard.displayName = 'PopularBookCard'

export function PopularBookCardSkeleton() {
  return (
    <BookCardContainer>
      <Skeleton width={64} height={94} borderRadius={2} css={{ aspectRatio: '64/94' }} />
      <Info>
        <Header>
          <Skeleton width={'100%'} height={15} css={{ marginBottom: '5px' }} />
          <Skeleton width={'100%'} height={15} />
        </Header>
        <Stars rate={0} />
      </Info>
    </BookCardContainer>
  )
}

PopularBookCardSkeleton.displayName = 'PopularBookCardSkeleton'
