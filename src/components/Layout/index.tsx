// components/Layout/index.tsx
import { ReactNode } from 'react'

import { Header } from '@/components/Header'
import { Sidebar } from '@/components/Sidebar'

import { LayoutContainer, Main, Wrapper } from './styles'

interface LayoutProps {
  headerChildren?: ReactNode
  children?: ReactNode
}

export function Layout({ headerChildren, children }: LayoutProps) {
  return (
    <LayoutContainer>
      <Sidebar />
      <Wrapper>
        <Header>{headerChildren}</Header>
        <Main>{children}</Main>
      </Wrapper>
    </LayoutContainer>
  )
}
