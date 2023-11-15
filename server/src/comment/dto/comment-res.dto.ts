import { ApiProperty } from '@nestjs/swagger'

import { AuthorDto } from 'src/common/dto/app-req.dto'

import { CommentEntity } from '../entities/comment.entity'

export class CommentResDto extends CommentEntity {
  @ApiProperty()
  author: AuthorDto
}
