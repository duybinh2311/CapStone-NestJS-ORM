import http from '@/modules/axios/axios.config'
import { IRes, IResList } from '@/types'

import { CreatePinDto, PinQueryDto, PinResDto } from './pin.types'

export class PinModule {
  static url = {
    root: '/pin',
    create: '/pin/create',
  }

  static create(payload: CreatePinDto): IRes<PinResDto> {
    return http.post(this.url.create, payload)
  }

  static getAll(query?: PinQueryDto): IResList<PinResDto> {
    return http.get(this.url.root, { params: query })
  }
}
