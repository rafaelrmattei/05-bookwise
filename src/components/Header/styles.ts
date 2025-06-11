import { styled } from '@/styles/stitches.config'

export const HeaderContainer = styled('header', {
  width: '100%',
  height: 130,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '$10 0',
  gap: '$5',
})

export const PageTitle = styled('div', {
  display: 'inline-flex',
  alignItems: 'center',
  gap: '$3',

  '> svg': {
    color: '$green100',
  },

  '> span': {
    color: '$gray100',
    fontSize: '$2xl',
    fontWeight: '$bold',
  },
})
