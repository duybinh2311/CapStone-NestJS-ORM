import { ProfileUserDto } from '../user/user.types'

export enum AuthEnum {
  ACCESS_TOKEN = 'accessToken',
}

export interface SignInDto {
  email: string
  password: string
}

export interface SignUpDto {
  email: string
  password: string
  fullName: string
  age: number
}

export interface SignInResDto {
  accessToken: string
}

export interface SignUpResDto {
  email: string
  fullName: string
  age: number
}

export interface AuthContext {
  profile: ProfileUserDto | null
  signIn: (payload: SignInDto) => void
  signUp: (payload: SignUpDto) => void
  signOut: () => void
}
