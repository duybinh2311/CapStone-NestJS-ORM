import { ApiProperty } from '@nestjs/swagger'
import { PrismaClient, User } from '@prisma/client'
import { IsNumber, IsOptional, IsString, Max, Min } from 'class-validator'

export class ProfileUserDto implements Partial<User> {
  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  email?: string

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  fullName?: string

  @ApiProperty({ required: false })
  @IsNumber()
  @IsOptional()
  @Min(18)
  @Max(100)
  age?: number

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  avatar?: string
}
