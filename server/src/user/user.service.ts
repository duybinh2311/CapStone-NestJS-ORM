import { ConflictException, HttpStatus, Injectable } from '@nestjs/common'
import * as bcrypt from 'bcrypt'
import { PrismaService } from 'nestjs-prisma'
import { CreateUserDto, CreateUserResDto } from './dto/create-user.dto'
import { UpdateUserDto } from './dto/update-user.dto'
import { UserMessage } from './user.types'
import { IRes } from 'src/app.types'

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async checkEmailExist(email: string): Promise<void> {
    const isEmailExist = await this.prisma.user.findUnique({
      where: { email },
    })

    if (isEmailExist) throw new ConflictException(UserMessage.EMAIL_EXIST)
  }

  findAll() {
    return `This action returns all user`
  }

  findOne(id: number) {
    return `This action returns a #${id} user`
  }

  async create(createUserDto: CreateUserDto): IRes<CreateUserResDto> {
    await this.checkEmailExist(createUserDto.email)

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
