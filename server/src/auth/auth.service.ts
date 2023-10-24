import { Injectable } from '@nestjs/common'
import { SignInDto } from './dto/sign-in.dto'
import { PrismaService } from 'nestjs-prisma'
import { JwtService } from '@nestjs/jwt'
import * as bcrypt from 'bcrypt'
import { ValidationStatus, ResponseLocalStrategy } from './types/interface'
import { User } from '@prisma/client'

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
      return { validationStatus: ValidationStatus.USER_NOT_FOUND }
    }

    if (!bcrypt.compareSync(signInDto.password, user.password)) {
      return { validationStatus: ValidationStatus.PASSWORD_INCORRECT }
    }

    return {
      user,
      validationStatus: ValidationStatus.VALIDATE_SUCCESSFULLY,
    }
  }

  async signIn(user: User) {
    const { password, ...restUser } = user
    return {
      accessToken: this.jwtService.sign(restUser),
    }
  }
}
