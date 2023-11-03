import { User } from '@prisma/client'

export class UpdateUserDto implements Partial<User> {
  email?: string
  fullName?: string
  age?: number
  avatar?: string
}
