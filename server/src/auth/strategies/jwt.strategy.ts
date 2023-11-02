import { Injectable, NotFoundException } from '@nestjs/common'
import { PassportStrategy } from '@nestjs/passport'
import { ExtractJwt, Strategy } from 'passport-jwt'
import { AuthUserDto } from '../dto/auth-user.dto'
import { PrismaClient, User } from '@prisma/client'

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_SECRET,
    })
  }

  async validate(user: AuthUserDto): Promise<AuthUserDto> {
    const prisma = new PrismaClient()
    const userExists = await prisma.user.findUnique({
      where: { id: user.id },
    })
    if (!userExists) {
      throw new NotFoundException('User not found')
    }
    
    return user
  }
}
