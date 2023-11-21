import { style } from '@vanilla-extract/css'

import { vars } from '@/theme'

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
