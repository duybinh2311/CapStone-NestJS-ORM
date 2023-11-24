import { FC, PropsWithChildren } from 'react'

import { Box } from '@mantine/core'

interface PinLayoutProps extends PropsWithChildren {}

export const PinLayout: FC<PinLayoutProps> = (props) => {
  return (
    <Box
      display={'grid'}
      style={{
        gridTemplateColumns: 'repeat(auto-fill, 236px)',
        gridAutoRows: 10,
        justifyContent: 'center',
      }}
    >
      {props.children}
    </Box>
  )
}
