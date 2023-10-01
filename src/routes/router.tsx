import { HomePage } from '@/pages/home/home-page'
import { AppTemplate } from '@/templates/app-template'
import { createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppTemplate />,
    children: [
      {
        element: <HomePage />,
        index: true,
      },
    ],
  },
])

export default router
