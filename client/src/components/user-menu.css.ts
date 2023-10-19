import { vars } from '@/configs/theme'
import { style } from '@vanilla-extract/css'

export const userMenuStyle = {
  menuItem: style({
    borderRadius: vars.radius.xl,
    cursor: 'pointer',
    padding: 8,
    ':hover': {
      backgroundColor: vars.colors.dark.light,
    },
    ':active': {
      transform: 'scale(0.95)',
    },
  }),
}
