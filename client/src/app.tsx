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

import { AuthProvider } from './modules/auth/auth.provider'
import { store } from './modules/redux/store'
import { theme } from './theme'

export const App: FC = () => {
  return (
    <AuthProvider>
      <Provider store={store}>
        <MantineProvider theme={theme}>
          <ModalsProvider>
            <Notifications />
            <RouterProvider router={router} />
          </ModalsProvider>
        </MantineProvider>
      </Provider>
    </AuthProvider>
  )
}
