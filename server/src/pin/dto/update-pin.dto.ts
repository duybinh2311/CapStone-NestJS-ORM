import { ApiProperty } from '@nestjs/swagger'
import { Pin } from '@prisma/client'
import { IsOptional, IsString } from 'class-validator'

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
