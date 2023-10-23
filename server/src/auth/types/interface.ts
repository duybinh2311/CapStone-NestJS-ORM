import { User } from '@prisma/client'

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

export interface ResponseLocalStrategy {
  user?: User
  validateStatus?: ValidateStatus
}
