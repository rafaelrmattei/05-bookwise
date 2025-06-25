import { MagnifyingGlass } from 'phosphor-react'
import { InputHTMLAttributes } from 'react'

import { IconWrapper, Input, SearchInputContainer } from './styles'

interface SearchInputProps extends InputHTMLAttributes<HTMLInputElement> {
  full?: boolean
  absolute?: boolean
}

export function SearchInput({ full, absolute, ...props }: SearchInputProps) {
  return (
    <SearchInputContainer full={full} absolute={absolute}>
      <IconWrapper>
        <MagnifyingGlass size={20} />
      </IconWrapper>
      <Input {...props} />
    </SearchInputContainer>
  )
}

SearchInput.displayName = 'FormButtonSearchInput'
