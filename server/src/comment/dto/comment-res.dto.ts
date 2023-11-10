import { Comment } from '@prisma/client'

import { ApiProperty } from '@nestjs/swagger'

import { AuthorDto } from 'src/common/dto/app-req.dto'

export class CommentResDto implements Comment {
  @ApiProperty()
  id: number

  @ApiProperty()
  content: string

  @ApiProperty()
  authorId: number

  @ApiProperty()
  pinId: number

  @ApiProperty()
  createdAt: Date

  @ApiProperty()
  updatedAt: Date

  @ApiProperty()
  author: AuthorDto
}
