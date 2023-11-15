import { ApiProperty } from '@nestjs/swagger'

import { IsOptional, IsString } from 'class-validator'

import { PinEntity } from '../entities/pin.entity'

export class CreatePinDto implements Partial<PinEntity> {
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

export class UpdatePinDto implements Partial<PinEntity> {
  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  title?: string

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  description?: string
}
