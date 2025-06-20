import { styled } from '@/styles/stitches.config'

export const HeadingCardsContainer = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  height: 30,

  h2: {
    lineHeight: '0',
    color: '$gray100',
    fontSize: '$sm',
    fontWeight: '$regular',
  },

  a: {
    all: 'unset',
    cursor: 'pointer',
    color: '$purple100',
    fontSize: '$sm',
    fontWeight: '$bold',
    lineHeight: '0',
    display: 'flex',
    alignItems: 'center',
    gap: '$2',
    padding: '$1 $2',
  },
})
