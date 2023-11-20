import { jwtDecode } from 'jwt-decode'

import http from '@/app/services/axios/axios.config'
import { IRes } from '@/app/types/app.types'
import { StorageUtils } from '@/utils/storage.utils'

import { AuthEnum, SignInDto, SignInResDto, SignUpDto, SignUpResDto } from './auth.types'

export class AuthModule {
  static getToken(): null | string {
    const accessToken = StorageUtils.local.get(AuthEnum.ACCESS_TOKEN)
    if (!accessToken) return null

    const decodedToken = jwtDecode(accessToken)
    const currentTime = Date.now() / 1000
    if (typeof decodedToken.exp === 'number' && decodedToken.exp < currentTime) {
      StorageUtils.local.remove(AuthEnum.ACCESS_TOKEN)
      return null
    }

    return accessToken
  }

  static saveToken(token: string): void {
    StorageUtils.local.save(AuthEnum.ACCESS_TOKEN, token)
  }

  static removeToken(): void {
    StorageUtils.local.remove(AuthEnum.ACCESS_TOKEN)
  }

  static signIn(payload: SignInDto): IRes<SignInResDto> {
    return http.post('/auth/sign-in', payload)
  }

  static signUp(payload: SignUpDto): IRes<SignUpResDto> {
    return http.post('/auth/sign-up', payload)
  }
}
