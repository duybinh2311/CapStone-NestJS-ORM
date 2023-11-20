import { rgba } from '@mantine/core'

import { style } from '@vanilla-extract/css'

import { vars } from '@/app/configs/app.theme'

export const actionMenuStyle = {
  menuItem: style({
    ':hover': {
      backgroundColor: rgba(vars.colors.dark[0], 0.1),
    },
  }),
}
