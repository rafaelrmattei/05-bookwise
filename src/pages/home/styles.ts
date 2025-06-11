import { styled } from '@/styles/stitches.config'

export const HomeContainer = styled('div', {
  display: 'grid',
  gridTemplateColumns: '63% 32%',
  gap: '5%',
  maxHeight: 'inherit',
})

export const Rates = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$10',
  height: '100%',
  overflowX: 'auto',

  scrollBehavior: 'smooth',

  scrollbarWidth: 'none',
  '-ms-overflow-style': 'none',
  WebkitOverflowScrolling: 'touch',

  '&::-webkit-scrollbar': {
    display: 'none',
  },
})

export const HeadingCards = styled('div', {
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

  button: {
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

export const LastReading = styled('section', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$4',
})

export const MostRecent = styled('section', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$4',
})

export const PopularBooks = styled('section', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$4',
})
