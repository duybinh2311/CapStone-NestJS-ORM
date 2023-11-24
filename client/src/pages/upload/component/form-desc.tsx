import { FC } from 'react'

import { Avatar, Button, Group, Input, Stack, Text, TextInput, Textarea } from '@mantine/core'

import clsx from 'clsx'

import { useAuth } from '@/modules/auth/auth.provider'

import { useFormUploadContext } from '../providers/form-upload.provider'
import { classes } from './form-desc.css'

interface FormDescProps {}

export const FormDesc: FC<FormDescProps> = (props) => {
  /* App State */
  const { profile } = useAuth()

  /* Hook Init */
  const form = useFormUploadContext()

  return (
    <Stack
      h={'100%'}
      justify='space-between'
    >
      <Stack gap={'xl'}>
        <Input.Wrapper className='title-input'>
          <TextInput
            radius={0}
            placeholder='Add your title'
            onFocus={(e) => {
              const element = e.currentTarget
                .closest('.title-input')
                ?.querySelector('.mantine-InputWrapper-description') as HTMLElementTagNameMap['p']

              element.style.setProperty('opacity', '1')
            }}
            onBlur={(e) => {
              const element = e.currentTarget
                .closest('.title-input')
                ?.querySelector('.mantine-InputWrapper-description') as HTMLElementTagNameMap['p']

              element.style.setProperty('opacity', '0')
            }}
            classNames={{
              input: clsx(classes.textInput, classes.titleInput),
            }}
            onChange={(e) => form.setFieldValue('title', e.currentTarget.value)}
          />

          <Input.Description
            mt={5}
            opacity={0}
          >
            Your first 40 characters are what usually show up in feed
          </Input.Description>
        </Input.Wrapper>

        <Group gap={'xs'}>
          <Avatar src={profile?.avatar} />
          <Text fw={500}>{profile?.fullName}</Text>
        </Group>

        <Stack>
          <Input.Wrapper className='about-input'>
            <Textarea
              radius={0}
              placeholder='Tell everyone what your Pin is about'
              autosize
              classNames={{
                input: classes.textInput,
              }}
              onFocus={(e) => {
                const element = e.currentTarget
                  .closest('.about-input')
                  ?.querySelector('.mantine-InputWrapper-description') as HTMLElementTagNameMap['p']

                element.style.setProperty('opacity', '1')
              }}
              onBlur={(e) => {
                const element = e.currentTarget
                  .closest('.about-input')
                  ?.querySelector('.mantine-InputWrapper-description') as HTMLElementTagNameMap['p']

                element.style.setProperty('opacity', '0')
              }}
              onChange={(e) => form.setFieldValue('description', e.currentTarget.value)}
            />

            <Input.Description
              mt={5}
              opacity={0}
            >
              People will usually see the first 50 characters when they click on your Pin
            </Input.Description>
          </Input.Wrapper>

          <Input.Wrapper className='alt-input'>
            <Button
              w={'fit-content'}
              radius={'xl'}
              size='sm'
              variant='light'
            >
              Add Alt Text
            </Button>
          </Input.Wrapper>
        </Stack>
      </Stack>

      <TextInput
        radius={0}
        placeholder='Add a destination link'
        classNames={{
          input: clsx(classes.textInput, classes.linkInput),
        }}
      />
    </Stack>
  )
}
