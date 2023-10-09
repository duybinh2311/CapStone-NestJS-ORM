import { vars } from '@/configs/theme'
import { style } from '@vanilla-extract/css'

export const classes = {
  menuItem: style({
    borderRadius: vars.radius.xl,
    cursor: 'pointer',
    padding: 8,
    ':hover': {
      backgroundColor: vars.colors.gray.lightHover,
    },
    ':active': {
      transform: 'scale(0.95)',
    },
  }),
}
