import { ApiProperty } from '@nestjs/swagger'

import { IsNumber, IsOptional, IsString, Max, Min } from 'class-validator'

import { UserEntity } from '../entities/user.entity'

export class UpdateUserDto implements Partial<UserEntity> {
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

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  userName?: string

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  about?: string
}
