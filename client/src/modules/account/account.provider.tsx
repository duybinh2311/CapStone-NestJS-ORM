import { FC, PropsWithChildren, createContext, useEffect, useState } from 'react'

import { modals } from '@mantine/modals'

import { onModalSignIn } from '@/modals/sign-in.modal'
import { IResponseData } from '@/types'

import { AppModule } from '../app/app.module'
import { AuthModule } from '../auth/auth.module'
import { SignInResDto, SignUpResDto } from '../auth/auth.types'
import { PinResDto } from '../pin/pin.types'
import { UserModule } from '../user/user.module'
import { ProfileUserResDto } from '../user/user.types'
import { AccountContext, GetProfileFunc, GetSavedPinsFunc, SignInFunc, SignOutFunc, SignUpFunc } from './account.types'

export const accountContext = createContext({} as AccountContext<ProfileUserResDto>)

export const AccountProvider: FC<PropsWithChildren> = (props) => {
  /* App State */
  const [profile, setProfile] = useState<ProfileUserResDto | null>(null)
  const [savedPins, setSavedPins] = useState<PinResDto[]>([])

  /* Logic */
  const signIn: SignInFunc = (payload) => {
    AppModule.onPromise<IResponseData<SignInResDto>>({
      promise: AuthModule.signIn(payload),
      action: {
        success(res) {
          AuthModule.saveToken(res.data.accessToken)
          getProfile()
          getSavedPins()
          modals.closeAll()
        },
      },
    })
  }

  const signUp: SignUpFunc = (payload) => {
    AppModule.onPromise<IResponseData<SignUpResDto>>({
      promise: AuthModule.signUp(payload),
      action: {
        success() {
          modals.closeAll()
          onModalSignIn()
        },
      },
    })
  }

  const signOut: SignOutFunc = () => {
    AuthModule.removeToken()
    setProfile(null)
  }

  const getProfile: GetProfileFunc = () => {
    UserModule.getProfile().then((res) => setProfile(res.data))
  }

  const getSavedPins: GetSavedPinsFunc = () => {
    UserModule.getSavedPins().then((res) => setSavedPins(res.data))
  }

  useEffect(() => {
    const accessToken = AuthModule.getToken()
    if (accessToken) {
      getProfile()
      getSavedPins()
    }
  }, [])

  const context: AccountContext<ProfileUserResDto> = {
    profile,
    savedPins,
    signIn,
    signUp,
    signOut,
    getProfile,
    getSavedPins,
  }

  return <accountContext.Provider value={context}>{props.children}</accountContext.Provider>
}
