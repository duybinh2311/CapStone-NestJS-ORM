import { ApiProperty } from '@nestjs/swagger'
import { Pin } from '@prisma/client'
import { IsString } from 'class-validator'

export class UpdatePinDto implements Partial<Pin> {
  @ApiProperty({ required: false })
  @IsString()
  title?: string

  @ApiProperty({ required: false })
  @IsString()
  description?: string
}
