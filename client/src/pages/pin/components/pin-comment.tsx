import { FC } from 'react'

import { ActionIcon, Avatar, Group, Stack, Text } from '@mantine/core'

import { IconDots, IconHeart } from '@tabler/icons-react'

import { CommentResDto } from '@/modules/comment/comment.types'
import { DateUtils } from '@/utils/date.utils'

interface PinCommentProps {
  comment: CommentResDto
}

export const PinComment: FC<PinCommentProps> = (props) => {
  return (
    <Group
      wrap='nowrap'
      align='flex-start'
    >
      <Avatar src={props.comment.author.avatar} />

      <Stack gap={5}>
        <Text>
          <Text
            span
            fw={500}
          >
            {props.comment.author.fullName}
          </Text>{' '}
          {props.comment.content}
        </Text>

        <Group>
          <Text
            fz='xs'
            c={'dimmed'}
          >
            {DateUtils.diffDate(props.comment.createdAt)}
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
