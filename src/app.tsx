import { FC } from 'react'
import '@mantine/core/styles.css'
import { MantineProvider } from '@mantine/core'
import { Provider } from 'react-redux'
import { store } from '@/services/redux/store'
import theme from '@/theme'
import router from '@/routes/router'
import { RouterProvider } from 'react-router-dom'

export const App: FC = () => {
  return (
    <Provider store={store}>
      <MantineProvider theme={theme}>
        <RouterProvider router={router} />
      </MantineProvider>
    </Provider>
  )
}
