import { FC } from 'react'

import { Button, NumberInput, PasswordInput, Stack, TextInput } from '@mantine/core'
import { isEmail, isInRange, isNotEmpty, useForm } from '@mantine/form'

import { useAuth } from '@/modules/auth/auth.provider'
import { SignUpDto } from '@/modules/auth/auth.types'

interface FormSignUpProps {}

export const FormSignUp: FC<FormSignUpProps> = (props) => {
  /* App State */
  const { signUp } = useAuth()

  /* Hook Init */
  const form = useForm<SignUpDto>({
    initialValues: {
      email: '',
      password: '',
      fullName: '',
      age: 18,
    },
    validate: {
      email: isEmail('Please enter valid email'),
      password: (value) =>
        !value
          ? 'Password is required'
          : !/^\S+$/.test(value)
          ? 'Password must not contain spaces'
          : value.length < 6
          ? 'Password is too short'
          : null,
      fullName: isNotEmpty('Full name is required'),
      age: isInRange({ min: 18, max: 100 }, 'Age must be between 18 and 100'),
    },
  })

  /* Logic */
  const submit = form.onSubmit((values) => signUp(values))

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

        <TextInput
          label='Full Name'
          {...form.getInputProps('fullName')}
        />

        <NumberInput
          label='Age'
          styles={{
            controls: {
              display: 'none',
            },
            section: {
              display: 'none',
            },
          }}
          {...form.getInputProps('age')}
        />

        <Button
          mt={'sm'}
          type='submit'
        >
          Sign Up
        </Button>
      </Stack>
    </form>
  )
}
