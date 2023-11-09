import * as bcrypt from 'bcrypt'
import { User } from '@prisma/client'
import { ConflictException, Injectable } from '@nestjs/common'
import { PrismaService } from 'nestjs-prisma'
import { CreateUserDto } from './dto/create-user.dto'
import { UpdateUserDto } from './dto/update-user.dto'
import { UserMessages } from './types/user.messages'
import { AuthUserDto } from 'src/auth/dto/auth-user.dto'
import { IRes } from 'src/common/types/app.types'
import { ProfileUserDto } from './dto/profile-user'

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async checkEmailExists(email: string): Promise<void> {
    const emailExists = await this.prisma.user.findUnique({
      where: { email },
    })

    if (emailExists) throw new ConflictException(UserMessages.EMAIL_EXISTS)
  }

  async create(dto: CreateUserDto): Promise<User> {
    await this.checkEmailExists(dto.email)

    return await this.prisma.user.create({
      data: {
        ...dto,
        password: await bcrypt.hash(dto.password, 10),
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

  async update(authUser: AuthUserDto, dto: UpdateUserDto): Promise<User> {
    const user = dto.email && (await this.getByEmail(dto.email))

    if (user && user.id !== authUser.userId) throw new ConflictException(UserMessages.EMAIL_EXISTS)

    return await this.prisma.user.update({
      where: { id: authUser.userId },
      data: dto,
    })
  }

  async getProfile(authUser: AuthUserDto): IRes<ProfileUserDto> {
    const user = await this.getById(authUser.userId)

    return {
      data: {
        email: user.email,
        fullName: user.fullName,
        age: user.age,
        avatar: user.avatar,
      },
      message: UserMessages.GET_PROFILE_SUCCESS,
    }
  }

  async updateProfile(authUser: AuthUserDto, dto: ProfileUserDto): IRes<ProfileUserDto> {
    const user = await this.update(authUser, dto)

    return {
      data: {
        email: user.email,
        fullName: user.fullName,
        age: user.age,
        avatar: user.avatar,
      },
      message: UserMessages.UPDATE_PROFILE_SUCCESS,
    }
  }
}
