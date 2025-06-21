import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

import { RatingWithBookAndUser } from '@/@types/rating'
import { Avatar } from '@/components/Avatar'
import { Stars } from '@/components/Stars'

import { BookInfo, Description, Header, Profile, Rating, RatingCardContainer } from './styles'

interface RatingCardProps {
  active?: boolean
  rating: RatingWithBookAndUser
}

export function RatingCard({ active = false, rating }: RatingCardProps) {
  const [expandedDescription, setExpandedDescription] = useState(false)
  const [expansiveDescription, setExpansiveDescription] = useState(false)
  const DescriptionElementHtml = useRef<HTMLParagraphElement>(null)
  const postedAtTimeAgo = formatDistanceToNow(new Date(rating.createdAt), {
    addSuffix: true,
    locale: ptBR,
  })

  useEffect(() => {
    if (DescriptionElementHtml.current) {
      const el = DescriptionElementHtml.current
      const isClampedNow = el.scrollHeight > el.clientHeight
      setExpansiveDescription(isClampedNow)
    }
  }, [expandedDescription])

  return (
    <RatingCardContainer active={active}>
      {!active && (
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
      )}

      <Rating>
        <Image src={rating.book.coverUrl} alt={rating.book.title} width={120} height={160} />
        <div>
          {active && (
            <Header>
              <div>{postedAtTimeAgo}</div>
              <Stars rate={rating.rate} />
            </Header>
          )}
          <BookInfo>
            <strong>{rating.book.title}</strong>
            <span>{rating.book.author}</span>
            <Description ref={DescriptionElementHtml} lines={!expandedDescription ? (active ? 2 : 4) : 'all'}>
              {rating.description}
            </Description>
            {expansiveDescription && !expandedDescription && <button onClick={() => setExpandedDescription(!expandedDescription)}>ver mais</button>}
          </BookInfo>
        </div>
      </Rating>
    </RatingCardContainer>
  )
}

RatingCard.displayName = 'RatingCard'
