import { styled } from '@/styles/stitches.config'

export const HeaderContainer = styled('header', {
  width: '100%',
  display: 'inline-flex',
  alignItems: 'center',
  padding: '$10 0',
  gap: '$3',

  svg: {
    color: '$green100',
  },

  span: {
    color: '$gray100',
    fontSize: '$2xl',
    fontWeight: '$bold',
  },
})
