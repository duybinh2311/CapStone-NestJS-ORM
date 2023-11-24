import { style } from '@vanilla-extract/css'

export const classes = {
  overlay: style({}),

  pin: style({
    ':active': {
      transform: 'scale(0.95)',
    },
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
