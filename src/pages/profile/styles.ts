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
})

export const Profiler = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '$5',
  marginBottom: '$2',
})

export const UserDetails = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  strong: {
    color: '$gray100',
    fontSize: '$xl',
    lineHeight: '$short',
  },

  span: {
    color: '$gray400',
    fontSize: '$sm',
    lineHeight: '$base',
  },
})

export const Divider = styled('div', {
  width: 32,
  height: 4,
  backgroundImage: '$gradient-horizontal',
  borderRadius: '$full',
})

export const Statistics = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$10',
  padding: '$5',
})

export const Statistic = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$5',

  svg: {
    color: '$green100',
  },

  div: {
    display: 'flex',
    flexDirection: 'column',

    strong: {
      color: '$gray200',
      lineHeight: '$short',
      fontSize: '$md',
    },

    span: {
      color: '$gray300',
      lineHeight: '$short',
      fontWeight: '$regular',
      fontSize: '$sm',
    },
  },
})
