import { Injectable, UnauthorizedException } from '@nestjs/common'
import { PassportStrategy } from '@nestjs/passport'
import { ExtractJwt, Strategy } from 'passport-jwt'
import { UserService } from 'src/user/user.service'
import { AuthMessage } from '../auth.types'
import { AuthUserDto } from '../dto/auth-user.dto'

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private userService: UserService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_SECRET,
    })
  }

  async validate(authUser: AuthUserDto): Promise<AuthUserDto> {
    const userExists = await this.userService.findById(authUser.id)

    if (!userExists) throw new UnauthorizedException(AuthMessage.TOKEN_INVALID)

    return authUser
  }
}
