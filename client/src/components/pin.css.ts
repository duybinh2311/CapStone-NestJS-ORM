import { style } from '@vanilla-extract/css'

export const classes = {
  overlayPin: style({
    transition: 'opacity 0.1s ease-in-out',
    opacity: 0,
    ':hover': {
      opacity: 1,
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
