import { ApiProperty } from '@nestjs/swagger'
import { Comment } from '@prisma/client'
import { AuthorDto } from 'src/common/dto'

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
