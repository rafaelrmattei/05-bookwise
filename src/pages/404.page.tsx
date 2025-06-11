import { Sidebar } from '@/components/Sidebar'
import { NotFoundContainer } from '@/styles/global'

export default function NotFound() {
  return (
    <>
      <Sidebar />

      <NotFoundContainer>
        <h1>404: Página não encontrada</h1>
        <h2>Foi mals.. : /</h2>
      </NotFoundContainer>
    </>
  )
}
