import Image from 'next/image'

import { BookWithReadedFlagAnbRatingType } from '@/@types/book'
import { Stars } from '@/components/Stars'

import { BookCardContainer, Header, Info, ReadedFlag } from './styles'

interface BookCardProps {
  book: BookWithReadedFlagAnbRatingType
}

export function BookCard({ book }: BookCardProps) {
  return (
    <BookCardContainer>
      {book.readed && <ReadedFlag>LIDO</ReadedFlag>}
      <Image src={book.coverUrl} alt={book.title} width={108} height={152} />
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

BookCard.displayName = 'BookCard'
