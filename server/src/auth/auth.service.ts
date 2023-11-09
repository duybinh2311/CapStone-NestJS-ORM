import { Injectable } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { IRes } from 'src/common/types/app.types'
import { UserService } from 'src/user/user.service'
import { AuthMessages } from './types/auth.messages'
import { SignInResDto, SignUpDto, SignUpResDto } from './dto'
import { AuthUser } from './decorators/auth-user.decorator'

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly userService: UserService,
  ) {}

  async signIn(authUser: AuthUser): IRes<SignInResDto> {
    return {
      data: {
        accessToken: await this.jwtService.signAsync(authUser),
      },
      message: AuthMessages.SIGN_IN_SUCCESS,
    }
  }

  async signUp(dto: SignUpDto): IRes<SignUpResDto> {
    const user = await this.userService.create(dto)

    return {
      data: {
        email: user.email,
        fullName: user.fullName,
        age: user.age,
      },
      message: AuthMessages.SIGN_UP_SUCCESS,
    }
  }
}
