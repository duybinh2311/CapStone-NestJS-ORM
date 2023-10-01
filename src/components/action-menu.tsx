import { Menu, Button, TextInput } from '@mantine/core'
import { IconChevronDown } from '@tabler/icons-react'
import { FC } from 'react'
import { classes } from './action-menu.css'

interface ActionMenuProps {}

export const ActionMenu: FC<ActionMenuProps> = (props) => {
  return (
    <>
      <Menu
        offset={5}
        classNames={{
          item: classes.menuItem,
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
          <Menu.Item>Create Pin</Menu.Item>
        </Menu.Dropdown>
      </Menu>

      <TextInput
        radius={'xl'}
        style={{
          flex: 1,
        }}
      />
    </>
  )
}
