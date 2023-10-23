import { ConflictException, HttpStatus, Injectable } from '@nestjs/common'
import { CreateUserDto } from './dto/create-user.dto'
import { UpdateUserDto } from './dto/update-user.dto'
import { PrismaService } from 'nestjs-prisma'
import { IResponse } from 'src/interface'
import * as bcrypt from 'bcrypt'
import { User } from '@prisma/client'

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  checkEmail(email: string) {
    const isEmailExist = this.prisma.user.findUnique({
      where: { email },
    })

    if (isEmailExist) {
      throw new ConflictException('Email already exists')
    }
  }

  findAll() {
    return `This action returns all user`
  }

  findOne(id: number) {
    return `This action returns a #${id} user`
  }

  async create(createUserDto: CreateUserDto): IResponse<Omit<User, 'password'>> {
    const user = await this.prisma.user.create({
      data: {
        ...createUserDto,
        password: bcrypt.hashSync(createUserDto.password, 10),
      },
    })

    const { password, ...result } = user

    return {
      data: result,
      message: 'Create user successfully',
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
