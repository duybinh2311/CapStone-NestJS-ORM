import { FC } from 'react'

import { Box, BoxProps, Image } from '@mantine/core'

interface AppLogoProps extends BoxProps {}

export const AppLogo: FC<AppLogoProps> = (props) => {
  return (
    <Box
      w={35}
      style={{
        cursor: 'pointer',
      }}
      {...props}
    >
      <Image src={'/img/logo.png'} />
    </Box>
  )
}
