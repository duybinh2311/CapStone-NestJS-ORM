import { useCss } from '@/hooks/css.hook'
import { vars } from '@/theme'

export const styles = {
  closeButton: useCss({
    hover: {
      backgroundColor: vars.colors.dark.light,
    },
  }),
  title: useCss({
    position: 'absolute',
    left: '50%',
    transform: 'translateX(-50%)',
  }),
}
