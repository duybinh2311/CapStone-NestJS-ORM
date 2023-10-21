import { ActionIcon, Avatar, Group, Stack, Text } from '@mantine/core'
import { IconDots, IconHeart } from '@tabler/icons-react'
import { FC } from 'react'

interface PinCommentProps {}

export const PinComment: FC<PinCommentProps> = (props) => {
  return (
    <Group
      wrap='nowrap'
      align='flex-start'
    >
      <Avatar src={'https://i.pravatar.cc/300'} />

      <Stack gap={5}>
        <Text>
          <Text
            span
            fw={500}
          >
            SimpleB
          </Text>{' '}
          ayo when I do that with my hand it matches his hand perfectly lol 🤣 I smell luv blossoming 🤨🤨
        </Text>

        <Group>
          <Text
            fz='xs'
            c={'dimmed'}
          >
            14w
          </Text>
          <Text
            fz='xs'
            c={'dimmed'}
            style={{
              cursor: 'pointer',
            }}
          >
            Reply
          </Text>
          <ActionIcon
            variant='transparent'
            size={'xs'}
          >
            <IconHeart />
          </ActionIcon>
          <ActionIcon
            variant='transparent'
            size={'xs'}
          >
            <IconDots />
          </ActionIcon>
        </Group>
      </Stack>
    </Group>
  )
}
