import { ApiProperty } from '@nestjs/swagger'
import { Comment } from '@prisma/client'

export class CommentEntity implements Comment {
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
}
