import Image from 'next/image'

import { getInitialsFromName } from '@/utils/get-initials-from-name'

import { AvatarContainer } from './styles'

interface AvatarProps {
  image?: string
  name: string
}

export function Avatar({ image, name }: AvatarProps) {
  return (
    <AvatarContainer>
      {image ? <Image src={image} width={32} height={32} quality={100} alt={name} /> : <span>{getInitialsFromName(name)}</span>}
    </AvatarContainer>
  )
}
