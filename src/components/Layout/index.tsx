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
  const pathname = usePathname()

  return (
    <LayoutContainer>
      {['/', '/login'].includes(pathname) ? <Hero /> : <Sidebar pathname={pathname} />}
      <Wrapper>
        <Header pathname={pathname} />
        <Main>{children}</Main>
      </Wrapper>
    </LayoutContainer>
  )
}

Layout.displayName = 'Layout'
