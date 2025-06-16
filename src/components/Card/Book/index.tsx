import Image from 'next/image'

import { Stars } from '@/components/Stars'

import { BookCardContainer, Header, Info, ReadedFlag } from './styles'

interface BookCardProps {
  readed?: boolean
}

export function BookCard({ readed = false }: BookCardProps) {
  return (
    <BookCardContainer>
      {readed && <ReadedFlag>LIDO</ReadedFlag>}
      <Image src="/images/books/o-hobbit.png" alt="O Hobbit" width={64} height={94} />
      <Info>
        <Header>
          <strong>A revolução dos bichos</strong>
          <span>George Orwell</span>
        </Header>
        <Stars rate={3} />
      </Info>
    </BookCardContainer>
  )
}
