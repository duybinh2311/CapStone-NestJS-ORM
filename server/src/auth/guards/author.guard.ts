import { CanActivate, ExecutionContext, ForbiddenException, Injectable } from '@nestjs/common'
import { PinService } from '../../pin/pin.service'
import { PinMessages } from '../../pin/types/pin.messages'
import { AuthUserDto } from 'src/auth/dto/auth-user.dto'
import { Pin } from '@prisma/client'
import { Request } from 'express'

@Injectable()
export class AuthorPinGuard implements CanActivate {
  constructor(private pinService: PinService) {}

  private canAction = (user: AuthUserDto, pin: Pin, req: Request) => {
    const allowAction = pin.authorId === user.userId

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

    const pin = await this.pinService.findById(+id)

    return this.canAction(user, pin, req)
  }
}
