import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common'
import { PassportStrategy } from '@nestjs/passport'
import * as bcrypt from 'bcrypt'
import { Strategy } from 'passport-local'
import { UserService } from 'src/user/user.service'
import { AuthMessages } from '../auth.types'
import { AuthUserDto } from '../dto/auth-user.dto'

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private userService: UserService) {
    super({
      usernameField: 'email',
      passwordField: 'password',
    })
  }

  async validate(email: string, password: string): Promise<AuthUserDto> {
    const user = await this.userService.findByEmail(email)

    if (!user) {
      throw new NotFoundException(AuthMessages.EMAIL_NOT_FOUND)
    }

    if (!(await bcrypt.compare(password, user.password))) {
      throw new UnauthorizedException(AuthMessages.PASSWORD_INCORRECT)
    }

    return { userId: user.id }
  }
}
