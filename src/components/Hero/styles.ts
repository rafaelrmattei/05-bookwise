import { styled } from '@/styles/stitches.config'

export const HeroContainer = styled('div', {
  borderRadius: '$lg',
  maxHeight: 'calc(100dvh - 2.5rem)',

  img: {
    width: '100%',
    maxHeight: 'calc(100dvh - 2.5rem)',
  },
})
