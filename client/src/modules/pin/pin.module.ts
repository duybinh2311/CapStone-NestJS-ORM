import http from '@/services/axios/axios.config'
import { IRes } from '@/types'

import { CreatePinDto, PinResDto } from './pin.types'

export class PinModule {
  static create(payload: CreatePinDto): IRes<PinResDto> {
    return http.post('/pin/create', payload)
  }
}
