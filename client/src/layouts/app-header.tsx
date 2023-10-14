import { ActionMenu } from '@/components/action-menu'
import { AppLogo } from '@/components/app-logo'
import { UserMenu } from '@/components/user-menu'
import { Button, Container, Group, useMantineTheme } from '@mantine/core'
import { FC } from 'react'
import Sticky from 'react-stickynode'

interface AppHeaderProps {}

export const AppHeader: FC<AppHeaderProps> = (props) => {
  /* Hook Init */
  const theme = useMantineTheme()
  return (
    <Sticky
      top={0}
      innerZ={50}
    >
      <header
        style={{
          // position: 'sticky',
          zIndex: 10,
          // top: 0,
          width: '100%',
          padding: `${theme.spacing.sm} 0`,
          boxShadow: theme.shadows.sm,
          backgroundColor: 'white',
        }}
      >
        <Container fluid>
          <Group>
            <AppLogo />

            <Button radius={'xl'}>Home</Button>

            <ActionMenu />

            <UserMenu />
          </Group>
        </Container>
      </header>
    </Sticky>
  )
}
