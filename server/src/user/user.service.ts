import { ConflictException, Injectable } from '@nestjs/common'
import { User } from '@prisma/client'
import * as bcrypt from 'bcrypt'
import { PrismaService } from 'nestjs-prisma'
import { UserMessage } from './user.types'
import { CreateUserDto } from './dto/create-user.dto'
import { UpdateUserDto } from './dto/update-user.dto'

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async checkEmailExist(email: string): Promise<void> {
    const emailExist = await this.prisma.user.findUnique({
      where: { email },
    })

    if (emailExist) throw new ConflictException(UserMessage.EMAIL_EXIST)
  }

  async create(createUserDto: CreateUserDto): Promise<User> {
    await this.checkEmailExist(createUserDto.email)

    return await this.prisma.user.create({
      data: {
        ...createUserDto,
        password: await bcrypt.hash(createUserDto.password, 10),
      },
    })
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

  async update(id: number, userUpdate: UpdateUserDto) {
    await this.checkEmailExist(userUpdate.email)

    return await this.prisma.user.update({
      where: { id },
      data: userUpdate,
    })
  }
}
