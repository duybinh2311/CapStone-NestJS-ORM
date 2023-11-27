import { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from 'axios'

import { AuthModule } from '../auth/auth.module'

export class AxiosModule {
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
