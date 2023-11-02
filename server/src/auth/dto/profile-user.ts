import { ApiProperty } from '@nestjs/swagger'
import { IsNumber, IsString, Max, Min } from 'class-validator'

export class ProfileUserDto {
  @ApiProperty()
  @IsString()
  email: string

  @ApiProperty()
  @IsString()
  fullName: string

  @ApiProperty()
  @IsNumber()
  @Min(18)
  @Max(100)
  age: number

  @ApiProperty()
  @IsString()
  avatar: string
}
