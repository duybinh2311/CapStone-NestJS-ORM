import http from '@/modules/axios/axios.config'
import { IRes } from '@/types'

import { ProfileUserResDto } from './user.types'

export class UserModule {
  static url = {
    root: '/user',
    profile: '/user/profile',
  }

  static getProfile(): IRes<ProfileUserResDto> {
    return http.get(this.url.profile)
  }
}
