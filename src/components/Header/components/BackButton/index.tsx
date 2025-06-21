import { CaretLeft } from 'phosphor-react'

import { ButtonBackContainer } from './styles'

export function ButtonBack() {
  return (
    <ButtonBackContainer href="/home">
      <CaretLeft size={20} />
      <span>Voltar</span>
    </ButtonBackContainer>
  )
}

ButtonBack.displayName = 'ButtonBack'
