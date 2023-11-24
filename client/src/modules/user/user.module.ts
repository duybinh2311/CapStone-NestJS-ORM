import http from '@/services/axios/axios.config'
import { IRes } from '@/types'

import { ProfileUserDto } from './user.types'

export class UserModule {
  static url = {
    root: '/user',
    profile: '/user/profile',
  }

  static getProfile(): IRes<ProfileUserDto> {
    return http.get(this.url.profile)
  }
}
