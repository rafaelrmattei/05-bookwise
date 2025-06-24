import Image from 'next/image'

import { Avatar } from '@/components/Avatar'
import { Skeleton } from '@/components/Skeleton'
import { Stars } from '@/components/Stars'

import { SharedRatingCardProps } from '..'
import { BookInfo, Description, Header, Info, Profile, Rating, RatingCardContainer } from './styles'

export function PublicRatingCard({
  rating,
  expandedDescription,
  setExpandedDescription,
  expansiveDescription,
  postedAtTimeAgo,
  descriptionRef,
}: SharedRatingCardProps) {
  return (
    <RatingCardContainer>
      <Header>
        <Profile href={`profile/${rating.userId}`}>
          <Avatar image={rating.user.image} name={rating.user.name} />
          <div>
            <span>{rating.user.name}</span>
            <span>{postedAtTimeAgo}</span>
          </div>
        </Profile>
        <Stars rate={rating.rate} />
      </Header>

      <Rating>
        <Image src={rating.book.coverUrl} alt={rating.book.title} width={120} height={160} />
        <Info>
          <BookInfo>
            <strong>{rating.book.title}</strong>
            <span>{rating.book.author}</span>
            <Description ref={descriptionRef} lines={!expandedDescription ? 4 : 'all'}>
              {rating.description}
            </Description>
            {expansiveDescription && !expandedDescription && <button onClick={() => setExpandedDescription(!expandedDescription)}>ver mais</button>}
          </BookInfo>
        </Info>
      </Rating>
    </RatingCardContainer>
  )
}

PublicRatingCard.displayName = 'PublicRatingCard'

export function PublicRatingCardSkeleton() {
  return (
    <RatingCardContainer>
      <Header>
        <Profile href={'#'}>
          <Skeleton width={40} height={40} borderRadius={'50%'} />
          <div>
            <Skeleton width={120} height={15} css={{ marginBottom: 10 }} />
            <Skeleton width={50} height={15} />
          </div>
        </Profile>
        <Stars rate={0} />
      </Header>

      <Rating>
        <Skeleton width={120} height={160} borderRadius={2} css={{ aspectRatio: '120 / 160' }} />
        <Info>
          <BookInfo>
            <Skeleton width={150} height={15} css={{ marginBottom: 10 }} />
            <Skeleton width={100} height={15} css={{ marginBottom: 20 }} />
            <Description>
              <Skeleton width={'100%'} height={15} css={{ marginBottom: 5 }} />
              <Skeleton width={'100%'} height={15} css={{ marginBottom: 5 }} />
              <Skeleton width={'50%'} height={15} />
            </Description>
          </BookInfo>
        </Info>
      </Rating>
    </RatingCardContainer>
  )
}

PublicRatingCardSkeleton.displayName = 'PublicRatingCardSkeleton'
