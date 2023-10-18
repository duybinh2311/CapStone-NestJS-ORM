import { Button, NumberInput, PasswordInput, Stack, TextInput } from '@mantine/core'
import { isEmail, isNotEmpty, useForm, isInRange } from '@mantine/form'
import { FC } from 'react'

interface FormSignupProps {}

export const FormSignup: FC<FormSignupProps> = (props) => {
  /* Hook Init */
  const form = useForm({
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
  const submit = form.onSubmit((values) => {
    console.log(values)
  })

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
