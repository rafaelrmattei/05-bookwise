import Link from 'next/link'

import { styled } from '@/styles/stitches.config'

export const ButtonBackContainer = styled(Link, {
  all: 'unset',
  cursor: 'pointer',
  color: '$gray200',
  display: 'inline-flex',
  gap: '$2',
  alignItems: 'center',

  span: {
    lineHeight: '0',
    fontSize: '$md',
  },

  '&:hover': {
    color: '$white',
    transition: '.2s',
  },
})
