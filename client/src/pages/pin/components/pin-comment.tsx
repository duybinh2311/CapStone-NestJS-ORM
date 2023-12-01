import { FC, useState } from 'react'

import { ActionIcon, Avatar, Button, Group, Menu, Stack, Text, Textarea } from '@mantine/core'

import { IconDots, IconHeart } from '@tabler/icons-react'

import { useAuth } from '@/modules/auth/auth.provider'
import { CommentResDto } from '@/modules/comment/comment.types'
import { DateUtils } from '@/utils/date.utils'

interface PinCommentProps {
  comment: CommentResDto
}

export const PinComment: FC<PinCommentProps> = (props) => {
  /* App State */
  const { profile } = useAuth()
  profile?.age

  /* Local State */
  const [editComment, setEditComment] = useState<boolean>(false)

  return (
    <Group
      wrap='nowrap'
      align='flex-start'
    >
      <Avatar src={props.comment.author.avatar} />

      {editComment ? (
        <Stack
          w={'100%'}
          gap={'xs'}
        >
          <Textarea />
          <Group justify='flex-end'>
            <Button
              variant='outline'
              onClick={() => setEditComment(false)}
            >
              Cancel
            </Button>
            <Button color='red'>Save</Button>
          </Group>
        </Stack>
      ) : (
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

            <Menu>
              <Menu.Target>
                <ActionIcon
                  variant='transparent'
                  size={'xs'}
                >
                  <IconDots />
                </ActionIcon>
              </Menu.Target>

              <Menu.Dropdown miw={120}>
                {props.comment.authorId === profile?.id ? (
                  <>
                    <Menu.Item
                      fw={500}
                      onClick={() => setEditComment(true)}
                    >
                      Edit
                    </Menu.Item>
                    <Menu.Item fw={500}>Delete</Menu.Item>
                  </>
                ) : (
                  <>
                    <Menu.Item fw={500}>Report this content</Menu.Item>
                    <Menu.Item fw={500}>Block user</Menu.Item>
                  </>
                )}
              </Menu.Dropdown>
            </Menu>
          </Group>
        </Stack>
      )}
    </Group>
  )
}
