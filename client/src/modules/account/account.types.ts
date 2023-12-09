import { SignInDto, SignUpDto } from '../auth/auth.types'
import { PinResDto } from '../pin/pin.types'

export type SignInFunc = (payload: SignInDto) => void
export type SignUpFunc = (payload: SignUpDto) => void
export type SignOutFunc = () => void
export type GetProfileFunc = () => void
export type GetSavedPinsFunc = () => void

export interface AccountContext<T> {
  profile: T | null
  savedPins: PinResDto[]
  signIn: SignInFunc
  signUp: SignUpFunc
  signOut: SignOutFunc
  getProfile: GetProfileFunc
  getSavedPins: GetSavedPinsFunc
}
