import { FC } from 'react'

import { Center, Image } from '@mantine/core'

export const AuthPage: FC = () => {
  return (
    <Center h={'calc(100vh - 68px)'}>
      <Image
        w={'40vw'}
        src={'/svgs/computer-login-animate.svg'}
      />
    </Center>
  )
}
