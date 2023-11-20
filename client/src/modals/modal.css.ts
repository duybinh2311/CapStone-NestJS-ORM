import { style } from '@vanilla-extract/css'

import { vars } from '@/app/configs/app.theme'

export const modalStyle = {
  closeButton: style({
    ':hover': {
      backgroundColor: vars.colors.dark.light,
    },
  }),

  title: style({
    position: 'absolute',
    left: '50%',
    transform: 'translateX(-50%)',
  }),
}
