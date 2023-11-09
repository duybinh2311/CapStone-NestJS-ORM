import { ApiProperty } from '@nestjs/swagger'
import { User } from '@prisma/client'
import { IsString, IsNotEmpty, IsEmail, IsNumber, Max, Min } from 'class-validator'

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

export class SignUpDto implements Partial<User> {
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
