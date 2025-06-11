import { usePathname } from 'next/navigation'
import { ReactNode } from 'react'

import { pageItems } from '@/config/pages'

import { HeaderContainer, PageTitle } from './styles'

interface HeaderProps {
  children?: ReactNode
}

export function Header({ children }: HeaderProps) {
  const pathname = usePathname()
  const page = pageItems.find((page) => page.href === pathname)

  if (page) {
    const { label, icon: Icon } = page

    return (
      <HeaderContainer>
        <PageTitle>
          <Icon size={32} />
          <span>{label}</span>
        </PageTitle>
        {children}
      </HeaderContainer>
    )
  }
}
