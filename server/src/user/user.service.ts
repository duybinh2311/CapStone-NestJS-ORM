import { ConflictException, Injectable } from '@nestjs/common'

import * as bcrypt from 'bcrypt'
import { PrismaService } from 'nestjs-prisma'

import { AuthUser } from 'src/auth/decorators/auth-user.decorator'
import { SignUpDto } from 'src/auth/dto/auth-req.dto'
import { IRes } from 'src/common/types/app.types'

import { UpdateUserDto } from './dto/user-req.dto'
import { ProfileUserResDto } from './dto/user-res.dto'
import { UserEntity } from './entities/user.entity'
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

  async create(dto: SignUpDto): Promise<UserEntity> {
    await this.checkEmailExists(dto.email)

    return await this.prisma.user.create({
      data: {
        ...dto,
        password: await bcrypt.hash(dto.password, 10),
      },
    })
  }

  async getById(id: number): Promise<UserEntity> {
    return await this.prisma.user.findUnique({
      where: { id },
    })
  }

  async getByEmail(email: string): Promise<UserEntity> {
    return await this.prisma.user.findUnique({
      where: { email },
    })
  }

  async update(id: number, dto: UpdateUserDto): Promise<UserEntity> {
    return await this.prisma.user.update({
      where: { id },
      data: dto,
    })
  }

  async getProfile(authUser: AuthUser): IRes<ProfileUserResDto> {
    const user = await this.getById(authUser.userId)

    return {
      data: {
        id: user.id,
        email: user.email,
        fullName: user.fullName,
        age: user.age,
        avatar: user.avatar,
        userName: user.userName,
        about: user.about,
      },
      message: UserMessages.GET_PROFILE_SUCCESS,
    }
  }

  async updateProfile(authUser: AuthUser, dto: UpdateUserDto): IRes<ProfileUserResDto> {
    const user = dto.email && (await this.getByEmail(dto.email))
    if (user && user.id !== authUser.userId) {
      throw new ConflictException(UserMessages.EMAIL_EXISTS)
    }

    const userUpdate = await this.update(authUser.userId, dto)

    return {
      data: {
        id: userUpdate.id,
        email: userUpdate.email,
        fullName: userUpdate.fullName,
        age: userUpdate.age,
        avatar: userUpdate.avatar,
        userName: user.userName,
        about: user.about,
      },
      message: UserMessages.UPDATE_PROFILE_SUCCESS,
    }
  }
}
