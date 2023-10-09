import { FC } from 'react'
import { Outlet } from 'react-router-dom'
import { AppHeader } from '@/layouts/app-header'
import { vars } from '@/configs/theme'

export const AppLayout: FC = () => {
  return (
    <>
      <AppHeader />
      <main
        style={{
          minHeight: 'calc(100vh - 64px - 64px)',
          paddingTop: vars.spacing.md,
        }}
      >
        <Outlet />
      </main>
    </>
  )
}
