import { keyframes } from '@stitches/react'

import { styled } from '@/styles/stitches.config'

export const HomeContainer = styled('div', {
  display: 'grid',
  gridTemplateColumns: '63% 32%',
  gap: '5%',
  maxHeight: 'inherit',
})

export const Ratings = styled('div', {
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

export const LoaderContainer = styled('div', {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: 60,
  width: '100%',
})

const layers1 = keyframes({
  '0%': { boxShadow: '0px 0px 0 0px' },
  '90%, 100%': { boxShadow: '20px 20px 0 -4px' },
})

const layerTr = keyframes({
  '0%': { transform: 'translate(0, 0) scale(1)' },
  '100%': { transform: 'translate(-25px, -25px) scale(1)' },
})

export const Loader = styled('span', {
  position: 'relative',
  width: '30px',
  height: '30px',
  background: '$green300',
  transform: 'rotateX(65deg) rotate(45deg)',
  color: '$green100',
  animation: `${layers1} .5s linear infinite alternate`,

  '&::after': {
    content: '""',
    position: 'absolute',
    inset: 0,
    background: '$green100',
    animation: `${layerTr} .5s linear infinite alternate`,
  },
})
