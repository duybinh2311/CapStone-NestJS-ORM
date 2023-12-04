import { createContext, FC, PropsWithChildren, useState, useEffect } from 'react'

import { modals } from '@mantine/modals'

import { onModalSignIn } from '@/modals/sign-in.modal'
import { IResponseData } from '@/types'

import { AppModule } from '../app/app.module'
import { AuthModule } from '../auth/auth.module'
import { SignInResDto, SignUpResDto } from '../auth/auth.types'
import { UserModule } from '../user/user.module'
import { ProfileUserResDto } from '../user/user.types'
import { AccountContext, SignInFunc, SignUpFunc } from './account.types'

export const accountContext = createContext({} as AccountContext<ProfileUserResDto>)

export const AccountProvider: FC<PropsWithChildren> = (props) => {
  /* App State */
  const [profile, setProfile] = useState<ProfileUserResDto | null>(null)

  /* Logic */
  const signIn: SignInFunc = (payload) => {
    AppModule.onPromise<IResponseData<SignInResDto>>({
      promise: AuthModule.signIn(payload),
      action: {
        success(res) {
          AuthModule.saveToken(res.data.accessToken)
          UserModule.getProfile().then((res) => setProfile(res.data))
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

  const signOut = () => {
    AuthModule.removeToken()
    setProfile(null)
  }

  useEffect(() => {
    const accessToken = AuthModule.getToken()
    if (accessToken) {
      UserModule.getProfile().then((res) => setProfile(res.data))
    }
  }, [])

  const context: AccountContext<ProfileUserResDto> = {
    profile,
    signIn,
    signUp,
    signOut,
  }

  return <accountContext.Provider value={context}>{props.children}</accountContext.Provider>
}
