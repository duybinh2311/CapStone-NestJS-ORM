import { FC } from 'react'
import { useNavigate } from 'react-router-dom'

import { ActionIcon, Avatar, Box, Group, Menu, Text } from '@mantine/core'

import { IconBellFilled, IconCheck, IconChevronDown, IconMessageCircle } from '@tabler/icons-react'

import { css } from '@/hooks/css-hooks'
import { SignOutFunc } from '@/modules/account/account.types'
import { ProfileUserResDto } from '@/modules/user/user.types'
import AppRoutes from '@/routes/routes'
import { vars } from '@/theme'

interface UserMenuProps {
  profile: ProfileUserResDto | null
  signOutFunc: SignOutFunc
}

export const UserMenu: FC<UserMenuProps> = (props) => {
  /* Hook Init */
  const navigate = useNavigate()

  const menuItemStyle = css({
    borderRadius: vars.radius.xl,
    backgroundColor: 'transparent',
    hover: {
      backgroundColor: vars.colors.dark.light,
    },
  })

  return (
    <Group gap={0}>
      <ActionIcon
        c={vars.colors.gray[6]}
        radius={'xl'}
        size={40}
        style={menuItemStyle}
      >
        <IconBellFilled />
      </ActionIcon>

      <ActionIcon
        c={vars.colors.gray[6]}
        radius={'xl'}
        size={40}
        style={menuItemStyle}
      >
        <IconMessageCircle />
      </ActionIcon>

      <ActionIcon
        c={vars.colors.gray[6]}
        radius={'xl'}
        size={40}
        style={menuItemStyle}
        onClick={() => navigate(AppRoutes.profile.root)}
      >
        <Avatar
          src={props.profile?.avatar}
          size={'sm'}
        />
      </ActionIcon>

      <Menu
        position='bottom-end'
        width={300}
      >
        <Menu.Target>
          <ActionIcon
            c={vars.colors.gray[6]}
            radius={'xl'}
            size={40}
            style={menuItemStyle}
          >
            <IconChevronDown />
          </ActionIcon>
        </Menu.Target>

        <Menu.Dropdown>
          <Menu.Label>Currently in</Menu.Label>
          <Menu.Item
            bg={'gray.1'}
            onClick={() => navigate(AppRoutes.profile.root)}
          >
            <Group
              wrap='nowrap'
              gap={'xs'}
            >
              <Avatar
                src={props.profile?.avatar}
                size={'lg'}
              />

              <Box
                style={{
                  flex: 1,
                }}
              >
                <Text
                  inline
                  fw={500}
                  fz={14}
                >
                  {props.profile?.fullName || 'User'}
                </Text>
                <Text
                  inline
                  fw={'lighter'}
                  fz={12}
                >
                  Personal
                </Text>
                <Text
                  inline
                  fw={500}
                  w={180}
                  fz={12}
                  c={'dimmed'}
                  truncate
                >
                  {props.profile?.email || 'user@gmail.com'}
                </Text>
              </Box>

              <Box>
                <IconCheck size={16} />
              </Box>
            </Group>
          </Menu.Item>

          <Menu.Label>Your accounts</Menu.Label>
          {['Add account', 'Convert to business'].map((item) => {
            return (
              <Menu.Item
                fw={'bold'}
                key={item}
              >
                {item}
              </Menu.Item>
            )
          })}

          <Menu.Label>More options</Menu.Label>
          {['Settings', 'Tune your home feed', 'Get help', 'See terms of service', 'See privacy policy', 'Log out'].map(
            (item) => {
              return (
                <Menu.Item
                  fw={'bold'}
                  key={item}
                  onClick={item === 'Log out' ? props.signOutFunc : undefined}
                >
                  {item}
                </Menu.Item>
              )
            }
          )}
        </Menu.Dropdown>
      </Menu>
    </Group>
  )
}
