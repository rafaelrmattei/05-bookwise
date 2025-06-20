import { styled } from '@/styles/stitches.config'

export const LoginContainer = styled('div', {
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})

export const Box = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$4',
  padding: '$5',
  width: '100%',
  maxWidth: 400,

  a: {
    all: 'unset',
    background: '$gray600',
    borderRadius: 8,
    color: '$white',
    fontSize: '$lg',
    fontWeight: '$bold',
    display: 'flex',
    alignItems: 'center',
    padding: '$5 $6',
    gap: '$5',
    cursor: 'pointer',
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
