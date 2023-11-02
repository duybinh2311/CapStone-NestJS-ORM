import { HttpStatus, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import * as bcrypt from 'bcrypt'
import { IRes } from 'src/app.types'
import { UserService } from 'src/user/user.service'
import { AuthMessage } from './auth.types'
import { AuthUserDto } from './dto/auth-user.dto'
import { SignInDto, SignInResDto } from './dto/sign-in.dto'
import { SignUpDto, SignUpResDto } from './dto/sign-up.dto'
import { ProfileUserDto } from './dto/profile-user'

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private userService: UserService,
  ) {}

  async validateUser(signInDto: SignInDto): Promise<AuthUserDto> {
    const user = await this.userService.findByEmail(signInDto.email)

    if (!user) {
      throw new NotFoundException(AuthMessage.EMAIL_NOT_FOUND)
    }

    if (!bcrypt.compareSync(signInDto.password, user.password)) {
      throw new UnauthorizedException(AuthMessage.PASSWORD_INCORRECT)
    }
    return { id: user.id }
  }

  async signIn(authUser: AuthUserDto): Promise<SignInResDto> {
    return {
      token: this.jwtService.sign(authUser),
      message: AuthMessage.LOGIN_SUCCESSFULLY,
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
      message: AuthMessage.SIGN_UP_SUCCESSFULLY,
      statusCode: HttpStatus.CREATED,
    }
  }

  async getProfile(authUser: AuthUserDto): IRes<ProfileUserDto> {
    const user = await this.userService.findById(authUser.id)

    return {
      data: {
        email: user.email,
        fullName: user.fullName,
        age: user.age,
        avatar: user.avatar,
      },
      message: AuthMessage.GET_PROFILE_SUCCESSFULLY,
      statusCode: HttpStatus.OK,
    }
  }
}
