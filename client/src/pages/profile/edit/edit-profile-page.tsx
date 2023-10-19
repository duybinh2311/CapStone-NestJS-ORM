import { vars } from '@/configs/theme'
import { Avatar, Box, Button, Container, Group, Stack, Text, TextInput, Textarea, Title } from '@mantine/core'
import { FC } from 'react'

export const EditProfilePage: FC = () => {
  return (
    <>
      <section
        style={{
          paddingTop: vars.spacing.md,
          paddingBottom: 150,
        }}
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

            <form>
              <Stack>
                <Box>
                  <Text fz={'sm'}>Photo</Text>
                  <Group>
                    <Avatar
                      size={'xl'}
                      src={
                        'https://scontent.fsgn8-4.fna.fbcdn.net/v/t39.30808-6/261463275_2098436070312988_9106714437153092476_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=MdYKIxEeBBYAX8pPNUV&_nc_ht=scontent.fsgn8-4.fna&oh=00_AfDiQqeGq2KTHlZU6afKegy5wElCUcbONDKh8G2T0yZ2DA&oe=6533EFCB'
                      }
                    />

                    <Button
                      variant='light'
                      radius={'xl'}
                    >
                      Change
                    </Button>
                  </Group>
                </Box>

                <Group grow>
                  <TextInput label='First name' />

                  <TextInput label='Last name' />
                </Group>

                <Textarea
                  label='About me'
                  rows={4}
                />

                <TextInput label='Website' />

                <TextInput label='User name' />
              </Stack>
            </form>
          </Stack>
        </Container>
      </section>

      <section
        style={{
          boxShadow: '0 0 8px rgba(0, 0, 0, 0.10)',
          position: 'fixed',
          bottom: 0,
          width: '100vw',
          background: 'white',
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
            >
              Reset
            </Button>
            <Button
              size='md'
              color='red'
              radius={'xl'}
            >
              Save
            </Button>
          </Group>
        </Container>
      </section>
    </>
  )
}
