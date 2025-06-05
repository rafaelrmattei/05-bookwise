import { styled } from '@/styles/stitches.config'

export const Container = styled('div', {
  position: 'relative',
  width: '100%',
  height: 'auto',
  padding: '$5',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',

  img: {
    width: '100%',
    borderRadius: '$md',
    height: 'calc(100dvh - 2.5rem)',
  },

  '@media (max-width: 768px)': {
    display: 'none',
  },
})
