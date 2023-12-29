import { FC } from 'react'

import { Avatar, Button, Group, Input, Stack, Text, TextInput, Textarea } from '@mantine/core'

import { useAccount } from '@/hooks/account.hook'
import { useCss } from '@/hooks/css.hook'
import { AppModule } from '@/modules/app/app.module'
import { vars } from '@/theme'

import { useFormUploadContext } from './form-upload'

interface FormDescProps {}

export const FormDesc: FC<FormDescProps> = (props) => {
  /* App State */
  const { profile } = useAccount()

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
            styles={{
              input: useCss({
                border: 'unset',
                borderBottom: `2px solid ${vars.colors.dark.light}`,
                focus: {
                  borderBottomColor: vars.colors.blue.lightColor,
                },
                paddingTop: vars.spacing.lg,
                paddingBottom: vars.spacing.lg,
                fontSize: '1.5rem',
                fontWeight: 'bold',
              }),
            }}
            value={form.values.title}
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
          <Avatar src={AppModule.config.APP_API_URL + profile?.avatar} />
          <Text fw={500}>{profile?.userName || profile?.fullName}</Text>
        </Group>

        <Stack>
          <Input.Wrapper className='about-input'>
            <Textarea
              radius={0}
              placeholder='Tell everyone what your Pin is about'
              autosize
              styles={{
                input: useCss({
                  border: 'unset',
                  borderBottom: `2px solid ${vars.colors.dark.light}`,
                  focus: {
                    borderBottomColor: vars.colors.blue.lightColor,
                  },
                }),
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
              value={form.values.description}
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
        styles={{
          input: useCss({
            border: 'unset',
            borderBottom: `2px solid ${vars.colors.dark.light}`,
            focus: {
              borderBottomColor: vars.colors.blue.lightColor,
            },
            fontSize: '1.15rem',
            fontWeight: 500,
            height: 40,
          }),
        }}
      />
    </Stack>
  )
}
