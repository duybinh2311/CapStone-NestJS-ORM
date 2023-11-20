import { FC } from 'react'

import { Button, PasswordInput, Stack, TextInput } from '@mantine/core'
import { isNotEmpty, useForm } from '@mantine/form'

import { useAccount } from '@/app/providers/app.provider'

interface FormSignInProps {}

export const FormSignIn: FC<FormSignInProps> = (props) => {
  /* Hook Init */
  const { signIn } = useAccount()
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
