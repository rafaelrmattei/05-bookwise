import { styled } from '@/styles/stitches.config'

export const LayoutContainer = styled('div', {
  height: '100dvh',
  display: 'grid',
  gridTemplateColumns: 'auto 1fr',
  padding: '$5',
  position: 'relative',
  overflow: 'hidden',
})

export const Wrapper = styled('div', {
  position: 'relative',
  padding: '0 6rem',
  height: 'calc(-2.5rem + 100dvh)',
})

export const Main = styled('main', {
  height: '100%',

  variants: {
    hasHeader: {
      true: {
        maxHeight: 'calc(100dvh - 170px)',
      },
      false: {
        maxHeight: 'calc(-2.5rem + 100dvh)',
      },
    },
  },
})

export const NotFoundContainer = styled('div', {
  width: '100%',
  height: 'calc(100dvh - 2.5rem)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$5',
  color: '$gray400',
})
