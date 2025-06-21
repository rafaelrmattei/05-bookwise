import { User } from '@prisma/client'

import { Statistics } from './book'

export type UserWithStatistics = {
  user: User
  statistics: Statistics
}
