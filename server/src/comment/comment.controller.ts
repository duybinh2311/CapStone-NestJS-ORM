import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common'
import { ApiCreatedResponse, ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger'

import { AuthUser } from 'src/auth/decorators/auth-user.decorator'

import { CommentService } from './comment.service'
import { CreateCommentDto, UpdateCommentDto } from './dto/comment-req.dto'
import { CommentResDto } from './dto/comment-res.dto'
import { CommentMessages } from './types/comment.messages'

@ApiTags('Comment')
@Controller('comment')
export class CommentController {
  constructor(private readonly commentService: CommentService) {}

  @ApiOperation({ summary: CommentMessages.CREATE_SUMMARY })
  @ApiCreatedResponse({ description: CommentMessages.CREATE_SUCCESS, type: CommentResDto })
  @Post()
  create(@Body() dto: CreateCommentDto, @AuthUser() authUser: AuthUser) {
    return this.commentService.create(dto, authUser)
  }

  @ApiOperation({ summary: CommentMessages.GET_PIN_ID_SUMMARY })
  @ApiOkResponse({ description: CommentMessages.GET_PIN_ID_SUCCESS, type: [CommentResDto] })
  @Get(':pinId')
  getByPinId(@Param('pinId') pinId: string) {
    return this.commentService.getByPinId(+pinId)
  }

  @ApiOperation({ summary: CommentMessages.UPDATE_SUMMARY })
  @ApiOkResponse({ description: CommentMessages.UPDATE_SUCCESS, type: CommentResDto })
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
