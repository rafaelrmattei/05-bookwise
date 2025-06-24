import { styled } from '@/styles/stitches.config'

export const RatingCardContainer = styled('article', {
  position: 'relative',
  width: '100%',
  padding: '$8',
  borderRadius: '$2sm',
  display: 'flex',
  flexDirection: 'column',
  gap: '$8',
  backgroundColor: '$gray600',
})

export const Rating = styled('div', {
  display: 'flex',
  gap: '$8',
  color: '$gray300',

  img: {
    width: 'auto',
  },
})

export const Info = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$3',
  width: '100%',
})

export const Header = styled('div', {
  display: 'inline-flex',
  justifyContent: 'space-between',
})

export const BookInfo = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  strong: {
    color: '$gray100',
    lineHeight: '$short',
    fontSize: '$md',
  },

  span: {
    color: '$gray400',
    lineHeight: '$base',
    fontSize: '$sm',
    marginBottom: '$3',
  },

  button: {
    all: 'unset',
    cursor: 'pointer',
    color: '$purple100',
    fontSize: '$sm',
    fontWeight: '$bold',
    lineHeight: '$base',
  },
})

export const Description = styled('div', {
  display: '-webkit-box',
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  fontSize: '$sm',
  lineHeight: '$base',

  variants: {
    lines: {
      2: {
        WebkitLineClamp: 2,
      },
      all: {
        WebkitLineClamp: 'none',
      },
    },
  },
})
