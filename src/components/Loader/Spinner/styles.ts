import { keyframes, styled } from '@/styles/stitches.config'

export const LoaderContainer = styled('div', {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: 60,
  width: '100%',
})

const layers1 = keyframes({
  '0%': { boxShadow: '0px 0px 0 0px' },
  '90%, 100%': { boxShadow: '20px 20px 0 -4px' },
})

const layerTr = keyframes({
  '0%': { transform: 'translate(0, 0) scale(1)' },
  '100%': { transform: 'translate(-25px, -25px) scale(1)' },
})

export const Spinner = styled('span', {
  position: 'relative',
  width: '30px',
  height: '30px',
  background: '$green300',
  transform: 'rotateX(65deg) rotate(45deg)',
  color: '$green100',
  animation: `${layers1} .5s linear infinite alternate`,

  '&::after': {
    content: '""',
    position: 'absolute',
    inset: 0,
    background: '$green100',
    animation: `${layerTr} .5s linear infinite alternate`,
  },
})
