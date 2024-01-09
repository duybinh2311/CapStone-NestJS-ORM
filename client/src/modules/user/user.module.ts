import http from '@/modules/axios/axios.config'
import { IRes, IResList } from '@/types'

import { PinResDto } from '../pin/pin.types'
import { ProfileUserResDto, UpdateUserDto } from './user.types'

export class UserModule {
  static url = {
    root: '/user',
    profile: '/user/profile',
    createdPins: '/user/created-pins',
    savedPins: '/user/saved-pins',
  }

  static getProfile(): IRes<ProfileUserResDto> {
    return http.get(this.url.profile)
  }

  static updateProfile(payload: UpdateUserDto): IRes<ProfileUserResDto> {
    return http.patch(this.url.profile, payload)
  }

  static getCreatedPins(): IResList<PinResDto> {
    return http.get(this.url.createdPins)
  }

  static getSavedPins(): IResList<PinResDto> {
    return http.get(this.url.savedPins)
  }
}
