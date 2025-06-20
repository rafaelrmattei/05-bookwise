import { Session } from 'next-auth'
import { createContext } from 'use-context-selector'

interface SessionContextType {
  session: Session | null
  status: 'authenticated' | 'unauthenticated' | 'loading'
}

export const SessionContext = createContext({} as SessionContextType)
