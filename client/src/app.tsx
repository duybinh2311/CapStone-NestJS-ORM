import { FC } from 'react'
import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'

import { MantineProvider } from '@mantine/core'
import '@mantine/core/styles.css'
import { ModalsProvider } from '@mantine/modals'
import { Notifications } from '@mantine/notifications'
import '@mantine/notifications/styles.css'

import '@/assets/styles/global-style.scss'
import router from '@/routes/router'

import { hooks } from './hooks/css-hooks'
import { AccountProvider } from './modules/account/account.provider'
import { store } from './modules/redux/store'
import { theme } from './theme'

export const App: FC = () => {
  return (
    <Provider store={store}>
      <AccountProvider>
        <MantineProvider theme={theme}>
          <style dangerouslySetInnerHTML={{ __html: hooks }} />
          <ModalsProvider>
            <Notifications />
            <RouterProvider router={router} />
          </ModalsProvider>
        </MantineProvider>
      </AccountProvider>
    </Provider>
  )
}
