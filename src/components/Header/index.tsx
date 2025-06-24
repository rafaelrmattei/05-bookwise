import { pageItems } from '@/config/pages'

import { SearchInput } from '../Form/Inputs/Search'
import { ButtonBack } from './components/BackButton'
import { HeaderContainer, PageTitle } from './styles'

interface HeaderProps {
  pathname: string
}

export function Header({ pathname }: HeaderProps) {
  const page = pageItems.find((page) => page.href === pathname)

  if (!page) {
    return (
      <HeaderContainer>
        <ButtonBack />
      </HeaderContainer>
    )
  }

  const { label, icon: Icon } = page

  return (
    <HeaderContainer>
      <PageTitle>
        <Icon size={32} />
        <span>{label}</span>
      </PageTitle>

      {pathname === '/explore' && <SearchInput type="text" placeholder="Buscar livro ou autor" />}
    </HeaderContainer>
  )
}

Header.displayName = 'Header'
