import { styled } from '@/styles/stitches.config'

export const RatingCardContainer = styled('article', {
  width: '100%',
  padding: '$8',
  borderRadius: '$2sm',
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: '$gray700',
  gap: '$8',

  variants: {
    active: {
      true: {
        backgroundColor: '$gray600',
      },
    },
  },
})
