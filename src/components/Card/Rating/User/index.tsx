import Image from 'next/image'

import { Stars } from '@/components/Stars'

import { SharedRatingCardProps } from '..'
import { BookInfo, Description, Header, Rating, TimeAgo, UserRatingCardContainer } from './styles'

export function UserRatingCard({ rating, postedAtTimeAgo }: SharedRatingCardProps) {
  return (
    <UserRatingCardContainer>
      <TimeAgo>{postedAtTimeAgo}</TimeAgo>
      <Rating>
        <Header>
          <Image src={rating.book.coverUrl} alt={rating.book.title} width={120} height={160} />
          <div>
            <BookInfo>
              <strong>{rating.book.title}</strong>
              <span>{rating.book.author}</span>
            </BookInfo>
            <Stars rate={rating.rate} />
          </div>
        </Header>
        <Description>{rating.description}</Description>
      </Rating>
    </UserRatingCardContainer>
  )
}

UserRatingCard.displayName = 'UserRatingCard'
