import { ApiProperty } from '@nestjs/swagger'

import { User } from '@prisma/client'

export class UserEntity implements User {
  @ApiProperty()
  id: number

  @ApiProperty()
  email: string

  @ApiProperty()
  password: string

  @ApiProperty()
  fullName: string

  @ApiProperty()
  age: number

  @ApiProperty()
  avatar: string

  @ApiProperty()
  userName: string

  @ApiProperty()
  about: string

  @ApiProperty()
  createdAt: Date

  @ApiProperty()
  updatedAt: Date
}
