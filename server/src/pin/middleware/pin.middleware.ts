import { Injectable, NestMiddleware } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { Request, Response, NextFunction } from 'express'
import { UpdatePinDto } from '../dto/update-pin.dto'
import { PrismaService } from 'nestjs-prisma'

@Injectable()
export class CheckPinAuthor implements NestMiddleware {
  constructor(
    private prisma: PrismaService,
  ) {}
  use(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params
    const token = req.headers.authorization
    

    next()
  }
}
