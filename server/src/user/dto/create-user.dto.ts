import { ApiProperty } from '@nestjs/swagger'
import { User } from '@prisma/client'
import { IsEmail, IsNotEmpty, IsNumber, IsString, Max, Min } from 'class-validator'

export class CreateUserDto {
  @ApiProperty()
  @IsEmail()
  @IsNotEmpty()
  email: string

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  password: string

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  fullName: string

  @ApiProperty()
  @IsNumber()
  @Min(18)
  @Max(100)
  age: number
}

export class CreateUserResDto implements Omit<User, 'password'> {
  id: number
  email: string
  fullName: string
  age: number
  avatar: string
  createdAt: Date
  updatedAt: Date
}
