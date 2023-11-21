import { createContext, useContext, FC, PropsWithChildren, useState } from 'react'

import { modals } from '@mantine/modals'

import { IResponseData } from '@/types'

import { AppModule } from '../app/app.module'
import { ProfileUserDto } from '../user/user.types'
import { AuthModule } from './auth.module'
import { AuthContext, SignInDto, SignInResDto, SignUpDto, SignUpResDto } from './auth.types'

export const authContext = createContext<AuthContext>({} as AuthContext)
export const useAuth = () => useContext(authContext)

export const AuthProvider: FC<PropsWithChildren> = (props) => {
  /* App State */
  const [profile, setProfile] = useState<ProfileUserDto | null>(null)

  /* Logic */
  const signIn = (payload: SignInDto) => {
    AppModule.onPromise<IResponseData<SignInResDto>>({
      promise: AuthModule.signIn(payload),
      action: {
        success(res) {
          AuthModule.saveToken(res.data.accessToken)
          modals.closeAll()
        },
      },
    })
  }

  const signUp = (payload: SignUpDto) => {
    AppModule.onPromise<IResponseData<SignUpResDto>>({
      promise: AuthModule.signUp(payload),
      action: {
        success() {
          modals.closeAll()
        },
      },
    })
  }

  const signOut = () => {
    AuthModule.removeToken()
    setProfile(null)
  }

  const context: AuthContext = {
    profile,
    signIn,
    signUp,
    signOut,
  }

  return <authContext.Provider value={context}>{props.children}</authContext.Provider>
}
