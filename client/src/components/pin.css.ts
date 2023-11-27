import { style } from '@vanilla-extract/css'

export const classes = {
  overlayPin: style({}),

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
