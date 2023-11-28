import http from '@/modules/axios/axios.config'
import { IRes, IResList, SortOrderEnum } from '@/types'

import { CreatePinDto, PinPaginationQueryDto, PinQueryDto, PinResDto, PinSortByEnum, SavePinResDto } from './pin.types'

export class PinModule {
  static url = {
    root: '/pin',
    create: '/pin/create',
    save: '/pin/save/:id',
  }

  static create(payload: CreatePinDto): IRes<PinResDto> {
    return http.post(this.url.create, payload)
  }

  static save(id: string): IRes<SavePinResDto> {
    return http.post(this.url.save.replace(':id', id))
  }

  static getAll(query?: PinQueryDto): IResList<PinResDto> {
    return http.get(this.url.root, { params: query })
  }

  static getPagination(query?: PinPaginationQueryDto): IResList<PinResDto> {
    return http.get(this.url.root, { params: query })
  }
}
