import axios from 'axios'

import { AppModule } from '@/modules/app/app.module'

import { AxiosModule } from './axios.module'

const http = axios.create({
  baseURL: AppModule.config.APP_API_URL,
  timeout: AppModule.config.APP_API_TIMEOUT,
})

http.interceptors.request.use(AxiosModule.requestHandler, AxiosModule.requestErrorHandler)

http.interceptors.response.use(AxiosModule.responseHandler, AxiosModule.responseErrorHandler)

export default http
