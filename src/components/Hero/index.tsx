import Image from 'next/image'

import HeroBackgroundImageSrc from '@/assets/images/hero-background.png'

import { HeroContainer } from './styles'

export function Hero() {
  return (
    <HeroContainer>
      <Image src={HeroBackgroundImageSrc} quality={100} alt="BookWise" priority />
    </HeroContainer>
  )
}

Hero.displayName = 'Hero'
