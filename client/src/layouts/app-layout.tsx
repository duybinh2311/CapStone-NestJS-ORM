import { AppHeader } from '@/layouts/app-header'
import { FC } from 'react'
import { Outlet } from 'react-router-dom'

export const AppLayout: FC = () => {
  return (
    <>
      <AppHeader />
      <main
        style={{
          minHeight: 'calc(100vh - 64px - 64px)',
        }}
      >
        <Outlet />
      </main>
    </>
  )
}
