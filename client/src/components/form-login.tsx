import { Button, PasswordInput, Stack, TextInput } from '@mantine/core'
import { isEmail, useForm } from '@mantine/form'
import { FC } from 'react'

interface FormLoginProps {}

export const FormLogin: FC<FormLoginProps> = (props) => {
  /* Hook Init */
  const form = useForm({
    initialValues: {
      email: '',
      password: '',
    },
    validate: {
      email: isEmail('Please enter valid email'),
      password: (value) => (!value ? 'Password is required' : value.trim().length < 6 ? 'Password is too short' : null),
    },
  })
  /* Logic */
  const submit = form.onSubmit((values) => {
    console.log(values)
  })

  return (
    <form onSubmit={submit}>
      <Stack>
        <TextInput
          label='Email'
          {...form.getInputProps('email')}
        />

        <PasswordInput
          label='Password'
          {...form.getInputProps('password')}
        />

        <Button type='submit'>Submit</Button>
      </Stack>
    </form>
  )
}
