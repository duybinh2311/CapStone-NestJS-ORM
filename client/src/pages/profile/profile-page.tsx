import { FC } from 'react'
import { useNavigate } from 'react-router-dom'

import { Avatar, Box, Button, Container, Group, Stack, Tabs, Text, Title } from '@mantine/core'

import { Pin, PinSizeEnum } from '@/components/pin'
import { PinLayout } from '@/components/pin-layout'
import { useAccount } from '@/hooks/account-hooks'
import { useCss } from '@/hooks/css-hooks'
import { AppModule } from '@/modules/app/app.module'
import AppRoutes from '@/routes/routes'
import { vars } from '@/theme'

export const ProfilePage: FC = () => {
  /* App State */
  const { profile, savedPins, createdPins } = useAccount()

  /* Hook Init */
  const navigate = useNavigate()

  return (
    <>
      <Box pt={'md'}>
        <Container>
          <Stack
            align='center'
            mt={'lg'}
            gap={'xl'}
          >
            <Stack align='center'>
              <Avatar
                size={120}
                src={AppModule.config.APP_API_URL + profile?.avatar}
              />
              <Box>
                <Title order={2}>{profile?.userName || profile?.fullName}</Title>
                <Text
                  mt={5}
                  fz={'sm'}
                  c={'dimmed'}
                  ta={'center'}
                >
                  {profile?.email}
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
                onClick={() => navigate(AppRoutes.profile.edit)}
              >
                Edit Profile
              </Button>
            </Group>
          </Stack>
        </Container>
      </Box>

      <Box
        mt={'xl'}
        pb={'xl'}
      >
        <Tabs
          defaultValue={'created'}
          w={'100%'}
          styles={{
            tab: useCss({
              dataActive: {
                borderBottomWidth: '3px',
              },
            }),
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

            <Tabs.Tab value='saved'>
              <Text fw={500}>Saved</Text>
            </Tabs.Tab>
          </Tabs.List>

          <Container>
            <Tabs.Panel value='created'>
              {createdPins.length ? (
                <PinLayout>
                  {((): JSX.Element[] => {
                    const sizes = [PinSizeEnum.small, PinSizeEnum.medium, PinSizeEnum.large]
                    return createdPins.map((pin, index) => {
                      const size = sizes[index % sizes.length]
                      return (
                        <Pin
                          key={pin.id}
                          size={size}
                          pin={pin}
                        />
                      )
                    })
                  })()}
                </PinLayout>
              ) : (
                <Stack align='center'>
                  <Text>Nothing to show...yet! Pins you create will live here.</Text>

                  <Button
                    color='red'
                    w={'fit-content'}
                    radius={'xl'}
                    size='md'
                  >
                    Create Pin
                  </Button>
                </Stack>
              )}
            </Tabs.Panel>

            <Tabs.Panel value='saved'>
              {savedPins.length ? (
                <PinLayout>
                  {((): JSX.Element[] => {
                    const sizes = [PinSizeEnum.small, PinSizeEnum.medium, PinSizeEnum.large]
                    return savedPins.map((pin, index) => {
                      const size = sizes[index % sizes.length]
                      return (
                        <Pin
                          key={pin.id}
                          size={size}
                          pin={pin}
                        />
                      )
                    })
                  })()}
                </PinLayout>
              ) : (
                <Stack align='center'>
                  <Text>Save pins you love to your boards. You’ll be able to see them here!</Text>

                  <Button
                    color='red'
                    w={'fit-content'}
                    radius={'xl'}
                    size='md'
                    onClick={() => navigate(AppRoutes.home)}
                  >
                    Go Home
                  </Button>
                </Stack>
              )}
            </Tabs.Panel>
          </Container>
        </Tabs>
      </Box>
    </>
  )
}
