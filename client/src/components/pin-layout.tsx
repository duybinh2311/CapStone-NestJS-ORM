import { Box } from '@mantine/core'
import { FC, PropsWithChildren } from 'react'
import { pinLayoutStyle } from './pin-layout.css'

interface PinLayoutProps extends PropsWithChildren {}

export const PinLayout: FC<PinLayoutProps> = (props) => {
  return <Box className={pinLayoutStyle.pinLayout}>{props.children}</Box>
}
