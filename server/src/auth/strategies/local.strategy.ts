import { Injectable } from '@nestjs/common'
import { PassportStrategy } from '@nestjs/passport'
import { User } from '@prisma/client'
import { Strategy } from 'passport-local'
import { AuthService } from '../auth.service'
import { AuthUserDto } from '../dto/auth-user'

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({
      usernameField: 'email',
      passwordField: 'password',
    })
  }

  async validate(email: string, password: string): Promise<AuthUserDto> {
    const authUser = await this.authService.validateUser({ email, password })
    return authUser
  }
}
