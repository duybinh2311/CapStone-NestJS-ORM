import { FC, PropsWithChildren, createContext, useContext, useState } from 'react'

import { modals } from '@mantine/modals'

import { AppModule } from '@/modules/app/app.module'
import { AuthModule } from '@/modules/auth/auth.module'
import { SignInDto, SignInResDto } from '@/modules/auth/auth.types'
import { ProfileUserDto } from '@/modules/user/user.types'

import { IResponseData } from '../types/app.types'

interface AppContext {
  profile: ProfileUserDto | null
  signIn: (payload: SignInDto) => void
}

export const AccountContext = createContext<AppContext>({} as AppContext)
export const useAccount = () => useContext(AccountContext)

export const AccountProvider: FC<PropsWithChildren> = (props) => {
  /* App State */
  const [profile, setProfile] = useState<ProfileUserDto | null>(null)

  /* Logic */
  const signIn = async (payload: SignInDto) => {
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

  const context: AppContext = {
    profile,
    signIn,
  }

  return <AccountContext.Provider value={context}>{props.children}</AccountContext.Provider>
}
