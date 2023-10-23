import { Injectable } from '@nestjs/common'
import { SignInDto } from './dto/sign-in.dto'
import { PrismaService } from 'nestjs-prisma'
import { JwtService } from '@nestjs/jwt'
import * as bcrypt from 'bcrypt'
import { ValidateStatus, ResponseLocalStrategy, AuthMessage, PayloadUser } from './interface'

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) {}

  async validateUser(signInDto: SignInDto): Promise<ResponseLocalStrategy> {
    const user = await this.prisma.user.findUnique({
      where: { email: signInDto.email },
    })

    if (!user) {
      return { validateStatus: ValidateStatus.USER_NOT_FOUND }
    }

    if (!bcrypt.compareSync(signInDto.password, user.password)) {
      return { validateStatus: ValidateStatus.PASSWORD_INCORRECT }
    }

    const { password, ...restUser } = user
    return {
      user: restUser,
      validateStatus: ValidateStatus.VALIDATE_SUCCESSFULLY,
    }
  }

  async signIn(user: PayloadUser) {
    return {
      accessToken: this.jwtService.sign(user),
    }
  }
}
