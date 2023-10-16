import { Box, Image } from '@mantine/core'
import { FC } from 'react'
import { pinStyle } from './pin.css'
import clsx from 'clsx'

interface PinProps {
  size: 'small' | 'medium' | 'large'
}

export const Pin: FC<PinProps> = (props) => {
  return (
    <Box className={clsx(pinStyle.pin, pinStyle[props.size])}>
      {/* <Image
        className={classes.image}
        src='https://i.pinimg.com/564x/3a/63/46/3a6346e65a60031fdb89ecb3db9f5c3a.jpg'
        alt=''
        height={'100%'}
        width={'100%'}
      /> */}
    </Box>
  )
}
