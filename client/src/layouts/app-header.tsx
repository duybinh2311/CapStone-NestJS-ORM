import { FC } from 'react'
import Sticky from 'react-stickynode'

import { Container, Group, useMantineTheme } from '@mantine/core'

import { ActionMenu } from '@/components/action-menu'
import { AppLogoLink } from '@/components/app-logo-link'
import { AuthButton } from '@/components/auth-button'
import { UserMenu } from '@/components/user-menu'
import { useAccount } from '@/hooks/account.hook'

interface AppHeaderProps {}

export const AppHeader: FC<AppHeaderProps> = () => {
  /* App State */
  const { profile, signOut } = useAccount()

  /* Hook Init */
  const theme = useMantineTheme()

  return (
    <Sticky
      top={0}
      innerZ={50}
    >
      <header
        style={{
          zIndex: 10,
          padding: `${theme.spacing.md} 0`,
          boxShadow: theme.shadows.sm,
          backgroundColor: 'white',
        }}
      >
        <Container fluid>
          {profile ? (
            <Group gap={'sm'}>
              <AppLogoLink />

              <ActionMenu />

              <UserMenu
                profile={profile}
                signOutFunc={signOut}
              />
            </Group>
          ) : (
            <Group justify='space-between'>
              <AppLogoLink type='text' />
              <AuthButton />
            </Group>
          )}
        </Container>
      </header>
    </Sticky>
  )
}
