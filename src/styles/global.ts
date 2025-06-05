import { globalCss, styled } from './stitches.config'

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
  },

  body: {
    backgroundColor: '$gray800',
    minHeight: '100dvh',
    '-webkit-font-smoothing': 'antialiased',
  },

  'body, input, textarea, button': {
    fontFamily: '$default',
    fontSize: '$md',
    fontWeight: 400,
  },
})

export const AppContainer = styled('div', {
  height: 'calc(100dvh - 2.5rem)',
  display: 'grid',
  gridTemplateColumns: 'auto 1fr',
  padding: '$5',
  position: 'relative',
  overflow: 'hidden',
})

export const Main = styled('main', {
  position: 'relative',
  padding: '0 6rem',
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
