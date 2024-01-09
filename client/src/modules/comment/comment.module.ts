import { IRes, IResList } from '@/types'

import http from '../axios/axios.config'
import { CommentResDto, CreateCommentDto, UpdateCommentDto } from './comment.types'

export class CommentModule {
  static url = {
    root: '/comment',
    getByPinId: '/comment/:pinId',
  }

  static create(payload: CreateCommentDto): IRes<CommentResDto> {
    return http.post(this.url.root, payload)
  }

  static getByPinId(pinId: number): IResList<CommentResDto> {
    return http.get(this.url.getByPinId.replace(':pinId', `${pinId}`))
  }

  static update(id: number, payload: UpdateCommentDto): IRes<CommentResDto> {
    return http.patch(`${this.url.root}/${id}`, payload)
  }

  static delete(id: number): IRes<null> {
    return http.delete(`${this.url.root}/${id}`)
  }
}
