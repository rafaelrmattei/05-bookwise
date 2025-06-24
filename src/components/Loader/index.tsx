import { RefCallback, RefObject } from 'react'

import { LoaderContainer, Spinner } from './styles'

interface LoaderProps {
  refProp: RefCallback<HTMLSpanElement> | RefObject<HTMLSpanElement> | null
}

export function Loader({ refProp }: LoaderProps) {
  return (
    <LoaderContainer>
      <Spinner ref={refProp} />
    </LoaderContainer>
  )
}
