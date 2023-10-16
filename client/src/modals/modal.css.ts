import { vars } from '@/configs/theme'
import { style } from '@vanilla-extract/css'

export const modalStyle = {
  closeButton: style({
    ':hover': {
      backgroundColor: vars.colors.gray.lightHover,
    },
  }),

  title: style({
    position: 'absolute',
    left: '50%',
    transform: 'translateX(-50%)',
  }),
}
