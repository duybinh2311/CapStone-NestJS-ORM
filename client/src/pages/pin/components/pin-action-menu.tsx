import { FC } from 'react'
import Sticky from 'react-stickynode'

import { ActionIcon, Button, Group, Menu } from '@mantine/core'

import { IconDots, IconDownload, IconEdit, IconEyeOff, IconReport, IconShare } from '@tabler/icons-react'

import { useAccount } from '@/hooks/account-hooks'
import { AppModule } from '@/modules/app/app.module'
import { FileUtils } from '@/utils/file.utils'

import { classes } from './pin-action-menu.css'

interface PinActionMenuProps {
  path: string
  authorId: number
  openEdit: () => void
}

export const PinActionMenu: FC<PinActionMenuProps> = (props) => {
  /* App State */
  const { profile } = useAccount()

  return (
    <Sticky
      top={74}
      innerZ={1}
      innerClass={classes.pinActionMenu}
      innerActiveClass={classes.pinActionMenuActive}
      bottomBoundary={'#pin-description'}
    >
      <Group justify='space-between'>
        <Group>
          <Menu>
            <Menu.Target>
              <ActionIcon variant='transparent'>
                <IconDots stroke={2.5} />
              </ActionIcon>
            </Menu.Target>

            <Menu.Dropdown>
              {profile?.id === props.authorId && (
                <Menu.Item
                  leftSection={<IconEdit size={16} />}
                  fw={500}
                  onClick={props.openEdit}
                >
                  Edit Pin
                </Menu.Item>
              )}

              <Menu.Item
                leftSection={<IconEyeOff size={16} />}
                fw={500}
              >
                Hide Pin
              </Menu.Item>

              <Menu.Item
                leftSection={<IconReport size={16} />}
                fw={500}
              >
                Report Pin
              </Menu.Item>
            </Menu.Dropdown>
          </Menu>

          <ActionIcon
            variant='transparent'
            onClick={() => FileUtils.downloadURL(AppModule.config.APP_API_URL + props.path)}
          >
            <IconDownload stroke={2.5} />
          </ActionIcon>

          <ActionIcon
            variant='transparent'
            onClick={() => AppModule.onCopy(window.location.href)}
          >
            <IconShare stroke={2.5} />
          </ActionIcon>
        </Group>

        <Button
          color='red'
          radius={'xl'}
          size='md'
        >
          Save
        </Button>
      </Group>
    </Sticky>
  )
}
