import { SignInDto, SignUpDto } from '../auth/auth.types'
import { PinResDto } from '../pin/pin.types'

export type SignInFunc = (payload: SignInDto) => void
export type SignUpFunc = (payload: SignUpDto) => void
export type SignOutFunc = () => void
export type GetProfileFunc = () => void
export type GetSavedPinsFunc = () => void
export type GetCreatedPinsFunc = () => void

export interface AccountContext<T> {
  profile: T | null
  savedPins: PinResDto[]
  createdPins: PinResDto[]
  signIn: SignInFunc
  signUp: SignUpFunc
  signOut: SignOutFunc
  getProfile: GetProfileFunc
  getSavedPins: GetSavedPinsFunc
  getCreatedPins: GetCreatedPinsFunc
}
