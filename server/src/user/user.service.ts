import { ConflictException, Injectable } from '@nestjs/common'
import { User } from '@prisma/client'
import * as bcrypt from 'bcrypt'
import { PrismaService } from 'nestjs-prisma'
import { UserMessage } from './user.types'
import { CreateUserDto } from './dto/create-user.dto'
import { UpdateUserDto } from './dto/update-user.dto'

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async checkEmailExists(email: string): Promise<void> {
    const emailExists = await this.prisma.user.findUnique({
      where: { email },
    })

    if (emailExists) throw new ConflictException(UserMessage.EMAIL_EXISTS)
  }

  async findById(id: number): Promise<User> {
    return await this.prisma.user.findUnique({
      where: { id },
    })
  }

  async findByEmail(email: string): Promise<User> {
    return await this.prisma.user.findUnique({
      where: { email },
    })
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

  async update(id: number, userUpdate: UpdateUserDto) {
    const user = await this.findByEmail(userUpdate.email)

    if (user && user.id !== id) throw new ConflictException(UserMessage.EMAIL_EXISTS)

    return await this.prisma.user.update({
      where: { id },
      data: userUpdate,
    })
  }
}
