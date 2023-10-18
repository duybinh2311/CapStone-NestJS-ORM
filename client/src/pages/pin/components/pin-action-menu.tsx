import { ActionIcon, Button, Group } from '@mantine/core'
import { IconDots, IconShare, IconUpload } from '@tabler/icons-react'
import { FC } from 'react'
import Sticky from 'react-stickynode'
import { pinActionMenuStyle } from './pin-action-menu.css'

interface PinActionMenuProps {}

export const PinActionMenu: FC<PinActionMenuProps> = (props) => {
  return (
    <Sticky
      top={68}
      innerZ={1}
      innerClass={pinActionMenuStyle.pinActionMenu}
      innerActiveClass={pinActionMenuStyle.pinActionMenuActive}
      bottomBoundary={'#pin-description'}
    >
      <Group justify='space-between'>
        <Group>
          <ActionIcon variant='transparent'>
            <IconDots stroke={2.5} />
          </ActionIcon>
          <ActionIcon variant='transparent'>
            <IconUpload stroke={2.5} />
          </ActionIcon>
          <ActionIcon variant='transparent'>
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
