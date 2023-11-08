import { Injectable } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { IRes } from 'src/common/types/app.types'
import { UserService } from 'src/user/user.service'
import { AuthUserDto } from './dto/auth-user.dto'
import { ProfileUserDto } from './dto/profile-user'
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

  async signUp(signUpDto: SignUpDto): IRes<SignUpResDto> {
    const user = await this.userService.create(signUpDto)

    return {
      data: {
        email: user.email,
        fullName: user.fullName,
        age: user.age,
      },
      message: AuthMessages.SIGN_UP_SUCCESS,
    }
  }

  async getProfile(authUser: AuthUserDto): IRes<ProfileUserDto> {
    const user = await this.userService.getById(authUser.userId)

    return {
      data: {
        email: user.email,
        fullName: user.fullName,
        age: user.age,
        avatar: user.avatar,
      },
      message: AuthMessages.GET_PROFILE_SUCCESS,
    }
  }

  async updateProfile(authUser: AuthUserDto, profileUserDto: ProfileUserDto): IRes<ProfileUserDto> {
    const user = await this.userService.update(authUser, profileUserDto)

    return {
      data: {
        email: user.email,
        fullName: user.fullName,
        age: user.age,
        avatar: user.avatar,
      },
      message: AuthMessages.UPDATE_PROFILE_SUCCESS,
    }
  }
}
