import { ApiProperty } from '@nestjs/swagger'
import { User } from '@prisma/client'
import { IsEmail, IsNotEmpty, IsString, IsNumber, Min, Max } from 'class-validator'

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

export class SignUpResDto {
  @ApiProperty()
  email: string

  @ApiProperty()
  fullName: string

  @ApiProperty()
  age: number
}
