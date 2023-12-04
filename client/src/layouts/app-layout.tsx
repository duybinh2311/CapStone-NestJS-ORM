import { FC } from 'react'
import { Outlet } from 'react-router-dom'

import { AppHeader } from '@/layouts/app-header'

import { AccountWrapper } from './account-wrapper'

export const AppLayout: FC = () => {
  return (
    <>
      <AppHeader />

      <AccountWrapper>
        <main
          style={{
            minHeight: 'calc(100vh - 64px - 64px)',
          }}
        >
          <Outlet />
        </main>
      </AccountWrapper>
    </>
  )
}
