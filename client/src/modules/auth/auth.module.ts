import { jwtDecode } from 'jwt-decode'

import { IRes } from '@/types'
import { LocalUtils } from '@/utils/local.utils'

import http from '../axios/axios.config'
import { AuthEnum, SignInDto, SignInResDto, SignUpDto, SignUpResDto } from './auth.types'

export class AuthModule {
  static url = {
    root: '/auth',
    signIn: '/auth/sign-in',
    signUp: '/auth/sign-up',
  }

  static getToken(): null | string {
    const accessToken = LocalUtils.get(AuthEnum.ACCESS_TOKEN)
    if (!accessToken) return null

    const decodedToken = jwtDecode(accessToken)
    const currentTime = Date.now() / 1000
    if (typeof decodedToken.exp === 'number' && decodedToken.exp < currentTime) {
      LocalUtils.remove(AuthEnum.ACCESS_TOKEN)
      return null
    }

    return accessToken
  }

  static saveToken(token: string): void {
    LocalUtils.save(AuthEnum.ACCESS_TOKEN, token)
  }

  static removeToken(): void {
    LocalUtils.remove(AuthEnum.ACCESS_TOKEN)
  }

  static signIn(payload: SignInDto): IRes<SignInResDto> {
    return http.post(this.url.signIn, payload)
  }

  static signUp(payload: SignUpDto): IRes<SignUpResDto> {
    return http.post(this.url.signUp, payload)
  }
}
