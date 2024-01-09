import { FC } from 'react'

import { Button, PasswordInput, Stack, TextInput } from '@mantine/core'
import { isNotEmpty, useForm } from '@mantine/form'

import { useAccount } from '@/hooks/account.hook'

export const FormSignIn: FC = () => {
  /* App State */
  const { signIn } = useAccount()

  /* Hook Init */
  const form = useForm({
    initialValues: {
      email: '',
      password: '',
    },
    validate: {
      email: isNotEmpty('Email is required'),
      password: isNotEmpty('Password is required'),
    },
  })

  /* Logic */
  const submit = form.onSubmit((values) => signIn(values))

  return (
    <form onSubmit={submit}>
      <Stack gap={'xs'}>
        <TextInput
          data-autofocus
          label='Email'
          {...form.getInputProps('email')}
        />

        <PasswordInput
          label='Password'
          {...form.getInputProps('password')}
        />

        <Button
          mt={'sm'}
          type='submit'
        >
          Log In
        </Button>
      </Stack>
    </form>
  )
}
