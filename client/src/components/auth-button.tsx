import { FC } from 'react'

import { Button, Group } from '@mantine/core'

import { onModalSignIn } from '@/modals/sign-in.modal'
import { onModalSignUp } from '@/modals/sign-up.modal'

export const AuthButton: FC = () => {
  return (
    <Group gap={'sm'}>
      <Button
        radius={'xl'}
        color='red'
        onClick={onModalSignIn}
      >
        Log in
      </Button>

      <Button
        radius={'xl'}
        variant='light'
        onClick={onModalSignUp}
      >
        Sign up
      </Button>
    </Group>
  )
}
