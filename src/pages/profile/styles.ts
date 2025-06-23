import { styled } from '@/styles/stitches.config'

export const ProfileContainer = styled('div', {
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

export const Analytics = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  borderLeft: '1px solid $gray700',
  alignItems: 'center',
  gap: '$8',
  maxHeight: 'fit-content',
})

export const Divider = styled('div', {
  width: 32,
  height: 4,
  backgroundImage: '$gradient-horizontal',
  borderRadius: '$full',
})

export const NotFound = styled('div', {
  textAlign: 'center',
  color: '$gray100',
  fontSize: '$lg',
})
