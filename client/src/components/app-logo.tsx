import { FC } from 'react'

import { Image, ImageProps } from '@mantine/core'

interface AppLogoProps extends ImageProps {}

export const AppLogo: FC<AppLogoProps> = (props) => {
  return (
    <Image
      src={'/images/logo.png'}
      {...props}
    />
  )
}
