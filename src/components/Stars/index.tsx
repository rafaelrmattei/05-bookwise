import { Star, StarHalf } from 'phosphor-react'

import { StarsContainer } from './styles'

interface StarsProps {
  rate: number
}

export function Stars({ rate = 0 }: StarsProps) {
  return (
    <StarsContainer>
      {[...Array(5)].map((_, index) => {
        if (rate >= index + 1) {
          return <Star key={index} size={16} weight="fill" />
        } else if (rate > index && rate < index + 1) {
          return <StarHalf key={index} size={16} weight="fill" />
        } else {
          return <Star key={index} size={16} />
        }
      })}
    </StarsContainer>
  )
}
