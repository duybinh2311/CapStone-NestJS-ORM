import { HttpStatus, Injectable, NotFoundException } from '@nestjs/common'
import { CreatePinDto } from './dto/create-pin.dto'
import { UpdatePinDto } from './dto/update-pin.dto'
import { PrismaService } from 'nestjs-prisma'
import { IRes } from 'src/app.types'
import { PinMessages } from './pin.types'
import { AuthUserDto } from 'src/auth/dto/auth-user.dto'
import { Pin } from '@prisma/client'

@Injectable()
export class PinService {
  constructor(private readonly prisma: PrismaService) {}

  async checkPinExist(id: number): Promise<void> {
    const pin = await this.prisma.pin.findUnique({
      where: { id },
    })
    if (!pin) throw new NotFoundException(PinMessages.NOT_FOUND)
  }

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

  findAll() {
    return `This action returns all pin`
  }

  async findById(id: number) {
    return await this.prisma.pin.findUnique({
      where: { id },
    })
  }

  async update(id: number, updatePinDto: UpdatePinDto): IRes<Pin> {
    await this.checkPinExist(id)

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
    await this.checkPinExist(id)

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
