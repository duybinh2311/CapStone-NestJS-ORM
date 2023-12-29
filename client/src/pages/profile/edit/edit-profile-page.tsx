import { FC, useEffect, useRef, useState } from 'react'

import {
  Avatar,
  Box,
  Button,
  Container,
  FileButton,
  Group,
  Stack,
  Text,
  TextInput,
  Textarea,
  Title,
} from '@mantine/core'
import { hasLength, isEmail, isInRange, isNotEmpty, useForm } from '@mantine/form'

import { useAccount } from '@/hooks/account.hook'
import { AppModule } from '@/modules/app/app.module'
import { FileModule } from '@/modules/file/file.module'
import { UserModule } from '@/modules/user/user.module'
import { UpdateUserDto } from '@/modules/user/user.types'
import { IResError } from '@/types'

export const EditProfilePage: FC = () => {
  /* App State */
  const { profile, getProfile } = useAccount()

  /* Local State */
  const [avatarFile, setAvatarFile] = useState<File | null>(null)
  const [avatarFileURL, setAvatarFileURL] = useState<string | null>(null)

  /* Hook Init */
  const form = useForm<UpdateUserDto>({
    initialValues: {
      email: profile?.email,
      fullName: profile?.fullName,
      age: profile?.age,
      avatar: profile?.avatar,
      userName: profile?.userName,
      about: profile?.about,
    },
    validate: {
      email: isEmail('Please enter valid email'),
      fullName: isNotEmpty('Full name is required'),
      age: isInRange({ min: 18, max: 100 }, 'Age must be between 18 and 100'),
      about: hasLength({ min: 0, max: 255 }, 'About too long'),
    },
  })

  const resetRef = useRef<() => void>(null)

  /* Logic */
  const submit = form.onSubmit(async (values) => {
    if (avatarFile) {
      values.avatar = (await FileModule.upLoad({ file: avatarFile })).data.path
    }

    UserModule.updateProfile(values)
      .then((res) => {
        AppModule.onSuccess(res.message)
        getProfile()
      })
      .catch((err: IResError) => {
        AppModule.onError(err.message || err.error)
      })
  })

  const clearAvatarFile = () => {
    setAvatarFile(null)
    resetRef.current?.()
  }

  useEffect(() => {
    if (avatarFile) {
      setAvatarFileURL(URL.createObjectURL(avatarFile))
    } else {
      if (avatarFileURL) {
        URL.revokeObjectURL(avatarFileURL)
        setAvatarFileURL(null)
      }
    }

    return () => {
      if (avatarFileURL) {
        URL.revokeObjectURL(avatarFileURL)
      }
    }
  }, [avatarFile])

  useEffect(() => {
    if (profile) {
      form.setInitialValues(profile)
    }
  }, [profile])

  return (
    <form
      onSubmit={submit}
      onReset={form.onReset}
    >
      <Box
        pt={'md'}
        pb={150}
      >
        <Container size={'sm'}>
          <Stack
            gap={'xl'}
            mt={'lg'}
          >
            <Box>
              <Title
                order={2}
                fw={500}
              >
                Edit Profile
              </Title>

              <Text mt={'xs'}>
                Keep your personal details private. Information you add here is visible to any who can view your
                profile.
              </Text>
            </Box>

            <Stack>
              <Box>
                <Text fz={'sm'}>Avatar</Text>
                <Group>
                  <Avatar
                    size={'xl'}
                    src={avatarFileURL || AppModule.config.APP_API_URL + profile?.avatar}
                  />
                  <FileButton
                    resetRef={resetRef}
                    onChange={setAvatarFile}
                    accept='image/png,image/jpeg'
                  >
                    {(props) => (
                      <Button
                        {...props}
                        variant='light'
                        radius={'xl'}
                      >
                        Change
                      </Button>
                    )}
                  </FileButton>
                </Group>
              </Box>

              <TextInput
                label='Email'
                {...form.getInputProps('email')}
              />

              <TextInput
                label='Full name'
                {...form.getInputProps('fullName')}
              />

              <TextInput
                label='Age'
                {...form.getInputProps('age')}
              />

              <TextInput
                label='User name'
                {...form.getInputProps('userName')}
              />

              <Textarea
                label='About me'
                rows={4}
                {...form.getInputProps('about')}
              />
            </Stack>
          </Stack>
        </Container>
      </Box>

      <Box
        pos={'fixed'}
        bottom={0}
        w={'100vw'}
        bg={'white'}
        style={{
          boxShadow: '0 0 8px rgba(0, 0, 0, 0.10)',
        }}
      >
        <Container size={'sm'}>
          <Group
            py={'md'}
            justify='flex-end'
          >
            <Button
              size='md'
              variant='light'
              radius={'xl'}
              type='reset'
              onClick={clearAvatarFile}
            >
              Reset
            </Button>
            <Button
              size='md'
              color='red'
              radius={'xl'}
              type='submit'
            >
              Save
            </Button>
          </Group>
        </Container>
      </Box>
    </form>
  )
}
