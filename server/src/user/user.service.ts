import { ConflictException, HttpStatus, Injectable } from '@nestjs/common'
import { CreateUserDto } from './dto/create-user.dto'
import { UpdateUserDto } from './dto/update-user.dto'
import { PrismaService } from 'nestjs-prisma'
import { IResponse } from 'src/interface'
import * as bcrypt from 'bcrypt'
import { User } from '@prisma/client'
import { UserCreateStatus, UserMessage } from './types/interface'

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async checkEmail(email: string): Promise<UserCreateStatus | null> {
    const isEmailExist = await this.prisma.user.findUnique({
      where: { email },
    })

    if (isEmailExist) {
      return UserCreateStatus.EMAIL_EXIST
    }

    return null
  }

  findAll() {
    return `This action returns all user`
  }

  findOne(id: number) {
    return `This action returns a #${id} user`
  }

  async create(createUserDto: CreateUserDto) {
    if (await this.checkEmail(createUserDto.email)) {
      throw new ConflictException(UserMessage.EMAIL_EXIST)
    }

    const user = await this.prisma.user.create({
      data: {
        ...createUserDto,
        password: bcrypt.hashSync(createUserDto.password, 10),
      },
    })

    const { password, ...result } = user

    return {
      data: result,
      message: UserMessage.CREATE_USER_SUCCESSFULLY,
      statusCode: HttpStatus.CREATED,
    }
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`
  }

  remove(id: number) {
    return `This action removes a #${id} user`
  }
}
