import { AppTemplate } from '@/templates/app-template'
import { createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppTemplate />,
    children: [],
  },
])

export default router
