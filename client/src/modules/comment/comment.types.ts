import { AuthorDto } from '@/types'

export interface CommentEntity {
  id: number
  content: string
  authorId: number
  pinId: number
  createdAt: Date
  updatedAt: Date
}

export interface CreateCommentDto {
  content: string
  pinId: number
}

export interface UpdateCommentDto {
  content?: string
}

export interface CommentResDto extends CommentEntity {
  author: AuthorDto
}
