import { style } from '@vanilla-extract/css'

export const pinLayoutStyle = {
  pinLayout: style({
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, 236px)',
    gridAutoRows: 10,
    justifyContent: 'center',
  }),
}
