const AppRoutes = {
  home: '/',
  detail: (id: number) => `/pin/${id}`,
  profile: {
    root: '/profile',
    edit: '/profile/edit',
  },
  upload: '/upload',
}

export default AppRoutes
