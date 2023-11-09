import { Injectable } from '@nestjs/common'
import { PrismaService } from 'nestjs-prisma'
import { SortOrderEnum } from 'src/common/dto/_query.dto'
import { IRes, IResList } from 'src/common/types/app.types'
import { CommentMessages } from './types/comment.messages'
import { CreateCommentDto, CommentResDto, UpdateCommentDto } from './dto'
import { AuthUser } from 'src/auth/decorators/auth-user.decorator'

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

  update(id: number, updateCommentDto: UpdateCommentDto) {
    return `This action updates a #${id} comment`
  }

  delete(id: number) {
    return `This action removes a #${id} comment`
  }
}
