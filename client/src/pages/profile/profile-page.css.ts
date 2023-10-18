import { ComplexStyleRule, StyleRule, style } from '@vanilla-extract/css'

export const profilePageStyle = {
  Tabs: {
    list: style({
      ':before': {
        position: 'unset',
      },
    }),
    tab: style({
      '&[data-active]': {
        borderBottomWidth: '3px',
      } as StyleRule,
    } as ComplexStyleRule),
  },
}
