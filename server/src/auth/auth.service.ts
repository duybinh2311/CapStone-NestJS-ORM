import { Injectable } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'

import { IRes } from 'src/common/types/app.types'
import { UserService } from 'src/user/user.service'

import { AuthUser } from './decorators/auth-user.decorator'
import { SignUpDto } from './dto/auth-req.dto'
import { SignInResDto, SignUpResDto } from './dto/auth-res.dto'
import { AuthMessages } from './types/auth.messages'

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
