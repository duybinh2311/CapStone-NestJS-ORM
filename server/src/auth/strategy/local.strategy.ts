import { Injectable, UnauthorizedException, NotFoundException } from '@nestjs/common'
import { PassportStrategy } from '@nestjs/passport'
import { Strategy } from 'passport-local'
import { AuthService } from '../auth.service'
import { AuthMessage, ValidationStatus } from '../types/interface'
import { User } from '@prisma/client'

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({
      usernameField: 'email',
      passwordField: 'password',
    })
  }

  async validate(email: string, password: string): Promise<User> {
    const result = await this.authService.validateUser({ email, password })

    switch (result.validationStatus) {
      case ValidationStatus.USER_NOT_FOUND:
        throw new NotFoundException(AuthMessage.EMAIL_INCORRECT)

      case ValidationStatus.PASSWORD_INCORRECT:
        throw new UnauthorizedException(AuthMessage.PASSWORD_INCORRECT)

      case ValidationStatus.VALIDATE_SUCCESSFULLY:
        return result.user
    }
  }
}
