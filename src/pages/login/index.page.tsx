import { GetServerSideProps } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { getServerSession } from 'next-auth'

import VisitorImageSrc from '@/assets/images/rocket.png'
import { SocialLogin } from '@/components/Form/Buttons/SocialLogin'
import { pageLoginRedirect } from '@/config/pages'

import { authOptions } from '../api/auth/[...nextauth].api'
import { Box, LoginContainer, Titles } from './styles'

export default function Login() {
  return (
    <LoginContainer>
      <Box>
        <Titles>
          <h1>Boas vindas!</h1>
          <h2>Faça seu login ou acesse como visitante</h2>
        </Titles>

        <SocialLogin provider="google" />
        <SocialLogin provider="github" />

        <Link href={pageLoginRedirect}>
          <Image src={VisitorImageSrc} width={32} height={32} alt="Entrar como visitante" />
          <span>Entrar como visitante</span>
        </Link>
      </Box>
    </LoginContainer>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getServerSession(context.req, context.res, authOptions)

  if (session) {
    return {
      redirect: {
        destination: pageLoginRedirect,
        permanent: false,
      },
    }
  }

  return {
    props: {},
  }
}
