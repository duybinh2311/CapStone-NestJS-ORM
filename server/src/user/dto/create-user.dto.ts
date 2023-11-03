import { User } from '@prisma/client'

export class CreateUserDto implements Partial<User> {
  email: string
  password: string
  fullName: string
  age: number
}
