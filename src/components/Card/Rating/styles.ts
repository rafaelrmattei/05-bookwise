import { styled } from '@/styles/stitches.config'

export const RatingCardContainer = styled('article', {
  position: 'relative',
  width: '100%',
  padding: '$8',
  borderRadius: '$2sm',
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: '$gray700',
  gap: '$8',

  variants: {
    active: {
      true: {
        backgroundColor: '$gray600',
      },
    },
  },
})

export const Header = styled('div', {
  display: 'inline-flex',
  justifyContent: 'space-between',
})

export const Profile = styled('div', {
  display: 'inline-flex',
  gap: '$4',

  div: {
    display: 'flex',
    flexDirection: 'column',

    'span:first-of-type': {
      color: '$gray100',
      lineHeight: '$base',
      fontSize: '$md',
    },

    'span:last-of-type': {
      color: '$gray400',
      lineHeight: '$base',
      fontSize: '$sm',
    },
  },
})

export const Rating = styled('div', {
  display: 'flex',
  gap: '$8',
  color: '$gray300',

  '> div': {
    display: 'flex',
    flexDirection: 'column',
    gap: '$3',
    width: '100%',
  },
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

export const Description = styled('p', {
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
      4: {
        WebkitLineClamp: 4,
      },
      all: {
        WebkitLineClamp: 'none',
      },
    },
  },
})
