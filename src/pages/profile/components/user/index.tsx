import { User } from '@prisma/client'

import { Avatar } from '@/components/Avatar'

import { Details, UserDetailsContainer } from './styles'

interface UserProps {
  user: User
}

export function UserDetails({ user }: UserProps) {
  return (
    <UserDetailsContainer>
      <Avatar image={user.image} name={user.name} size="lg" />
      <Details>
        <strong>{user.name}</strong>
        <span>Membro desde {new Date(user.createdAt).getFullYear()}</span>
      </Details>
    </UserDetailsContainer>
  )
}
