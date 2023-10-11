import { Box } from '@mantine/core'
import { FC, PropsWithChildren } from 'react'
import { classes } from './pin-layout.css'

interface PinLayoutProps extends PropsWithChildren {}

export const PinLayout: FC<PinLayoutProps> = (props) => {
  return <Box className={classes.pinLayout}>{props.children}</Box>
}
