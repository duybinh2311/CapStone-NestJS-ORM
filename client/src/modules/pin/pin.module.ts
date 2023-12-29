import http from '@/modules/axios/axios.config'
import { IRes, IResList } from '@/types'

import { CreatePinDto, PinPaginationQueryDto, PinQueryDto, PinResDto, SavePinResDto, UpdatePinDto } from './pin.types'

export class PinModule {
  static url = {
    root: '/pin',
    create: '/pin/create',
    save: '/pin/save/:id',
  }

  static create(payload: CreatePinDto): IRes<PinResDto> {
    return http.post(this.url.create, payload)
  }

  static save(id: number): IRes<SavePinResDto> {
    return http.post(this.url.save.replace(':id', `${id}`))
  }

  static getAll(query?: PinQueryDto): IResList<PinResDto> {
    return http.get(this.url.root, { params: query })
  }

  static getPagination(query?: PinPaginationQueryDto): IResList<PinResDto> {
    return http.get(this.url.root, { params: query })
  }

  static getById(id: number): IRes<PinResDto> {
    return http.get(`${this.url.root}/${id}`)
  }

  static update(id: number, payload: UpdatePinDto): IRes<PinResDto> {
    return http.patch(`${this.url.root}/${id}`, payload)
  }

  static delete(id: number): IRes<null> {
    return http.delete(`${this.url.root}/${id}`)
  }
}
