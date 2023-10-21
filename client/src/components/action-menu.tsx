import AppRoutes from '@/routes/routes'
import { Button, Menu, TextInput } from '@mantine/core'
import { IconChevronDown, IconSearch } from '@tabler/icons-react'
import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { actionMenuStyle } from './action-menu.css'

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
        classNames={{
          item: actionMenuStyle.menuItem,
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
