import { Pin } from '@/components/pin'
import { PinLayout } from '@/components/pin-layout'
import { Avatar, Container, Stack, Title, Text, Box, Group, Button, Tabs } from '@mantine/core'
import { FC } from 'react'
import { vars } from '@/configs/theme'
import { profilePageStyle } from './profile-page.css'

export const ProfilePage: FC = () => {
  return (
    <section
      style={{
        paddingTop: vars.spacing.md,
        paddingBottom: vars.spacing.xl,
      }}
    >
      <Container>
        <Stack
          align='center'
          mt={'lg'}
          gap={'xl'}
        >
          <Stack align='center'>
            <Avatar
              size={120}
              src={
                'https://scontent.fhan3-3.fna.fbcdn.net/v/t39.30808-6/261463275_2098436070312988_9106714437153092476_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=MdYKIxEeBBYAX_EYJlO&_nc_ht=scontent.fhan3-3.fna&oh=00_AfDys-zG5EZq3uhstUMsZTXFUvihHbX2yTx7oeEj_BNlxw&oe=6533EFCB'
              }
            />
            <Box>
              <Title order={2}>Nguyễn Duy Bình</Title>
              <Text
                mt={5}
                fz={'sm'}
                c={'dimmed'}
                ta={'center'}
              >
                duybinh@gmail.com
              </Text>
              <Text ta={'center'}>0 following</Text>
            </Box>
          </Stack>

          <Group>
            <Button
              radius={'xl'}
              size='md'
              variant='light'
            >
              Share
            </Button>
            <Button
              radius={'xl'}
              size='md'
              variant='light'
            >
              Edit Profile
            </Button>
          </Group>

          <Tabs
            defaultValue={'created'}
            w={'100%'}
            classNames={{
              list: profilePageStyle.Tabs.list,
              tab: profilePageStyle.Tabs.tab,
            }}
          >
            <Tabs.List
              style={{
                justifyContent: 'center',
              }}
              mb={'xl'}
            >
              <Tabs.Tab
                value='created'
                style={{
                  marginRight: vars.spacing.md,
                }}
              >
                <Text fw={500}>Created</Text>
              </Tabs.Tab>
              <Tabs.Tab
                value='saved'
                style={{}}
              >
                <Text fw={500}>Saved</Text>
              </Tabs.Tab>
            </Tabs.List>

            <Tabs.Panel value='created'>
              <Stack align='center'>
                <Text>Nothing to show...yet! Pins you create will live here.</Text>

                <Button
                  color='red'
                  w={'fit-content'}
                  radius={'xl'}
                  size='md'
                >
                  Create Idea Pin
                </Button>
              </Stack>
            </Tabs.Panel>

            <Tabs.Panel value='saved'>
              <PinLayout>
                <Pin size='small' />
                <Pin size='medium' />
                <Pin size='large' />
                <Pin size='small' />
                <Pin size='medium' />
                <Pin size='large' />
                <Pin size='small' />
                <Pin size='medium' />
                <Pin size='large' />
              </PinLayout>
            </Tabs.Panel>
          </Tabs>
        </Stack>
      </Container>
    </section>
  )
}
