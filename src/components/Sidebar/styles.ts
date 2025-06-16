import AsideBackgroundImageSrc from '@/assets/images/aside-background.png'
import { styled } from '@/styles/stitches.config'

export const SidebarContainer = styled('aside', {
  position: 'relative',
  height: '100%',
  borderRadius: '$lg',
  width: 232,
  overflow: 'hidden',
  backgroundImage: `url(${AsideBackgroundImageSrc.src})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  display: 'flex',
  flexDirection: 'column',
})

export const SidebarHeader = styled('div', {
  width: '100%',
  padding: '$10 0 $14',
  display: 'flex',
  justifyContent: 'center',
})

export const SidebarNav = styled('nav', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'start',
  gap: '$4',

  a: {
    position: 'relative',
    width: 105,
    height: 42,
    display: 'inline-flex',
    alignItems: 'center',
    gap: '$3',
    textDecoration: 'none',
    color: '$gray400',
    fontSize: '$md',
    transition: '.4s',

    '&:hover': {
      color: '$gray100',
    },

    '&[data-active="true"]': {
      color: '$gray100',
      fontWeight: '$bold',
    },

    '&[data-active="true"]::before': {
      content: '',
      position: 'absolute',
      left: '-20px',
      top: '9px',
      bottom: 0,
      width: 4,
      height: 24,
      backgroundImage: '$gradient-vertical',
      borderRadius: '$full',
    },
  },
})

export const SidebarFooter = styled('div', {
  marginTop: 'auto',
  width: '100%',
  padding: '$8 0',
  display: 'flex',
  justifyContent: 'center',

  a: {
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '$3',
    color: '$gray200',
    fontSize: '$md',
    fontWeight: '$bold',
    textDecoration: 'none',
    lineHeight: '0',
    borderRadius: '$sm',
    transition: '.4s',
    padding: '$4 $5',

    svg: {
      color: '$green100',
    },

    '&:hover': {
      backgroundColor: '$gray20030',
    },
  },
})

export const User = styled('div', {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$3',
  color: '$gray200',

  span: {
    fontSize: '$sm',
    fontWeight: '$regular',
  },
})

export const SignOutButton = styled('button', {
  all: 'unset',
  cursor: 'pointer',
  lineHeight: '0',
  transition: '.4s',
  borderRadius: '$2xs',
  width: 32,
  height: 32,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  svg: {
    color: '$red200',
  },

  '&:hover': {
    backgroundColor: '$gray20010',
  },
})
