import { ElementType, InputHTMLAttributes } from 'react'

import { IconWrapper, Input, SearchInputContainer } from './styles'

interface SearchInputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: ElementType
  full?: boolean
}

export function SearchInput({ icon: Icon, full, ...props }: SearchInputProps) {
  return (
    <SearchInputContainer full={full}>
      {Icon && (
        <IconWrapper>
          <Icon size={20} />
        </IconWrapper>
      )}
      <Input {...props} />
    </SearchInputContainer>
  )
}

SearchInput.displayName = 'FormButtonSearchInput'
