import { Pin } from '@prisma/client'

import { ApiProperty } from '@nestjs/swagger'

import { IsOptional, IsString } from 'class-validator'

export class CreatePinDto implements Partial<Pin> {
  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  title?: string

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  description?: string

  @ApiProperty()
  @IsString()
  path: string
}

export class UpdatePinDto implements Partial<Pin> {
  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  title?: string

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  description?: string
}
