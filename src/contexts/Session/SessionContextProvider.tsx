import { useSession } from 'next-auth/react'
import { ReactNode } from 'react'

import { SessionContext } from './SessionContext'

interface SessionContextProviderProps {
  children: ReactNode
}

export function SessionContextProvider({ children }: SessionContextProviderProps) {
  const { data: session, status } = useSession()

  return (
    <SessionContext.Provider
      value={{
        session,
        status,
      }}
    >
      {children}
    </SessionContext.Provider>
  )
}
