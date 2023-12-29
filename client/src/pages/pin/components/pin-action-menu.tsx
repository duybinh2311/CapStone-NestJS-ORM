import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import Sticky from 'react-stickynode'

import { ActionIcon, Button, Group, Menu } from '@mantine/core'
import { modals } from '@mantine/modals'

import { IconDots, IconDownload, IconEdit, IconEyeOff, IconReport, IconShare, IconTrash } from '@tabler/icons-react'

import { useAccount } from '@/hooks/account.hook'
import { AppModule } from '@/modules/app/app.module'
import { PinModule } from '@/modules/pin/pin.module'
import { FileUtils } from '@/utils/file.utils'

import { classes } from './pin-action-menu.css'

interface PinActionMenuProps {
  path: string
  authorId: number
  pinId: number
  openEdit: () => void
}

export const PinActionMenu: FC<PinActionMenuProps> = (props) => {
  /* App State */
  const { profile } = useAccount()

  /* Hook Init */
  const navigate = useNavigate()

  /* Logic */
  const deletePin = () =>
    PinModule.delete(props.pinId).then((res) => {
      AppModule.onSuccess(res.message)
      navigate('/')
    })

  const downLoadPin = () => FileUtils.downloadURL(AppModule.config.APP_API_URL + props.path)

  const copyPinLink = () => AppModule.onCopy(window.location.href)

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
                <>
                  <Menu.Item
                    leftSection={<IconEdit size={16} />}
                    fw={500}
                    onClick={props.openEdit}
                  >
                    Edit Pin
                  </Menu.Item>

                  <Menu.Item
                    leftSection={<IconTrash size={16} />}
                    fw={500}
                    onClick={() =>
                      modals.openConfirmModal({
                        title: 'Delete Pin',
                        children: 'Are you sure you want to delete this pin?',
                        labels: {
                          confirm: 'Delete',
                          cancel: 'Cancel',
                        },
                        onConfirm: deletePin,
                        confirmProps: {
                          color: 'red',
                        },
                      })
                    }
                  >
                    Delete Pin
                  </Menu.Item>
                </>
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
            onClick={downLoadPin}
          >
            <IconDownload stroke={2.5} />
          </ActionIcon>

          <ActionIcon
            variant='transparent'
            onClick={copyPinLink}
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
