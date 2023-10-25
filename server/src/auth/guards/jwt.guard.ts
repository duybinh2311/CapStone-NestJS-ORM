import { Injectable, ExecutionContext } from '@nestjs/common'
import { Reflector } from '@nestjs/core'
import { AuthGuard } from '@nestjs/passport'
import { SKIP_JWT_KEY } from '../decorators/skip-jwt.decorator'

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  constructor(private reflector: Reflector) {
    super()
  }

  canActivate(context: ExecutionContext) {
    const skipAuth = this.reflector.getAllAndOverride<boolean>(SKIP_JWT_KEY, [context.getHandler(), context.getClass()])

    return skipAuth ? skipAuth : super.canActivate(context)
  }
}
