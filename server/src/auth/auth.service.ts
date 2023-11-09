import { Injectable } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { IRes } from 'src/common/types/app.types'
import { UserService } from 'src/user/user.service'
import { AuthUserDto } from './dto/auth-user.dto'
import { SignInResDto } from './dto/sign-in.dto'
import { SignUpDto, SignUpResDto } from './dto/sign-up.dto'
import { AuthMessages } from './types/auth.messages'

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly userService: UserService,
  ) {}

  async signIn(authUser: AuthUserDto): IRes<SignInResDto> {
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
