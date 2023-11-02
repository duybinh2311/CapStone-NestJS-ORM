import { Injectable, NestMiddleware, NotFoundException } from '@nestjs/common'
import { PrismaClient } from '@prisma/client'
import { Request, Response, NextFunction } from 'express'

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log('Request...')
    const userId = req.headers.authorization
    const prisma = new PrismaClient()
    console.log(userId)

    // const user = prisma.user.findUnique({
    //   where: { id: userId as number },
    // })

    // if (!user) throw new NotFoundException('User not found')

    next()
  }
}
