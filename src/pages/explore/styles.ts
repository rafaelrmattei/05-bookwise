import { styled } from '@/styles/stitches.config'

export const ExploreContainer = styled('div', {
  display: 'grid',
  gridTemplateColumns: '32% 32% 32%',
  maxHeight: 'inherit',
  gap: '2%',
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
