import { Injectable, NotFoundException } from '@nestjs/common'

import { PrismaService } from 'nestjs-prisma'

import { AuthUser } from 'src/auth/decorators/auth-user.decorator'
import { SortOrderEnum } from 'src/common/dto/app-query.dto'
import { IRes, IResList } from 'src/common/types/app.types'

import { CreateCommentDto, UpdateCommentDto } from './dto/comment-req.dto'
import { CommentResDto } from './dto/comment-res.dto'
import { CommentMessages } from './types/comment.messages'

@Injectable()
export class CommentService {
  constructor(private readonly prisma: PrismaService) {}

  async create(dto: CreateCommentDto, authUser: AuthUser): IRes<CommentResDto> {
    const comment = await this.prisma.comment.create({
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
      data: comment,
      message: CommentMessages.CREATE_SUCCESS,
    }
  }

  async getByPinId(id: number): IResList<CommentResDto> {
    const data = await this.prisma.comment.findMany({
      where: {
        pinId: id,
      },
      orderBy: {
        createdAt: SortOrderEnum.DESC,
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
      message: CommentMessages.GET_PIN_ID_SUCCESS,
    }
  }

  async getById(id: number): IRes<CommentResDto> {
    const comment = await this.prisma.comment.findUnique({
      where: {
        id,
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

    if (!comment) throw new NotFoundException(CommentMessages.NOT_FOUND)

    return {
      data: comment,
      message: CommentMessages.GET_ID_SUCCESS,
    }
  }

  async update(id: number, updateCommentDto: UpdateCommentDto): IRes<CommentResDto> {
    const comment = await this.prisma.comment.update({
      where: { id },
      data: updateCommentDto,
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
      data: comment,
      message: CommentMessages.UPDATE_SUCCESS,
    }
  }

  delete(id: number) {
    return `This action removes a #${id} comment`
  }
}
