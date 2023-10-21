import { ApiProperty } from '@nestjs/swagger'
import { User } from '@prisma/client'

export class CreateUserDto implements Partial<User> {
  email: string

  password: string

  age: number

  fullName: string

  avatar: string
}
