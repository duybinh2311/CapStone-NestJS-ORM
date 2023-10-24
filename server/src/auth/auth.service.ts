import { HttpStatus, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { User } from '@prisma/client'
import * as bcrypt from 'bcrypt'
import { PrismaService } from 'nestjs-prisma'
import { SignInDto, SignInResDto } from './dto/sign-in.dto'
import { AuthMessage } from './auth.types'
import { IRes } from 'src/app.types'
import { AuthUserDto } from './dto/auth-user'

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
      throw new NotFoundException(AuthMessage.EMAIL_INCORRECT)
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
}
