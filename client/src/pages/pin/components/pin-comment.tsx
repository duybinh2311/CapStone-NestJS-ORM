import { FC, useState } from 'react'

import { ActionIcon, Avatar, Box, Button, Group, Menu, Stack, Text, Textarea } from '@mantine/core'
import { useClickOutside } from '@mantine/hooks'

import { IconDots, IconHeart } from '@tabler/icons-react'
import EmojiPicker, { EmojiClickData } from 'emoji-picker-react'

import { useAuth } from '@/modules/auth/auth.provider'
import { CommentModule } from '@/modules/comment/comment.module'
import { CommentResDto } from '@/modules/comment/comment.types'
import { DateUtils } from '@/utils/date.utils'

interface PinCommentProps {
  comment: CommentResDto
  fetchComments: () => void
}

export const PinComment: FC<PinCommentProps> = (props) => {
  /* App State */
  const { profile } = useAuth()

  /* Local State */
  const [showEmojiPicker, setShowEmojiPicker] = useState<boolean>(false)
  const [editComment, setEditComment] = useState<boolean>(false)
  const [emojiClickData, setEmojiClickData] = useState<EmojiClickData | null>(null)

  /* Hook Init */
  const emojiPickerRef = useClickOutside(() => setShowEmojiPicker(false))

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
          <Group pos={'relative'}>
            <Box
              ref={emojiPickerRef}
              pos={'absolute'}
              // bottom={'114%'}
              left={-100}
              display={showEmojiPicker ? 'block' : 'none'}
            >
              <EmojiPicker onEmojiClick={(emojiClickData) => setEmojiClickData(emojiClickData)} />
            </Box>

            <Textarea />

            <ActionIcon
              variant='transparent'
              onClick={() => setShowEmojiPicker((s) => !s)}
            >
              <Text
                span
                fz='xl'
              >
                {String.fromCodePoint(128515)}
              </Text>
            </ActionIcon>
          </Group>

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
                    <Menu.Item
                      fw={500}
                      onClick={() => {
                        CommentModule.delete(`${props.comment.id}`).then(() => {
                          props.fetchComments()
                        })
                      }}
                    >
                      Delete
                    </Menu.Item>
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
