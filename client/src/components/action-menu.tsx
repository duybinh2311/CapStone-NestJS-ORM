import { FC } from 'react'
import { useNavigate } from 'react-router-dom'

import { Button, Menu, TextInput, rgba } from '@mantine/core'

import { IconChevronDown, IconSearch } from '@tabler/icons-react'

import { useCss } from '@/hooks/css-hooks'
import AppRoutes from '@/routes/routes'
import { vars } from '@/theme'

interface ActionMenuProps {}

export const ActionMenu: FC<ActionMenuProps> = () => {
  const navigate = useNavigate()

  return (
    <>
      <Button
        radius={'xl'}
        onClick={() => navigate(AppRoutes.home)}
      >
        Home
      </Button>

      <Menu
        offset={5}
        styles={{
          item: useCss({
            hover: {
              backgroundColor: rgba(vars.colors.dark[0], 0.1),
            },
          }),
        }}
      >
        <Menu.Target>
          <Button
            radius={'xl'}
            variant='outline'
            rightSection={
              <IconChevronDown
                stroke={2}
                size={20}
              />
            }
            styles={{
              section: {
                marginLeft: 5,
              },
            }}
          >
            Create
          </Button>
        </Menu.Target>

        <Menu.Dropdown w={150}>
          <Menu.Item>Create Idea Pin</Menu.Item>
          <Menu.Item onClick={() => navigate(AppRoutes.upload)}>Create Pin</Menu.Item>
        </Menu.Dropdown>
      </Menu>

      <TextInput
        leftSection={
          <IconSearch
            size={20}
            stroke={3}
          />
        }
        placeholder='Search Pin'
        radius={'xl'}
        style={{
          flex: 1,
        }}
      />
    </>
  )
}
