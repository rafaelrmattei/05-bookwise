import { styled } from '@/styles/stitches.config'

export const Container = styled('div', {
  height: '100dvh',
  display: 'grid',
  gridTemplateColumns: 'auto 1fr',

  '@media (max-width: 768px)': {
    display: 'flex',
    justifyContent: 'center',
  },
})

export const Box = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  '> div': {
    display: 'flex',
    flexDirection: 'column',
    gap: '$4',

    '> img': {
      marginBottom: '$2',

      '@media (min-width: 769px)': {
        display: 'none',
      },
    },

    '@media (min-width: 769px)': {
      width: 370,
    },
  },
})

export const Titles = styled('div', {
  marginBottom: '$5',

  h1: {
    color: '$gray100',
    fontSize: '$2xl',
    fontWeight: '$bold',
    lineHeight: '$short',
  },

  h2: {
    color: '$gray200',
    fontSize: '$md',
    fontWeight: '$regular',
    lineHeight: '$base',
  },
})
