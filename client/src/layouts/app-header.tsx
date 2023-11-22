import { FC } from 'react'
import Sticky from 'react-stickynode'

import { Container, Group, useMantineTheme } from '@mantine/core'

import { ActionMenu } from '@/components/action-menu'
import { AppLogo } from '@/components/app-logo'
import { AuthButton } from '@/components/auth-button'
import { UserMenu } from '@/components/user-menu'
import { useAuth } from '@/modules/auth/auth.provider'

interface AppHeaderProps {}

export const AppHeader: FC<AppHeaderProps> = () => {
  /* App State */
  const { profile } = useAuth()
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
          <Group gap={'sm'}>
            <AppLogo />

            <ActionMenu />

            {profile ? <UserMenu profile={profile} /> : <AuthButton />}
          </Group>
        </Container>
      </header>
    </Sticky>
  )
}
