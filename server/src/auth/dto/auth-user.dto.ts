import { User } from '@prisma/client'

export class AuthUserDto implements Omit<User, 'password'> {
  id: number
  email: string
  fullName: string
  age: number
  avatar: string
  createdAt: Date
  updatedAt: Date
}
