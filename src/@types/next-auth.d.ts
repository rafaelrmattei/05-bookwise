import type { DefaultSession, DefaultUser } from 'next-auth'

declare module 'next-auth' {
  interface User extends DefaultUser {
    id: string
    username: string
  }

  interface Session extends DefaultSession {
    user: User
  }
}
