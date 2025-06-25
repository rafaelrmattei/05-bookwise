import { LoaderTextContainer, Text } from './styles'

interface LoaderTextProps {
  message: string
}

export function LoaderText({ message }: LoaderTextProps) {
  return (
    <LoaderTextContainer>
      <Text>{message}</Text>
    </LoaderTextContainer>
  )
}
