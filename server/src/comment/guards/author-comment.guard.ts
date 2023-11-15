import { CanActivate, ExecutionContext, ForbiddenException, Injectable } from '@nestjs/common'

import { Request } from 'express'

import { AuthUser } from 'src/auth/decorators/auth-user.decorator'
import { CommentService } from 'src/comment/comment.service'
import { CommentEntity } from 'src/comment/entities/comment.entity'

import { CommentMessages } from '../types/comment.messages'

@Injectable()
export class AuthorCommentGuard implements CanActivate {
  constructor(private commentService: CommentService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const req = context.switchToHttp().getRequest()

    const { user, params } = req
    const { id } = params

    const comment = (await this.commentService.getById(+id)).data

    return this.canAction(user, comment, req)
  }

  private canAction(authUser: AuthUser, comment: CommentEntity, req: Request) {
    const allowAction = comment.authorId === authUser.userId

    switch (req.method) {
      case 'PATCH':
        if (!allowAction) throw new ForbiddenException(CommentMessages.FORBIDDEN_UPDATE)

      case 'DELETE':
        if (!allowAction) throw new ForbiddenException(CommentMessages.FORBIDDEN_DELETE)

      default:
        return true
    }
  }
}
