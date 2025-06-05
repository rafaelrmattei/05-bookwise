import Image from 'next/image'

import GitHubImageSrc from '@/assets/images/github.png'
import GoogleImageSrc from '@/assets/images/google.png'
import LogoImageSrc from '@/assets/images/logo.png'
import RocketImageSrc from '@/assets/images/rocket.png'
import { LoginButton } from '@/components/Buttons/Login'

import { Box, Container, Titles } from './styles'

export default function Login() {
  return (
    <Container>
      <Box>
        <div>
          <Image src={LogoImageSrc} width={223} height={43} alt="BookWise Logo" />

          <Titles>
            <h1>Boas vindas!</h1>
            <h2>Faça seu login ou acesse como visitante</h2>
          </Titles>

          <LoginButton src={GoogleImageSrc} title="Entrar com Google" />
          <LoginButton src={GitHubImageSrc} title="Entrar com GitHub" />
          <LoginButton src={RocketImageSrc} title="Acessar como visitante" />
        </div>
      </Box>
    </Container>
  )
}
