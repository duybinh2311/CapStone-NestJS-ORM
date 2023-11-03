import { ApiProperty } from '@nestjs/swagger'
import { Pin } from '@prisma/client'
import { IsNumber, IsString } from 'class-validator'

export class CreatePinDto implements Partial<Pin> {
  title?: string
  content?: string
  fileName: string
  authorId: number
}
