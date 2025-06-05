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
  height: 'calc(100dvh - 2rem)',
  display: 'grid',
  gridTemplateColumns: 'auto 1fr',
  padding: '$4',
})
