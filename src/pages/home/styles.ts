import { Heading, styled, Text } from '@ignite-ui/react'

export const Container = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$20',
  height: '100dvh',
  overflow: 'hidden',
})

export const Hero = styled('div', {
  maxWidth: 500,
  padding: '0 $10',

  [`> ${Heading}`]: {
    '@media(max-width: 600px)': {
      fontSize: '$6xl',
    },
  },

  [`> ${Text}`]: {
    marginTop: '$2',
    color: '$gray200',
  },
})

export const Preview = styled('div', {
  paddingRight: '$8',
  overflow: 'hidden',

  '@media(max-width: 600px)': {
    display: 'none',
  },
})
