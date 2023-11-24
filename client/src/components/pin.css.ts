import { style } from '@vanilla-extract/css'

import { vars } from '@/theme'

export const classes = {
  image: style({
    borderRadius: vars.radius.md,
  }),
  pin: style({
    // backgroundColor: 'red',
    margin: 8,
  }),
  small: style({
    gridRowEnd: 'span 26',
  }),
  medium: style({
    gridRowEnd: 'span 36',
  }),
  large: style({
    gridRowEnd: 'span 46',
  }),
}
