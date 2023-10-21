import { Injectable } from '@nestjs/common'
import { CreateUserDto } from './dto/create-user.dto'
import { UpdateUserDto } from './dto/update-user.dto'
import { PrismaService } from 'src/prisma.service'

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async create(createUserDto: CreateUserDto) {
    const { email, password, fullName, age, avatar } = createUserDto
    await this.prisma.user.create({
      data: {
        email,
        password,
        fullName,
        age,
        avatar,
      },
    })
    return 'This action adds a new user'
  }

  findAll() {
    return `This action returns all user`
  }

  findOne(id: number) {
    return `This action returns a #${id} user`
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    try {
      const { fullName, email, age } = updateUserDto
      await this.prisma.user.update({
        where: { id },
        data: { fullName, email, age },
      })
      return `This action updates a #${id} user`
    } catch (error) {
      console.log(error)
      throw error.message
    }
  }

  remove(id: number) {
    return `This action removes a #${id} user`
  }
}
