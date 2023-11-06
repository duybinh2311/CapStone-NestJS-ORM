import { HttpStatus, Injectable, NotFoundException } from '@nestjs/common'
import { Pin } from '@prisma/client'
import { PrismaService } from 'nestjs-prisma'
import { AuthUserDto } from 'src/auth/dto/auth-user.dto'
import { IRes, IResList } from 'src/common/types/app.types'
import { CreatePinDto } from './dto/create-pin.dto'
import { PinQueryDto } from './dto/pin-query.dto'
import { UpdatePinDto } from './dto/update-pin.dto'
import { PinMessages } from './types/pin.messages'

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

  async findAll(query: PinQueryDto): IResList<Pin> {
    const queryOption = {}

    if (query.page) Object.assign(queryOption, { skip: query.pageSize * (query.page - 1) })
    if (query.pageSize) Object.assign(queryOption, { take: query.pageSize })
    if (query.sortOrder) Object.assign(queryOption, { orderBy: { createdAt: query.sortOrder } })

    const data = await this.prisma.pin.findMany(queryOption)

    return {
      data,
      message: PinMessages.GET_ALL_SUCCESSFULLY,
      statusCode: HttpStatus.OK,
      count: data.length,
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
