import { styled } from '@/styles/stitches.config'

export const UserRatingCardContainer = styled('article', {
  position: 'relative',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: '$2',
})

export const TimeAgo = styled('div', {
  color: '$gray300',
  fontWeight: '$regular',
  fontSize: '$sm',
  lineHeight: '$base',
})

export const Rating = styled('div', {
  padding: '$8',
  borderRadius: '$2sm',
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: '$gray700',
  gap: '$8',

  '> div': {
    display: 'flex',
    gap: '$6',
    width: '100%',

    '> div': {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      padding: '$1 0',
    },
  },

  img: {
    width: 'auto',
  },
})

export const Header = styled('div')

export const BookInfo = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$px',

  strong: {
    color: '$gray100',
    lineHeight: '$short',
    fontSize: '$lg',
  },

  span: {
    color: '$gray400',
    lineHeight: '$base',
    fontSize: '$sm',
  },
})

export const Description = styled('p', {
  color: '$gray300',
  fontSize: '$sm',
  lineHeight: '$base',
})
