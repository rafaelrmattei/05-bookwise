import { styled } from '@/styles/stitches.config'

export const SearchInputContainer = styled('div', {
  position: 'relative',
  width: '100%',
  maxWidth: 400,

  variants: {
    full: {
      true: {
        maxWidth: '100%',
      },
    },
    absolute: {
      true: {
        position: 'absolute',
        right: '6rem',
        top: '2.5rem',
      },
    },
  },

  defaultVariants: {
    full: false,
    absolute: false,
  },

  '&:focus-within': {
    svg: {
      color: '$green200',
    },
  },
})

export const Input = styled('input', {
  padding: '$3 $13 $3 $5',
  width: '100%',
  backgroundColor: '$gray800',
  border: '1px solid $gray500',
  borderRadius: '$2xs',
  color: '$gray200',
  fontSize: '$sm',
  caretColor: '$green100',

  '&::placeholder': {
    color: '$gray400',
  },

  '&:focus': {
    outline: 'none',
    borderColor: '$green200',
    boxShadow: 'none',
  },
})

export const IconWrapper = styled('div', {
  position: 'absolute',
  right: '0',
  top: '0',
  height: 'calc(100% - 2px)',
  display: 'flex',
  alignItems: 'center',
  padding: '0 $5',

  svg: {
    color: '$gray500',
  },
})
