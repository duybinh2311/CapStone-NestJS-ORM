import { createParamDecorator, ExecutionContext } from '@nestjs/common'
import { Request } from 'express'

export const AuthUser = createParamDecorator((_: unknown, context: ExecutionContext) => {
  const req: Request = context.switchToHttp().getRequest()
  return req.user
})
