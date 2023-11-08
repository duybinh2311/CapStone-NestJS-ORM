import { ConflictException, Injectable } from '@nestjs/common'
import { User } from '@prisma/client'
import * as bcrypt from 'bcrypt'
import { PrismaService } from 'nestjs-prisma'
import { CreateUserDto } from './dto/create-user.dto'
import { UpdateUserDto } from './dto/update-user.dto'
import { UserMessages } from './types/user.messages'

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async checkEmailExists(email: string): Promise<void> {
    const emailExists = await this.prisma.user.findUnique({
      where: { email },
    })

    if (emailExists) throw new ConflictException(UserMessages.EMAIL_EXISTS)
  }

  async create(createUserDto: CreateUserDto): Promise<User> {
    await this.checkEmailExists(createUserDto.email)

    return await this.prisma.user.create({
      data: {
        ...createUserDto,
        password: await bcrypt.hash(createUserDto.password, 10),
      },
    })
  }

  async getById(id: number): Promise<User> {
    return await this.prisma.user.findUnique({
      where: { id },
    })
  }

  async getByEmail(email: string): Promise<User> {
    return await this.prisma.user.findUnique({
      where: { email },
    })
  }

  async update(id: number, userUpdate: UpdateUserDto): Promise<User> {
    const user = userUpdate.email && (await this.getByEmail(userUpdate.email))

    if (user && user.id !== id) throw new ConflictException(UserMessages.EMAIL_EXISTS)

    return await this.prisma.user.update({
      where: { id },
      data: userUpdate,
    })
  }
}
