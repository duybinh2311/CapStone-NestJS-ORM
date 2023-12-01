import { FC } from 'react'
import { useLocation } from 'react-router-dom'
import Sticky from 'react-stickynode'

import { ActionIcon, Button, Group } from '@mantine/core'

import { IconDownload, IconExternalLink, IconShare } from '@tabler/icons-react'

import { AppModule } from '@/modules/app/app.module'
import { FileUtils } from '@/utils/file.utils'

import { classes } from './pin-action-menu.css'

interface PinActionMenuProps {
  path: string
}

export const PinActionMenu: FC<PinActionMenuProps> = (props) => {
  /* Hook Init */
  const location = useLocation()

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
          <ActionIcon
            variant='transparent'
            component={'a'}
            href={AppModule.config.APP_API_URL + props.path}
            target='_blank'
          >
            <IconExternalLink stroke={2.5} />
          </ActionIcon>

          <ActionIcon
            variant='transparent'
            onClick={() => FileUtils.downloadURL(AppModule.config.APP_API_URL + props.path)}
          >
            <IconDownload stroke={2.5} />
          </ActionIcon>

          <ActionIcon
            variant='transparent'
            onClick={() => AppModule.onCopy(AppModule.config.APP_URL + location.pathname)}
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
