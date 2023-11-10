import { CanActivate, ExecutionContext, ForbiddenException, Injectable } from '@nestjs/common'

import { Pin } from '@prisma/client'
import { Request } from 'express'

import { AuthUser } from 'src/auth/decorators/auth-user.decorator'
import { PinService } from 'src/pin/pin.service'
import { PinMessages } from 'src/pin/types/pin.messages'

@Injectable()
export class AuthorPinGuard implements CanActivate {
  constructor(private pinService: PinService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const req = context.switchToHttp().getRequest()

    const { user, params } = req
    const { id } = params

    const pin = (await this.pinService.getById(+id)).data

    return this.canAction(user, pin, req)
  }

  private canAction(authUser: AuthUser, pin: Pin, req: Request) {
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
}
