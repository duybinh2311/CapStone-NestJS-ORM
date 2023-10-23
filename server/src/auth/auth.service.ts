import { Injectable, UnauthorizedException } from '@nestjs/common'
import { SignInDto } from './dto/sign-in.dto'
import { User } from '@prisma/client'
import { PrismaService } from 'nestjs-prisma'
import { JwtService } from '@nestjs/jwt'
import * as bcrypt from 'bcrypt'

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) {}

  async signIn(signInDto: SignInDto): Promise<{ accessToken: string; status: AuthStatus }> {
    const user = await this.prisma.user.findUnique({
      where: { email: signInDto.email },
    })
    if (!user) {
      return { accessToken: null, status: AuthStatus.USER_NOT_FOUND }
    }

    const comparePassword = bcrypt.compareSync(signInDto.password, user.password)
    if (!comparePassword) {
      return { accessToken: null, status: AuthStatus.PASSWORD_INCORRECT }
    }

    const { password, ...payload } = user
    return {
      accessToken: this.jwtService.sign(payload),
      status: AuthStatus.LOGIN_SUCCESS,
    }
  }
}
