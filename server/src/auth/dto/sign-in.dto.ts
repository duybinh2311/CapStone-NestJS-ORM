import { ApiProperty } from '@nestjs/swagger'
import { User } from '@prisma/client'
import { IsNotEmpty, IsString } from 'class-validator'

export class SignInDto implements Partial<User> {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  email: string

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  password: string
}

export class SignInResDto {
  @ApiProperty()
  token: string

  @ApiProperty()
  message: string

  @ApiProperty()
  statusCode: number
}
