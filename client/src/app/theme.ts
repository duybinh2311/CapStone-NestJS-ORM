import { Container, createTheme } from '@mantine/core'
import { themeToVars } from '@mantine/vanilla-extract'

export const theme = createTheme({
  primaryColor: 'dark',
  primaryShade: 9,
  components: {
    Container: Container.extend({
      defaultProps: {
        size: 'xl',
      },
    }),
  },
})

export const vars = themeToVars(theme)
