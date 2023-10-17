import { style } from '@vanilla-extract/css'

export const profilePageStyle = {
  Tabs: {
    list: style({
      ':before': {
        display: 'none',
      },
    }),
  },
}
