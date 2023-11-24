import { FC } from 'react'

import { Box, Image } from '@mantine/core'

import clsx from 'clsx'

import { AppModule } from '@/modules/app/app.module'
import { PinResDto } from '@/modules/pin/pin.types'
import { vars } from '@/theme'

import { classes } from './pin.css'

interface PinProps {
  size: 'small' | 'medium' | 'large'
  pin: PinResDto
}

export const Pin: FC<PinProps> = (props) => {
  return (
    <Box
      className={clsx(classes.pin, classes[props.size])}
      pos={'relative'}
      m={8}
      style={{
        cursor: 'pointer',
        transition: 'all 0.1s ease-in-out',
      }}
    >
      <Box
        pos={'absolute'}
        bg={'red'}
        w={'100%'}
        h={'100%'}
        opacity={0.2}
        style={{
          borderRadius: vars.radius.md,
        }}
      >
        Test
      </Box>
      <Image
        src={`${AppModule.config.APP_API_URL}/${props.pin.path}`}
        alt=''
        h={'100%'}
        w={'100%'}
        style={{
          borderRadius: vars.radius.md,
        }}
      />
    </Box>
  )
}
