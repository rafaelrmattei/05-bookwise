import { globalCss } from './stitches.config'

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },

  body: {
    backgroundColor: '$gray800',
    minHeight: '100dvh',
    '-webkit-font-smoothing': 'antialiased',
  },

  'body, input, textarea, button': {
    fontSize: '$md',
    fontWeight: 400,
    fontFamily: '$default',
  },
})
