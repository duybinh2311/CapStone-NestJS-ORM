import { css } from '@/hooks/css-hooks'
import { vars } from '@/theme'

export const styles = {
  closeButton: css({
    hover: {
      backgroundColor: vars.colors.dark.light,
    },
  }),
  title: css({
    position: 'absolute',
    left: '50%',
    transform: 'translateX(-50%)',
  }),
}
