import { rgba } from '@mantine/core'

import { style } from '@vanilla-extract/css'

import { vars } from '@/theme'

export const classes = {
  menuItem: style({
    ':hover': {
      backgroundColor: rgba(vars.colors.dark[0], 0.1),
    },
  }),
}
