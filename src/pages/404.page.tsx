import Image from 'next/image'
import Link from 'next/link'

import Erro404Image from '@/assets/images/erro-404.png'
import { NotFoundContainer } from '@/components/Layout/styles'

function NotFound() {
  return (
    <NotFoundContainer>
      <Image src={Erro404Image} width={300} height={260} alt="Erro 404" />
      <h1>Erro 404: Página não encontrada</h1>
      <h2>Ué! Que estranho. Deve ser cachê.</h2>
      <h2>Na minha máquina funciona.</h2>
      <Link href={'/home'}>Voltar pra home</Link>
    </NotFoundContainer>
  )
}

NotFound.noLayout = true
export default NotFound
