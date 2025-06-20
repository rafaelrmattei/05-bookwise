import Image from 'next/image'
import { memo } from 'react'

import { getInitialsFromName } from '@/utils/get-initials-from-name'

import { AvatarContainer } from './styles'

interface AvatarProps {
  image?: string | null
  name?: string | null
}

function AvatarComponent({ image, name }: AvatarProps) {
  return (
    <AvatarContainer>
      {image ? (
        <Image src={image} width={32} height={32} quality={100} alt={name ?? 'User'} />
      ) : (
        <span>{getInitialsFromName(name ?? 'Book Wise')}</span>
      )}
    </AvatarContainer>
  )
}

AvatarComponent.displayName = 'Avatar'

export const Avatar = memo(AvatarComponent)
