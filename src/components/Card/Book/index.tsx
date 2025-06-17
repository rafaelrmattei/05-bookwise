import Image from 'next/image'

import { PopularBook } from '@/@types/rating'
import { Stars } from '@/components/Stars'

import { BookCardContainer, Header, Info, ReadedFlag } from './styles'

interface BookCardProps {
  readed?: boolean
  book: PopularBook
}

export function BookCard({ readed = false, book }: BookCardProps) {
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
