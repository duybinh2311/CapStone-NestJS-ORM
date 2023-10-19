import { vars } from '@/configs/theme'
import { style } from '@vanilla-extract/css'

export const formUploadStyle = {
  textInput: style({
    border: 'unset',
    borderBottom: `2px solid ${vars.colors.dark.light}`,
    ':focus': {
      borderBottomColor: vars.colors.blue.lightColor,
    },
  }),

  titleInput: style({
    paddingTop: vars.spacing.lg,
    paddingBottom: vars.spacing.lg,
    fontSize: '1.5rem',
    fontWeight: 'bold',
  }),

  linkInput: style({
    fontSize: '1.15rem',
    fontWeight: 500,
    height: 40,
  }),
}
