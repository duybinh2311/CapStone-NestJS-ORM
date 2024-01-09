import { useNavigate } from 'react-router-dom'

import AppRoutes from '@/routes/routes'

export const useAppNavigate = () => {
  /* Hook Init */
  const navigate = useNavigate()

  /* Logic */
  const navigateUtils = {
    home: () => navigate(AppRoutes.home),
    detail: (id: number) => () => navigate(AppRoutes.detail.replace(':id', `${id}`)),
    profile: {
      root: () => navigate(AppRoutes.profile.root),
      edit: () => navigate(AppRoutes.profile.edit),
    },
    upload: () => navigate(AppRoutes.upload),
  }

  return navigateUtils
}
