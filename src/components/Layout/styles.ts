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
})

export const Main = styled('main', {
  maxHeight: 'calc(100dvh - 170px)',
})

export const NotFoundContainer = styled('div', {
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$5',
  color: '$gray400',
})
