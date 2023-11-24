import { CSSProperties, style } from '@vanilla-extract/css'

export const classes = {
  Tabs: {
    list: style({
      ':before': {
        position: 'unset',
      },
    }),
    tab: style({
      '&[data-active]': {
        borderBottomWidth: '3px',
      },
    } as CSSProperties),
  },
}
