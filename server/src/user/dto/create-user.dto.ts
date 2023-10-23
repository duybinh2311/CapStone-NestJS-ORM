import { ApiProperty } from '@nestjs/swagger'
import { Transform, Type } from 'class-transformer'
import { IsEmail, IsNotEmpty, IsNumber, IsNumberString, IsString, Max, Min } from 'class-validator'

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
