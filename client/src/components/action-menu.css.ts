import { vars } from '@/configs/theme'
import { rgba } from '@mantine/core'
import { style } from '@vanilla-extract/css'

export const actionMenuStyle = {
  menuItem: style({
    ':hover': {
      backgroundColor: rgba(vars.colors.dark[0], 0.1),
    },
  }),
}
