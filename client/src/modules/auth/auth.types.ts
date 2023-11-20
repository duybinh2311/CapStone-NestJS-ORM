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
