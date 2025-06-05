import Image from 'next/image'

import GitHubImageSrc from '@/assets/images/github.png'
import GoogleImageSrc from '@/assets/images/google.png'

import { Button } from './styles'

interface LoginButtonProps {
  type: 'google' | 'github'
}

const SocialLoginMap = {
  google: {
    title: 'Entrar com Google',
    image: GoogleImageSrc,
  },
  github: {
    title: 'Entrar com GitHub',
    image: GitHubImageSrc,
  },
} as const

export function SocialLogin({ type }: LoginButtonProps) {
  const { title, image } = SocialLoginMap[type]

  return (
    <Button>
      <Image src={image} width={32} height={32} alt={title} />
      <span>{title}</span>
    </Button>
  )
}
