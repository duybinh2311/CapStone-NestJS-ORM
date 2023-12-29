import { FC, PropsWithChildren } from 'react'

import { useAccount } from '@/hooks/account.hook'
import { AuthPage } from '@/pages/auth/auth-page'

interface AccountWrapperProps extends PropsWithChildren {}

export const AccountWrapper: FC<AccountWrapperProps> = (props) => {
  /* App State */
  const { profile } = useAccount()

  return profile ? props.children : <AuthPage />
}
