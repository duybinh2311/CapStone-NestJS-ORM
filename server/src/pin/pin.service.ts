import { HttpStatus, Injectable, NotFoundException } from '@nestjs/common'
import { Pin } from '@prisma/client'
import { PrismaService } from 'nestjs-prisma'
import { AuthUserDto } from 'src/auth/dto/auth-user.dto'
import { IRes, IResList } from 'src/common/types/app.types'
import { CreatePinDto } from './dto/create-pin.dto'
import { UpdatePinDto } from './dto/update-pin.dto'
import { PinMessages } from './types/pin.messages'
import { PinPaginationQueryDto, PinQuery } from './dto/pin-query.dto'

@Injectable()
export class PinService {
  constructor(private readonly prisma: PrismaService) {}

  async create(authUser: AuthUserDto, createPinDto: CreatePinDto): IRes<Pin> {
    const pin = await this.prisma.pin.create({
      data: {
        ...createPinDto,
        authorId: authUser.userId,
      },
    })

    return {
      data: pin,
      message: PinMessages.UPLOAD_SUCCESSFULLY,
      statusCode: HttpStatus.CREATED,
    }
  }

  async findAll(query: PinQuery): IResList<Pin> {
    return {
      count: await this.prisma.pin.count(),
      data: await this.prisma.pin.findMany({
        orderBy: {
          [query.sortBy]: query.sortOrder,
        },
      }),
      message: PinMessages.GET_ALL_SUCCESSFULLY,
      statusCode: HttpStatus.OK,
    }
  }

  async findAllPagination(query: PinPaginationQueryDto): IResList<Pin> {
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
      message: PinMessages.GET_ALL_SUCCESSFULLY,
      statusCode: HttpStatus.OK,
    }
  }

  async findById(id: number): Promise<Pin> {
    const pin = await this.prisma.pin.findUnique({
      where: { id },
    })

    if (!pin) throw new NotFoundException(PinMessages.NOT_FOUND)

    return pin
  }

  async update(id: number, updatePinDto: UpdatePinDto): IRes<Pin> {
    const pin = await this.prisma.pin.update({
      where: { id },
      data: updatePinDto,
    })

    return {
      data: pin,
      message: PinMessages.UPDATE_SUCCESSFULLY,
      statusCode: HttpStatus.OK,
    }
  }

  async remove(id: number): IRes<Pin> {
    await this.prisma.pin.delete({
      where: { id },
    })
    console.log('red')

    return {
      data: null,
      message: PinMessages.DELETED_SUCCESSFULLY,
      statusCode: HttpStatus.OK,
    }
  }
}
