import { CanActivate, ExecutionContext, ForbiddenException, Injectable } from '@nestjs/common'
import { PinService } from '../../pin/pin.service'
import { PinMessages } from '../../pin/types/pin.messages'
import { Pin } from '@prisma/client'
import { Request } from 'express'
import { AuthUser } from '../decorators/auth-user.decorator'

@Injectable()
export class AuthorGuard implements CanActivate {
  constructor(private pinService: PinService) {}

  private canAction = (authUser: AuthUser, pin: Pin, req: Request) => {
    const allowAction = pin.authorId === authUser.userId

    switch (req.method) {
      case 'PATCH':
        if (!allowAction) throw new ForbiddenException(PinMessages.FORBIDDEN_UPDATE)

      case 'DELETE':
        if (!allowAction) throw new ForbiddenException(PinMessages.FORBIDDEN_DELETE)

      default:
        return true
    }
  }

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const req = context.switchToHttp().getRequest()

    const { user, params } = req
    const { id } = params

    const pin = (await this.pinService.getById(+id)).data

    return this.canAction(user, pin, req)
  }
}
