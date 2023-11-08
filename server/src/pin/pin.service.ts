import { Injectable, NotFoundException } from '@nestjs/common'
import { Pin } from '@prisma/client'
import { PrismaService } from 'nestjs-prisma'
import { AuthUserDto } from 'src/auth/dto/auth-user.dto'
import { IRes, IResList } from 'src/common/types/app.types'
import { CreatePinDto } from './dto/create-pin.dto'
import { PinPaginationQueryDto, PinQuery } from './dto/pin-query.dto'
import { UpdatePinDto } from './dto/update-pin.dto'
import { PinMessages } from './types/pin.messages'

@Injectable()
export class PinService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createPinDto: CreatePinDto, authUser: AuthUserDto): IRes<Pin> {
    const pin = await this.prisma.pin.create({
      data: {
        ...createPinDto,
        authorId: authUser.userId,
      },
    })

    return {
      data: pin,
      message: PinMessages.CREATE_SUCCESS,
    }
  }

  async getAll(query: PinQuery): IResList<Pin> {
    const data = await this.prisma.pin.findMany({
      orderBy: {
        [query.sortBy]: query.sortOrder,
      },
    })

    return {
      count: data.length,
      data,
      message: PinMessages.GET_SUCCESS,
    }
  }

  async getPagination(query: PinPaginationQueryDto): IResList<Pin> {
    const data = await this.prisma.pin.findMany({
      take: query.pageSize,
      skip: (query.page - 1) * query.pageSize,
      orderBy: {
        createdAt: query.sortOrder,
      },
    })

    return {
      count: data.length,
      data,
      message: PinMessages.GET_SUCCESS,
    }
  }

  async getById(id: number): IRes<Pin> {
    const pin = await this.prisma.pin.findUnique({
      where: { id },
    })

    if (!pin) throw new NotFoundException(PinMessages.NOT_FOUND)

    return {
      data: pin,
      message: PinMessages.GET_SUCCESS,
    }
  }

  async getByAuthor(authUser: AuthUserDto): IResList<Pin> {
    const data = await this.prisma.pin.findMany({
      where: { authorId: authUser.userId },
    })

    return {
      count: data.length,
      data,
      message: PinMessages.GET_SUCCESS,
    }
  }

  async update(id: number, updatePinDto: UpdatePinDto): IRes<Pin> {
    const pin = await this.prisma.pin.update({
      where: { id },
      data: updatePinDto,
    })

    return {
      data: pin,
      message: PinMessages.UPDATE_SUCCESS,
    }
  }

  async delete(id: number): IRes<Pin> {
    await this.prisma.pin.delete({
      where: { id },
    })

    return {
      data: null,
      message: PinMessages.DELETED_SUCCESS,
    }
  }
}
