import { CSSProperties, style } from '@vanilla-extract/css'

import { vars } from '@/theme'

export const classes = {
  commentBox: style({
    backgroundColor: vars.colors.gray[1],
    border: `1px solid ${vars.colors.gray[4]}`,
    borderRadius: vars.radius.xl,
    overflow: 'hidden',
    ':focus-within': {
      borderColor: vars.colors.dark[4],
      backgroundColor: 'transparent',
      '& textarea': {
        backgroundColor: 'transparent',
      },
    } as CSSProperties,
  }),

  textAreaInput: style({
    backgroundColor: vars.colors.gray[1],
    border: 'none',
  }),
}
