import { style } from '@vanilla-extract/css'

export const classes = {
  pinLayout: style({
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, 236px)',
    gridAutoRows: 10,
    justifyContent: 'center',
  }),
}
