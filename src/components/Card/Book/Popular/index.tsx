import Image from 'next/image'

import { PopularBookType } from '@/@types/book'
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
