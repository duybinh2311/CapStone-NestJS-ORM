import { useContext } from 'react'

import { accountContext } from '@/modules/account/account.provider'

export const useAccount = () => useContext(accountContext)
