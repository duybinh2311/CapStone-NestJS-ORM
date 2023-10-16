import { vars } from '@/configs/theme'
import { style } from '@vanilla-extract/css'

export const pinStyle = {
  image: style({
    borderRadius: vars.radius.lg,
  }),
  pin: style({
    backgroundColor: 'red',
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
