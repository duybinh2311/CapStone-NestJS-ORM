import { HttpStatus, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { User } from '@prisma/client'
import * as bcrypt from 'bcrypt'
import { PrismaService } from 'nestjs-prisma'
import { SignInDto } from './dto/sign-in.dto'
import { AuthMessage } from './types/interface'
import { IResponse } from 'src/interface'

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) {}

  async validateUser(signInDto: SignInDto): Promise<User> {
    const user = await this.prisma.user.findUnique({
      where: { email: signInDto.email },
    })

    if (!user) {
      throw new NotFoundException(AuthMessage.EMAIL_INCORRECT)
    }

    if (!bcrypt.compareSync(signInDto.password, user.password)) {
      throw new UnauthorizedException(AuthMessage.PASSWORD_INCORRECT)
    }

    return user
  }

  async signIn(user: User): IResponse<string> {
    const { password, ...restUser } = user

    return {
      data: this.jwtService.sign(restUser),
      message: AuthMessage.LOGIN_SUCCESSFULLY,
      statusCode: HttpStatus.OK,
    }
  }
}
