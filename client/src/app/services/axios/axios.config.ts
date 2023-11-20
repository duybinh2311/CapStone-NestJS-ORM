import axios from 'axios'

import { AxiosModule } from './axios.module'

const http = axios.create({
  baseURL: AxiosModule.URL_MAIN_API,
  timeout: AxiosModule.timeout,
})

http.interceptors.request.use(AxiosModule.requestHandler, AxiosModule.requestErrorHandler)

http.interceptors.response.use(AxiosModule.responseHandler, AxiosModule.responseErrorHandler)

export default http
