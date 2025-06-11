import { Layout } from '@/components/Layout'
import { NotFoundContainer } from '@/components/Layout/styles'

export default function NotFound() {
  return (
    <Layout>
      <NotFoundContainer>
        <h1>404: Página não encontrada</h1>
        <h2>Foi mals.. : /</h2>
      </NotFoundContainer>
    </Layout>
  )
}
