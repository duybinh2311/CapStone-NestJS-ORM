import { HttpStatus, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import * as bcrypt from 'bcrypt'
import { PrismaService } from 'nestjs-prisma'
import { AuthMessage } from './auth.types'
import { AuthUserDto } from './dto/auth-user.dto'
import { SignInDto, SignInResDto } from './dto/sign-in.dto'
import { UpdateProfileDto } from './dto/update-profile.dto'
import { IRes } from 'src/app.types'

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) {}

  async validateUser(signInDto: SignInDto): Promise<AuthUserDto> {
    const user = await this.prisma.user.findUnique({
      where: { email: signInDto.email },
    })

    if (!user) {
      throw new NotFoundException(AuthMessage.EMAIL_NOT_FOUND)
    }

    if (!bcrypt.compareSync(signInDto.password, user.password)) {
      throw new UnauthorizedException(AuthMessage.PASSWORD_INCORRECT)
    }
    const { password, ...restUser } = user
    return restUser
  }

  async signIn(authUser: AuthUserDto): Promise<SignInResDto> {
    return {
      token: this.jwtService.sign(authUser),
      message: AuthMessage.LOGIN_SUCCESSFULLY,
      statusCode: HttpStatus.OK,
    }
  }

  getProfile(authUser: AuthUserDto): AuthUserDto {
    return authUser
  }

  async updateProfile(authUser: AuthUserDto, profile: UpdateProfileDto): IRes<UpdateProfileDto> {
    const user = await this.prisma.user.update({
      where: { id: authUser.id },
      data: profile,
    })

    return {
      data: {
        age: user.age,
        avatar: user.avatar,
        email: user.email,
        fullName: user.fullName,
      },
      message: AuthMessage.UPDATE_PROFILE_SUCCESSFULLY,
      statusCode: HttpStatus.OK,
    }
  }
}
