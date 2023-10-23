import { IResponse } from 'src/interface'

export enum AuthMessage {
  EMAIL_INCORRECT = 'Email is incorrect',
  PASSWORD_INCORRECT = 'Password is incorrect',
  LOGIN_SUCCESSFULLY = 'Login successfully',
}

export enum ValidateStatus {
  USER_NOT_FOUND = 'USER_NOT_FOUND',
  PASSWORD_INCORRECT = 'PASSWORD_INCORRECT',
}

export interface ResponseLocalStrategy {
  accessToken?: string
  validateStatus?: ValidateStatus
  message?: AuthMessage
}
