import http from '@/services/axios/axios.config'
import { IRes } from '@/types'

import { ProfileUserDto } from './user.types'

export class UserModule {
  static getProfile(): IRes<ProfileUserDto> {
    return http.get('/user/profile')
  }
}
