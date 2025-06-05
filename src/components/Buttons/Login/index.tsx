import Image, { StaticImageData } from 'next/image'

import { Button } from './styles'

interface LoginButtonProps {
  src: StaticImageData
  title: string
}

export function LoginButton({ src, title }: LoginButtonProps) {
  return (
    <Button>
      <Image src={src} width={32} height={32} alt={title} />
      <span>{title}</span>
    </Button>
  )
}
