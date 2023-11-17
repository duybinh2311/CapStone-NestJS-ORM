import { ApiProperty } from '@nestjs/swagger'

import { IsNumber, IsOptional, IsString } from 'class-validator'

import { PinEntity } from '../entities/pin.entity'
import { SavedPinEntity } from '../entities/saved-pin.entity'

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

export class SavePinDto implements Partial<SavedPinEntity> {
  @ApiProperty()
  @IsNumber()
  pinId: number
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
