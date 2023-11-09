import { ApiProperty } from '@nestjs/swagger'
import { Pin } from '@prisma/client'
import { AuthorDto } from 'src/common/dto'

export class PinResDto implements Pin {
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

  @ApiProperty()
  author: AuthorDto
}
