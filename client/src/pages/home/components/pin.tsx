import { Box } from '@mantine/core'
import { FC } from 'react'
import { classes } from './pin.css'
import clsx from 'clsx'

interface PinProps {
  size: 'small' | 'medium' | 'large'
}

export const Pin: FC<PinProps> = (props) => {
  return <Box className={clsx(classes.pin, classes[props.size])}></Box>
}
