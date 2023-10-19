import { HomePage } from '@/pages/home/home-page'
import { AppLayout } from '@/layouts/app-layout'
import { createBrowserRouter } from 'react-router-dom'
import { PinPage } from '@/pages/pin/pin-page'
import { ProfilePage } from '@/pages/profile/profile-page'
import { EditProfilePage } from '@/pages/profile/edit/edit-profile-page'
import { UploadPage } from '@/pages/upload/upload-page'

const router = createBrowserRouter([
  {
    path: '/',
    Component: AppLayout,
    children: [
      {
        Component: HomePage,
        index: true,
      },
      {
        Component: PinPage,
        path: 'pin/:id',
      },
      {
        path: 'profile',
        children: [
          {
            Component: ProfilePage,
            index: true,
          },
          {
            Component: EditProfilePage,
            path: 'edit-profile',
          },
        ],
      },
      {
        Component: UploadPage,
        path: 'upload',
      },
    ],
  },
])

export default router
