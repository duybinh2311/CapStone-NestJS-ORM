import { AuthModule } from '@/modules/auth/auth.module'
import axios from 'axios'

const URL_MAIN_API = 'http://localhost:3000'

const http = axios.create({
  baseURL: URL_MAIN_API,
  timeout: 30000,
  // headers: {
  //   'Content-Type': 'application/json',
  // },
})

http.interceptors.request.use((config) => {
  const token = AuthModule.getToken()
  if (token) config.headers.Authorization = `Bearer ${token}`

  return config
})
