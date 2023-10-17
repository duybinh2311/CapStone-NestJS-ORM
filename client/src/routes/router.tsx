import { HomePage } from '@/pages/home'
import { AppLayout } from '@/layouts/app-layout'
import { createBrowserRouter } from 'react-router-dom'
import { PinPage } from '@/pages/pin'
import { ProfilePage } from '@/pages/profile'

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        element: <HomePage />,
        index: true,
      },
      {
        element: <PinPage />,
        path: '/pin/:id',
      },
      {
        element: <ProfilePage />,
        path: '/profile',
      },
    ],
  },
])

export default router
