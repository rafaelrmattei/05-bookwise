import { keyframes, styled } from '@stitches/react'

const wave = keyframes({
  '0%': { backgroundPosition: '-200px 0' },
  '100%': { backgroundPosition: 'calc(200px + 100%) 0' },
})

export const SkeletonContainer = styled('div', {
  backgroundColor: '$gray400',
  backgroundImage: `linear-gradient(90deg, $gray400, $gray200, $gray400)`,
  backgroundSize: '200px 100%',
  backgroundRepeat: 'no-repeat',
  animation: `${wave} 1.6s linear infinite`,
})
