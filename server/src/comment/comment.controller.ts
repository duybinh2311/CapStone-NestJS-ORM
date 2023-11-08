import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common'
import { CommentService } from './comment.service'
import { CreateCommentDto } from './dto/create-comment.dto'
import { UpdateCommentDto } from './dto/update-comment.dto'
import { ApiResponse, ApiTags } from '@nestjs/swagger'
import { AuthUser } from 'src/auth/decorators/auth-user.decorator'
import { AuthUserDto } from 'src/auth/dto/auth-user.dto'
import { CommentMessages } from './types/comment.messages'
import { CommentEntity } from './entities/comment.entity'

@ApiTags('Comment')
@Controller('comment')
export class CommentController {
  constructor(private readonly commentService: CommentService) {}

  @ApiResponse({ status: 201, description: CommentMessages.CREATE_SUCCESS, type: CommentEntity })
  @Post('create')
  create(@Body() createCommentDto: CreateCommentDto, @AuthUser() authUser: AuthUserDto) {
    return this.commentService.create(createCommentDto, authUser)
  }

  @Get()
  findAll() {
    return this.commentService.findAll()
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.commentService.findOne(+id)
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCommentDto: UpdateCommentDto) {
    return this.commentService.update(+id, updateCommentDto)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.commentService.remove(+id)
  }
}
