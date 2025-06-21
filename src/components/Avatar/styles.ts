import { styled } from '@/styles/stitches.config'

export const AvatarContainer = styled('div', {
  backgroundImage: '$gradient-vertical',
  borderRadius: '$full',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '$white',

  span: {},

  img: {
    borderRadius: '$full',
  },

  variants: {
    size: {
      sm: {
        width: 40,
        height: 40,
        fontSize: '$md',
        fontWeight: '$medium',
        padding: '2px',
        img: {
          width: 36,
          height: 36,
        },
      },
      lg: {
        width: 78,
        height: 78,
        fontSize: '$2xl',
        letterSpacing: 1,
        fontWeight: '$bold',
        padding: '3px',
        img: {
          width: 72,
          height: 72,
        },
      },
    },
  },

  defaultVariants: {
    size: 'sm',
  },
})
