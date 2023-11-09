import { Injectable, NotFoundException } from '@nestjs/common'
import { PrismaService } from 'nestjs-prisma'
import { IRes, IResList } from 'src/common/types/app.types'
import { CreatePinDto, PinResDto, UpdatePinDto } from './dto'
import { PinPaginationQueryDto, PinQueryDto } from './dto/pin-query.dto'
import { PinMessages } from './types/pin.messages'
import { AuthUser } from 'src/auth/decorators/auth-user.decorator'

@Injectable()
export class PinService {
  constructor(private readonly prisma: PrismaService) {}

  async create(dto: CreatePinDto, authUser: AuthUser): IRes<PinResDto> {
    const pin = await this.prisma.pin.create({
      data: {
        ...dto,
        authorId: authUser.userId,
      },
      include: {
        author: {
          select: {
            fullName: true,
            avatar: true,
          },
        },
      },
    })

    return {
      data: pin,
      message: PinMessages.CREATE_SUCCESS,
    }
  }

  async getAll(query: PinQueryDto): IResList<PinResDto> {
    const data = await this.prisma.pin.findMany({
      orderBy: {
        [query.sortBy]: query.sortOrder,
      },
      include: {
        author: {
          select: {
            fullName: true,
            avatar: true,
          },
        },
      },
    })

    return {
      count: data.length,
      data,
      message: PinMessages.GET_ALL_SUCCESS,
    }
  }

  async getPagination(query: PinPaginationQueryDto): IResList<PinResDto> {
    const data = await this.prisma.pin.findMany({
      take: query.pageSize,
      skip: (query.page - 1) * query.pageSize,
      orderBy: {
        createdAt: query.sortOrder,
      },
      include: {
        author: {
          select: {
            fullName: true,
            avatar: true,
          },
        },
      },
    })

    return {
      count: data.length,
      data,
      message: PinMessages.GET_PAGINATION_SUCCESS,
    }
  }

  async getById(id: number): IRes<PinResDto> {
    const pin = await this.prisma.pin.findUnique({
      where: { id },
      include: {
        author: {
          select: {
            fullName: true,
            avatar: true,
          },
        },
      },
    })

    if (!pin) throw new NotFoundException(PinMessages.NOT_FOUND)

    return {
      data: pin,
      message: PinMessages.GET_ID_SUCCESS,
    }
  }

  async getByAuthor(authUser: AuthUser): IResList<PinResDto> {
    const data = await this.prisma.pin.findMany({
      where: { authorId: authUser.userId },
      include: {
        author: {
          select: {
            fullName: true,
            avatar: true,
          },
        },
      },
    })

    return {
      count: data.length,
      data,
      message: PinMessages.GET_AUTHOR_SUCCESS,
    }
  }

  async update(id: number, dto: UpdatePinDto): IRes<PinResDto> {
    const pin = await this.prisma.pin.update({
      where: { id },
      data: dto,
      include: {
        author: {
          select: {
            fullName: true,
            avatar: true,
          },
        },
      },
    })

    return {
      data: pin,
      message: PinMessages.UPDATE_SUCCESS,
    }
  }

  async delete(id: number): IRes<PinResDto> {
    await this.prisma.pin.delete({
      where: { id },
    })

    return {
      data: null,
      message: PinMessages.DELETE_SUCCESS,
    }
  }
}
