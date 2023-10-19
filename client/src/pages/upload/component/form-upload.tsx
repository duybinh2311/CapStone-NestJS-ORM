import { vars } from '@/configs/theme'
import {
  ActionIcon,
  Avatar,
  Box,
  Button,
  Grid,
  Group,
  Input,
  Stack,
  Text,
  TextInput,
  Textarea,
  ThemeIcon,
} from '@mantine/core'
import { Dropzone, IMAGE_MIME_TYPE } from '@mantine/dropzone'
import { IconArrowUp, IconDots } from '@tabler/icons-react'
import clsx from 'clsx'
import { FC } from 'react'
import { formUploadStyle } from './form-upload.css'

interface FormUploadProps {}

export const FormUpload: FC<FormUploadProps> = (props) => {
  return (
    <Box
      bg={'white'}
      py={40}
      px={60}
      style={{
        borderRadius: vars.radius.md,
        boxShadow: '0 0 8px rgba(0, 0, 0, 0.10)',
      }}
    >
      <Stack>
        <ActionIcon
          variant='transparent'
          color='gray.9'
        >
          <IconDots />
        </ActionIcon>

        <Grid gutter={'xl'}>
          <Grid.Col span={4.5}>
            <Stack>
              <Dropzone
                style={{
                  cursor: 'pointer',
                }}
                accept={IMAGE_MIME_TYPE}
                onDrop={(files) => console.log('accepted files', files)}
                onReject={(files) => console.log('rejected files', files)}
              >
                <Box
                  p={'md'}
                  bg={vars.colors.dark.light}
                  style={{
                    borderRadius: vars.radius.md,
                  }}
                >
                  <Stack
                    style={{
                      border: `2px dashed ${vars.colors.dark.light}`,
                      borderRadius: vars.radius.sm,
                      cursor: 'pointer',
                    }}
                  >
                    <Stack
                      align='center'
                      justify='center'
                      h={400}
                    >
                      <ThemeIcon
                        radius={'xl'}
                        color='gray.7'
                      >
                        <IconArrowUp
                          size={16}
                          stroke={3}
                        />
                      </ThemeIcon>

                      <Text
                        ta={'center'}
                        fz={'sm'}
                        px={'xl'}
                        inline
                        fw={500}
                      >
                        Drag and drop or click to upload
                      </Text>
                    </Stack>

                    <Text
                      fz={'xs'}
                      ta={'center'}
                      px={'xs'}
                      pb={'xs'}
                    >
                      We recommend using hight quality .jpg files less than 20MB
                    </Text>
                  </Stack>
                </Box>
              </Dropzone>

              <Button
                variant='light'
                radius={'xl'}
                size='md'
              >
                Save from site
              </Button>
            </Stack>
          </Grid.Col>

          <Grid.Col span={7.5}>
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
                      input: clsx(formUploadStyle.textInput, formUploadStyle.titleInput),
                    }}
                  />

                  <Input.Description
                    mt={5}
                    opacity={0}
                  >
                    Your first 40 characters are what usually show up in feed
                  </Input.Description>
                </Input.Wrapper>

                <Group gap={'xs'}>
                  <Avatar
                    src={
                      'https://scontent.fhan3-3.fna.fbcdn.net/v/t39.30808-6/261463275_2098436070312988_9106714437153092476_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=mEP528EB7WcAX8F7ImK&_nc_ht=scontent.fhan3-3.fna&oh=00_AfCv2SU7W2UYdRy8vbC90c9kUccJ-amOlNW5ej_Ej5eZBQ&oe=6535EA0B'
                    }
                  />
                  <Text fw={500}>Simple</Text>
                </Group>

                <Stack>
                  <Input.Wrapper className='about-input'>
                    <Textarea
                      radius={0}
                      placeholder='Tell everyone what your Pin is about'
                      autosize
                      classNames={{
                        input: formUploadStyle.textInput,
                      }}
                      onFocus={(e) => {
                        const element = e.currentTarget
                          .closest('.about-input')
                          ?.querySelector('.mantine-InputWrapper-description') as HTMLElementTagNameMap['p']
                        console.log(element)

                        element.style.setProperty('opacity', '1')
                      }}
                      onBlur={(e) => {
                        const element = e.currentTarget
                          .closest('.about-input')
                          ?.querySelector('.mantine-InputWrapper-description') as HTMLElementTagNameMap['p']

                        element.style.setProperty('opacity', '0')
                      }}
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
                  input: clsx(formUploadStyle.textInput, formUploadStyle.linkInput),
                }}
              />
            </Stack>
          </Grid.Col>
        </Grid>
      </Stack>
    </Box>
  )
}
