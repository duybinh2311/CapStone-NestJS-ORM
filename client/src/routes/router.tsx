import { HomePage } from '@/pages/home'
import { AppLayout } from '@/layouts/app-layout'
import { createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        element: <HomePage />,
        index: true,
      },
    ],
  },
])

export default router
