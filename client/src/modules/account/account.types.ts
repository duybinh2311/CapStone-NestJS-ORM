import { SignInDto, SignUpDto } from '../auth/auth.types'

export type SignInFunc = (payload: SignInDto) => void
export type SignUpFunc = (payload: SignUpDto) => void
export type SignOutFunc = () => void

export interface AccountContext<T> {
  profile: T | null
  signIn: SignInFunc
  signUp: SignUpFunc
  signOut: SignOutFunc
}
