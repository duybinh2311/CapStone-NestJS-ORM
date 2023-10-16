import { vars } from '@/configs/theme'
import { style } from '@vanilla-extract/css'

export const pinActionMenuStyle = {
  pinActionMenu: style({
    padding: `${vars.spacing.xl} ${vars.spacing.xl} ${vars.spacing.xs}`,
    borderBottom: `1px solid ${vars.colors.gray[2]}`,
    backgroundColor: 'white',
    transition: 'padding 0.1s ease-in-out',
  }),
  pinActionMenuActive: style({
    padding: `${vars.spacing.sm} ${vars.spacing.xl}`,
  }),
}
