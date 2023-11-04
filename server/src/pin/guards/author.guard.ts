import { CanActivate, ExecutionContext, ForbiddenException, Injectable } from '@nestjs/common'
import { PinService } from '../pin.service'
import { PinMessages } from '../pin.types'

@Injectable()
export class AuthorPinGuard implements CanActivate {
  constructor(private pinService: PinService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest()

    const { user, params } = request
    const { id } = params

    const pin = await this.pinService.findById(+id)

    switch (request.method) {
      case 'PATCH':
        if (pin.authorId !== user.userId) throw new ForbiddenException(PinMessages.FORBIDDEN_UPDATE)

      case 'DELETE':
        if (pin.authorId !== user.userId) throw new ForbiddenException(PinMessages.FORBIDDEN_DELETE)

      default:
        return true
    }
  }
}
