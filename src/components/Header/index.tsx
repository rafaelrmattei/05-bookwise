import { MagnifyingGlass } from 'phosphor-react'

import { pageItems } from '@/config/pages'

import { SearchInput } from '../Form/Inputs/Search'
import { HeaderContainer, PageTitle } from './styles'

interface HeaderProps {
  pathname: string
}

export function Header({ pathname }: HeaderProps) {
  const page = pageItems.find((page) => page.href === pathname)

  if (page) {
    const { label, icon: Icon } = page

    return (
      <HeaderContainer>
        <PageTitle>
          <Icon size={32} />
          <span>{label}</span>
        </PageTitle>

        {pathname === '/explore' && <SearchInput type="text" placeholder="Buscar livro ou autor" icon={MagnifyingGlass} />}
      </HeaderContainer>
    )
  }
}

Header.displayName = 'Header'
