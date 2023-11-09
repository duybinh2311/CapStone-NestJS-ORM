import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common'
import { ApiCreatedResponse, ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger'
import { AuthUser } from 'src/auth/decorators/auth-user.decorator'
import { AuthUserDto } from 'src/auth/dto/auth-user.dto'
import { CommentService } from './comment.service'
import { CreateCommentDto } from './dto/create-comment.dto'
import { UpdateCommentDto } from './dto/update-comment.dto'
import { CommentEntity } from './entities/comment.entity'
import { CommentMessages } from './types/comment.messages'

@ApiTags('Comment')
@Controller('comment')
export class CommentController {
  constructor(private readonly commentService: CommentService) {}

  @ApiOperation({ summary: CommentMessages.CREATE_SUMMARY })
  @ApiCreatedResponse({ description: CommentMessages.CREATE_SUCCESS, type: CommentEntity })
  @Post()
  create(@Body() dto: CreateCommentDto, @AuthUser() authUser: AuthUserDto) {
    return this.commentService.create(dto, authUser)
  }

  @ApiOperation({ summary: CommentMessages.GET_ALL_SUMMARY })
  @ApiOkResponse({ description: CommentMessages.GET_ALL_SUCCESS, type: [CommentEntity] })
  @Get()
  getAll() {
    return this.commentService.getAll()
  }

  @ApiOperation({ summary: CommentMessages.GET_ID_SUMMARY })
  @ApiOkResponse({ description: CommentMessages.GET_ID_SUCCESS, type: CommentEntity })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.commentService.getById(+id)
  }

  @ApiOperation({ summary: CommentMessages.UPDATE_SUMMARY })
  @ApiOkResponse({ description: CommentMessages.UPDATE_SUCCESS, type: CommentEntity })
  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateCommentDto) {
    return this.commentService.update(+id, dto)
  }

  @ApiOperation({ summary: CommentMessages.DELETE_SUMMARY })
  @ApiOkResponse({ description: CommentMessages.DELETE_SUCCESS })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.commentService.delete(+id)
  }
}
