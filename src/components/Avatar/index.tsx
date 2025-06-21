import Image from 'next/image'

import { getInitialsFromName } from '@/utils/get-initials-from-name'

import { AvatarContainer } from './styles'

interface AvatarProps {
  image?: string | null
  name?: string | null
  size?: 'sm' | 'lg'
}

export function Avatar({ image, name, size }: AvatarProps) {
  return (
    <AvatarContainer size={size}>
      {image ? (
        <Image src={image} width={72} height={72} quality={100} alt={name ?? 'User'} />
      ) : (
        <span>{getInitialsFromName(name ?? 'Book Wise')}</span>
      )}
    </AvatarContainer>
  )
}

Avatar.displayName = 'Avatar'
