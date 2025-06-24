import Image from 'next/image'

import { Stars } from '@/components/Stars'

import { SharedRatingCardProps } from '..'
import { BookInfo, Description, Header, Info, Rating, RatingCardContainer } from './styles'

export function LastReadingRatingCard({
  rating,
  expandedDescription,
  setExpandedDescription,
  expansiveDescription,
  postedAtTimeAgo,
  descriptionRef,
}: SharedRatingCardProps) {
  return (
    <RatingCardContainer>
      <Rating>
        <Image src={rating.book.coverUrl} alt={rating.book.title} width={120} height={160} />
        <Info>
          <Header>
            <div>{postedAtTimeAgo}</div>
            <Stars rate={rating.rate} />
          </Header>
          <BookInfo>
            <strong>{rating.book.title}</strong>
            <span>{rating.book.author}</span>
            <Description ref={descriptionRef} lines={!expandedDescription ? 2 : 'all'}>
              {rating.description}
            </Description>

            {expansiveDescription && !expandedDescription && <button onClick={() => setExpandedDescription(!expandedDescription)}>ver mais</button>}
          </BookInfo>
        </Info>
      </Rating>
    </RatingCardContainer>
  )
}

LastReadingRatingCard.displayName = 'LastReadingRatingCard'
