import { vars } from '@/_theme'
import { style } from '@vanilla-extract/css'

export const classes = {
  menuItem: style({
    borderRadius: vars.radius.xl,
    cursor: 'pointer',
    padding: 8,
    ':hover': {
      backgroundColor: vars.colors.gray.lightHover,
    },
  }),
}
