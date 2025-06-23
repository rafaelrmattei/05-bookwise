import { styled } from '@/styles/stitches.config'

export const StatisticsContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$10',
  padding: '$5',
})

export const Statistic = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$5',

  svg: {
    color: '$green100',
  },

  div: {
    display: 'flex',
    flexDirection: 'column',

    strong: {
      color: '$gray200',
      lineHeight: '$short',
      fontSize: '$md',
    },

    span: {
      color: '$gray300',
      lineHeight: '$short',
      fontWeight: '$regular',
      fontSize: '$sm',
    },
  },
})
