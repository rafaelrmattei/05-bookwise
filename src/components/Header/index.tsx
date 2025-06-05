import { pageItems } from '@/config/pages'

import { HeaderContainer } from './styles'

interface HeaderProps {
  pathname: string
}

export function Header({ pathname }: HeaderProps) {
  const page = pageItems.find((page) => page.href === pathname)

  if (page) {
    const { label, icon: Icon } = page

    return (
      <HeaderContainer>
        <Icon size={32} />
        <span>{label}</span>
      </HeaderContainer>
    )
  }
}
