import { vars } from '@/_theme'
import { rgba } from '@mantine/core'
import { style } from '@vanilla-extract/css'

export const classes = {
  menuItem: style({
    ':hover': {
      backgroundColor: rgba(vars.colors.dark[0], 0.1),
    },
  }),
}
