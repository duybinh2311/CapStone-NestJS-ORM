import { FC } from 'react'
import { Outlet } from 'react-router-dom'
import { AppFooter } from '@/layouts/app-footer'
import { AppHeader } from '@/layouts/app-header'

export const AppTemplate: FC = () => {
  return (
    <>
      <AppHeader />
      <main>
        <Outlet />
      </main>
      <AppFooter />
    </>
  )
}
