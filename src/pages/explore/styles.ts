import { Toggle } from '@radix-ui/react-toggle'

import { styled } from '@/styles/stitches.config'

export const ExploreContainer = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  maxHeight: 'inherit',
  gap: '$5',
  height: 'fit-content',
  overflowX: 'auto',

  scrollBehavior: 'smooth',

  scrollbarWidth: 'none',
  '-ms-overflow-style': 'none',
  WebkitOverflowScrolling: 'touch',

  '&::-webkit-scrollbar': {
    display: 'none',
  },
})

export const CategoriesFilter = styled('div', {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '$3',
  gridColumn: '1 / -1',
  height: 'fit-content',
  marginBottom: '$5',
})

export const Filter = styled(Toggle, {
  all: 'unset',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '$purple100',
  padding: '$2 $4',
  border: '1px solid $purple100',
  borderRadius: '$full',
  fontSize: '$md',
  fontWeight: '$regular',
  maxHeight: 'fit-content',
  cursor: 'pointer',

  '&:hover': {
    color: '$gray100',
    backgroundColor: '$purple200',
    transition: '.4s',
  },

  '&[data-state="on"]': {
    color: '$gray100',
    backgroundColor: '$purple200',
    border: '1px solid $purple200',
  },
})

export const RefNextPage = styled('div', {
  height: 60,
  display: 'flex',
  justifyContent: 'center',
  gridColumn: '1 / -1',
})
