import { FC } from 'react'
import { Outlet } from 'react-router-dom'

import { AppHeader } from '@/layouts/app-header'

import { AuthWrapper } from './auth-wrapper'

export const AppLayout: FC = () => {
  return (
    <>
      <AppHeader />

      <AuthWrapper>
        <main
          style={{
            minHeight: 'calc(100vh - 64px - 64px)',
          }}
        >
          <Outlet />
        </main>
      </AuthWrapper>
    </>
  )
}
