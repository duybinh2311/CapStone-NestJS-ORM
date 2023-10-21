import '@/assets/styles/scss/global-style.scss'
import { theme } from '@/configs/theme'
import router from '@/routes/router'
import { store } from '@/services/redux/store'
import { MantineProvider } from '@mantine/core'
import '@mantine/core/styles.css'
import { ModalsProvider } from '@mantine/modals'
import { FC } from 'react'
import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'

export const App: FC = () => {
  return (
    <Provider store={store}>
      <MantineProvider theme={theme}>
        <ModalsProvider>
          <RouterProvider router={router} />
        </ModalsProvider>
      </MantineProvider>
    </Provider>
  )
}
