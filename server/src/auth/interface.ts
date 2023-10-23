import { User } from '@prisma/client'
import { Extensions } from '@prisma/client/runtime/library'

export enum AuthMessage {
  EMAIL_INCORRECT = 'Email is incorrect',
  PASSWORD_INCORRECT = 'Password is incorrect',
  LOGIN_SUCCESSFULLY = 'Login successfully',
}

export enum ValidateStatus {
  USER_NOT_FOUND = 'USER_NOT_FOUND',
  PASSWORD_INCORRECT = 'PASSWORD_INCORRECT',
  VALIDATE_SUCCESSFULLY = 'VALIDATE_SUCCESSFULLY',
}

export type PayloadUser = Omit<User, 'password'>

export interface ResponseLocalStrategy {
  user?: PayloadUser
  validateStatus?: ValidateStatus
}
