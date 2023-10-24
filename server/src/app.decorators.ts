import { createParamDecorator, ExecutionContext } from '@nestjs/common'
import { Request } from 'express'
import { SetMetadata } from '@nestjs/common'

export const AuthUser = createParamDecorator((data: unknown, context: ExecutionContext) => {
  const req: Request = context.switchToHttp().getRequest()
  return req.user
})

export const SKIP_JWT_KEY = 'skipJwtAuth'
export const SkipJwtAuth = () => SetMetadata(SKIP_JWT_KEY, true)
