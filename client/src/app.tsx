import { FC } from 'react'
import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css'

import { MantineProvider } from '@mantine/core'
import '@mantine/core/styles.css'
import { ModalsProvider } from '@mantine/modals'
import { Notifications } from '@mantine/notifications'
import '@mantine/notifications/styles.css'

import { theme } from '@/app/configs/app.theme'
import { store } from '@/app/services/redux/store'
import '@/assets/styles/global-style.scss'
import router from '@/routes/router'

import { AccountProvider } from './app/providers/app.provider'

export const App: FC = () => {
  return (
    <AccountProvider>
      <Provider store={store}>
        <MantineProvider theme={theme}>
          <Notifications />
          <ModalsProvider>
            <RouterProvider router={router} />
          </ModalsProvider>
        </MantineProvider>
      </Provider>
    </AccountProvider>
  )
}
