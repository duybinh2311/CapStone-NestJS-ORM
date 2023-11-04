import { HttpStatus, Injectable } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { IRes } from 'src/common/app.types'
import { UserService } from 'src/user/user.service'
import { AuthMessages } from './auth.types'
import { AuthUserDto } from './dto/auth-user.dto'
import { ProfileUserDto } from './dto/profile-user'
import { SignInResDto } from './dto/sign-in.dto'
import { SignUpDto, SignUpResDto } from './dto/sign-up.dto'

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private userService: UserService,
  ) {}

  async signIn(authUser: AuthUserDto): Promise<SignInResDto> {
    return {
      token: await this.jwtService.signAsync(authUser),
      message: AuthMessages.SIGN_IN_SUCCESSFULLY,
      statusCode: HttpStatus.OK,
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
      message: AuthMessages.SIGN_UP_SUCCESSFULLY,
      statusCode: HttpStatus.CREATED,
    }
  }

  async getProfile(authUser: AuthUserDto): IRes<ProfileUserDto> {
    const user = await this.userService.findById(authUser.userId)

    return {
      data: {
        email: user.email,
        fullName: user.fullName,
        age: user.age,
        avatar: user.avatar,
      },
      message: AuthMessages.GET_PROFILE_SUCCESSFULLY,
      statusCode: HttpStatus.OK,
    }
  }

  async updateProfile(authUser: AuthUserDto, profileUserDto: ProfileUserDto) {
    const user = await this.userService.update(authUser.userId, profileUserDto)

    return {
      data: {
        email: user.email,
        fullName: user.fullName,
        age: user.age,
        avatar: user.avatar,
      },
      message: AuthMessages.UPDATE_PROFILE_SUCCESSFULLY,
      statusCode: HttpStatus.OK,
    }
  }
}
