import { vars } from '@/_theme'
import { Avatar, Box, Group } from '@mantine/core'
import {
  IconBellFilled,
  IconChevronDown,
  IconMessageCircle,
} from '@tabler/icons-react'
import { FC } from 'react'
import { classes } from './user-menu.css'

interface UserMenuProps {}

export const UserMenu: FC<UserMenuProps> = (props) => {
  return (
    <Group gap={0}>
      <Box
        display={'flex'}
        c={vars.colors.gray[6]}
        className={classes.menuItem}
      >
        <IconBellFilled />
      </Box>

      <Box
        display={'flex'}
        c={vars.colors.gray[6]}
        className={classes.menuItem}
      >
        <IconMessageCircle />
      </Box>

      <Box
        display={'flex'}
        className={classes.menuItem}
      >
        <Avatar
          src={'/img/avatar.jpg'}
          size={'sm'}
        />
      </Box>

      <Box
        display={'flex'}
        c={vars.colors.gray[6]}
        className={classes.menuItem}
      >
        <IconChevronDown />
      </Box>
    </Group>
  )
}
