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

export type SignInFunc = (payload: SignInDto) => void
export type SignUpFunc = (payload: SignUpDto) => void
export type SignOutFunc = () => void

export interface AuthContext<T> {
  profile: T | null
  signIn: SignInFunc
  signUp: SignUpFunc
  signOut: SignOutFunc
}
