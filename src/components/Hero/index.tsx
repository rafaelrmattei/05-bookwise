import Image from 'next/image'

import LoginBannerImageSrc from '@/assets/images/login-banner.png'

import { Container } from './styles'

export function Hero() {
  return (
    <Container>
      <Image src={LoginBannerImageSrc} quality={100} width={1196} height={1824} placeholder="blur" alt="BookWise Banner" priority />
    </Container>
  )
}
