import { ExtractJwt, Strategy } from 'passport-jwt'

import { Injectable, UnauthorizedException } from '@nestjs/common'
import { PassportStrategy } from '@nestjs/passport'

import { UserService } from 'src/user/user.service'

import { AuthUser } from '../decorators/auth-user.decorator'

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private userService: UserService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_SECRET,
    })
  }

  async validate(authUser: AuthUser): Promise<AuthUser> {
    const userExists = await this.userService.getById(authUser.userId)

    if (!userExists) throw new UnauthorizedException()

    return authUser
  }
}
