// components/Layout/index.tsx
import { usePathname } from 'next/navigation'
import { ReactNode } from 'react'

import { Header } from '@/components/Header'
import { Sidebar } from '@/components/Sidebar'

import { Hero } from '../Hero'
import { LayoutContainer, Main, Wrapper } from './styles'

interface LayoutProps {
  headerChildren?: ReactNode
  children?: ReactNode
}

export function Layout({ children }: LayoutProps) {
  const pathname = usePathname() || '/'
  const first = pathname.split('/')[1] || ''
  const rootPath = first ? `/${first}` : first
  const hasHeader = !['', '/', '/login', '/404'].includes(rootPath)

  return (
    <LayoutContainer>
      {['', '/', '/login'].includes(rootPath) ? <Hero /> : <Sidebar pathname={rootPath} />}
      <Wrapper>
        {hasHeader && <Header pathname={rootPath} />}
        <Main hasHeader={hasHeader}>{children}</Main>
      </Wrapper>
    </LayoutContainer>
  )
}

Layout.displayName = 'Layout'
