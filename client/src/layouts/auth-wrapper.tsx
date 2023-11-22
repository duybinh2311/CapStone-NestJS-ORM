import { FC, PropsWithChildren } from 'react'

import { useAuth } from '@/modules/auth/auth.provider'
import { AuthPage } from '@/pages/auth/auth-page'

interface AuthWrapperProps extends PropsWithChildren {}

export const AuthWrapper: FC<AuthWrapperProps> = (props) => {
  /* App State */
  const { profile } = useAuth()

  return profile ? props.children : <AuthPage />
}
