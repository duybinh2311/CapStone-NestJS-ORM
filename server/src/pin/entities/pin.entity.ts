import { ApiProperty } from '@nestjs/swagger'
import { Comment, Pin } from '@prisma/client'

export class PinEntity implements Pin {
  @ApiProperty()
  id: number

  @ApiProperty()
  title: string

  @ApiProperty()
  description: string

  @ApiProperty()
  path: string

  @ApiProperty()
  authorId: number

  @ApiProperty()
  createdAt: Date

  @ApiProperty()
  updatedAt: Date
}
