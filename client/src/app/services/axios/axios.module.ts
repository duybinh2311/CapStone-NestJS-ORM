import { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from 'axios'

import { AuthModule } from '@/modules/auth/auth.module'

export class AxiosModule {
  static URL_MAIN_API = 'http://localhost:3000'
  static timeout = 30000

  static requestHandler(config: InternalAxiosRequestConfig) {
    const token = AuthModule.getToken()
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  }

  static requestErrorHandler(error: AxiosError) {
    return Promise.reject(error.response?.data)
  }

  static responseHandler(response: AxiosResponse) {
    return response.data
  }

  static responseErrorHandler(error: AxiosError) {
    return Promise.reject(error.response?.data)
  }
}
