import Image from 'next/image'
import { memo } from 'react'

import { PopularBook } from '@/@types/rating'
import { Stars } from '@/components/Stars'

import { BookCardContainer, Header, Info, ReadedFlag } from './styles'

interface BookCardProps {
  readed?: boolean
  book: PopularBook
}

function BookCardComponent({ readed = false, book }: BookCardProps) {
  return (
    <BookCardContainer>
      {readed && <ReadedFlag>LIDO</ReadedFlag>}
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

BookCardComponent.displayName = 'BookCard'

export const BookCard = memo(BookCardComponent)
