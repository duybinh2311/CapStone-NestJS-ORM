import { StorageUtils } from '@/utils/shared/storage.utils'
import { AuthEnum } from './auth.types'
import { jwtDecode } from 'jwt-decode'

export class AuthModule {
  static getToken() {
    const accessToken = StorageUtils.local.get(AuthEnum.ACCESS_TOKEN)

    const decodedToken = jwtDecode(accessToken)
    const currentTime = Date.now() / 1000
    if (typeof decodedToken.exp === 'number' && decodedToken.exp < currentTime) {
      StorageUtils.local.remove(AuthEnum.ACCESS_TOKEN)
      return null
    }

    return accessToken
  }

  static saveToken(token: string) {
    StorageUtils.local.save(AuthEnum.ACCESS_TOKEN, token)
  }

  static removeToken() {
    StorageUtils.local.remove(AuthEnum.ACCESS_TOKEN)
  }
}
