import { FC } from 'react'
import { Outlet } from 'react-router-dom'
import { AppFooter } from '@/layouts/app-footer'
import { AppHeader } from '@/layouts/app-header'
import { vars } from '@/_theme'

export const AppTemplate: FC = () => {
  console.log(vars.smallerThan('xs'))
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
      <AppFooter />
    </>
  )
}
