import { ApiProperty } from '@nestjs/swagger'
import { Comment } from '@prisma/client'
import { IsNumber, IsOptional, IsString } from 'class-validator'

export class CreateCommentDto implements Partial<Comment> {
  @ApiProperty()
  @IsString()
  content: string

  @ApiProperty()
  @IsNumber()
  pinId: number
}

export class UpdateCommentDto implements Partial<CreateCommentDto> {
  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  content?: string
}
