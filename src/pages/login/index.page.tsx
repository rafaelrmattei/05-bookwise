import Image from 'next/image'
import Link from 'next/link'

import VisitorImageSrc from '@/assets/images/rocket.png'
import { SocialLogin } from '@/components/Buttons/SocialLogin'

import { Box, LoginContainer, Titles } from './styles'

export default function Login() {
  return (
    <LoginContainer>
      <Box>
        <Titles>
          <h1>Boas vindas!</h1>
          <h2>Faça seu login ou acesse como visitante</h2>
        </Titles>

        <SocialLogin type="google" />
        <SocialLogin type="github" />

        <Link href={'/'}>
          <Image src={VisitorImageSrc} width={32} height={32} alt="Entrar como visitante" />
          <span>Entrar como visitante</span>
        </Link>
      </Box>
    </LoginContainer>
  )
}
