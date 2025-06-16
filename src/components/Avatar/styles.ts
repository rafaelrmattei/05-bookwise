import { styled } from '@/styles/stitches.config'

export const AvatarContainer = styled('div', {
  backgroundImage: '$gradient-vertical',
  borderRadius: '$full',
  padding: '2px',
  width: 40,
  height: 40,

  img: {
    width: 36,
    height: 36,
    borderRadius: '$full',
  },
})
