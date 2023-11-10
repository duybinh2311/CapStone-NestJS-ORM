import { Pin } from '@prisma/client'

import { ApiProperty } from '@nestjs/swagger'

import { AuthorDto } from 'src/common/dto/app-req.dto'

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
