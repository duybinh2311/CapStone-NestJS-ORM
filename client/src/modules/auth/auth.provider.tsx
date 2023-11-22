import { FC, PropsWithChildren, createContext, useContext, useEffect, useState } from 'react'

import { modals } from '@mantine/modals'

import { onModalSignIn } from '@/modals/sign-in.modal'
import { IResponseData } from '@/types'

import { AppModule } from '../app/app.module'
import { UserModule } from '../user/user.module'
import { ProfileUserDto } from '../user/user.types'
import { AuthModule } from './auth.module'
import { AuthContext, SignInFunc, SignInResDto, SignUpFunc, SignUpResDto } from './auth.types'

export const authContext = createContext({} as AuthContext<ProfileUserDto>)
export const useAuth = () => useContext(authContext)

export const AuthProvider: FC<PropsWithChildren> = (props) => {
  /* App State */
  const [profile, setProfile] = useState<ProfileUserDto | null>(null)

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

  const context: AuthContext<ProfileUserDto> = {
    profile,
    signIn,
    signUp,
    signOut,
  }

  return <authContext.Provider value={context}>{props.children}</authContext.Provider>
}
