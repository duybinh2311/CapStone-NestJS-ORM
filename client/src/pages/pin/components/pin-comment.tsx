import { FC, useEffect, useRef, useState } from 'react'

import { ActionIcon, Avatar, Box, Button, Group, Menu, Stack, Text, Textarea } from '@mantine/core'
import { createFormActions, useForm } from '@mantine/form'
import { useClickOutside } from '@mantine/hooks'

import { IconDots, IconHeart } from '@tabler/icons-react'
import EmojiPicker, { EmojiClickData } from 'emoji-picker-react'

import { useAccount } from '@/hooks/account-hooks'
import { CommentModule } from '@/modules/comment/comment.module'
import { CommentResDto, UpdateCommentDto } from '@/modules/comment/comment.types'
import { DateUtils } from '@/utils/date.utils'

interface PinCommentProps {
  comment: CommentResDto
  getComments: () => void
}

export const PinComment: FC<PinCommentProps> = (props) => {
  /* App State */
  const { profile } = useAccount()

  /* Local State */
  const [isEmojiPickerOpen, setIsEmojiPickerOpen] = useState<boolean>(false)
  const [isEditingComment, setIsEditingComment] = useState<boolean>(false)
  const [emojiClickData, setEmojiClickData] = useState<EmojiClickData | null>(null)

  /* Hook Init */
  const form = useForm<UpdateCommentDto>({
    initialValues: {
      content: props.comment.content,
    },
  })

  const textAreaRef = useRef<HTMLTextAreaElement>(null)

  const emojiPickerRef = useClickOutside(() => setIsEmojiPickerOpen(false))

  /* Logic */
  const handleEmojiClick = (emojiClickData: EmojiClickData) => {
    if (textAreaRef) {
      const cursorPosition = textAreaRef.current?.selectionStart || form.values.content.length
      const newCursorPosition = cursorPosition + emojiClickData.emoji.length

      const content = form.values.content
      if (content) {
        const newContent = content.slice(0, cursorPosition) + emojiClickData.emoji + content.slice(cursorPosition)
        form.setFieldValue('content', newContent)

        setTimeout(() => {
          textAreaRef.current?.setSelectionRange(newCursorPosition, newCursorPosition)
          textAreaRef.current?.focus()
          setIsEmojiPickerOpen(false)
        }, 0)
      }
    }
  }

  const submit = form.onSubmit((values) => {
    CommentModule.update(`${props.comment.id}`, values).then(() => {
      form.reset()
      setIsEditingComment(false)
      props.getComments()
    })
  })

  useEffect(() => {
    if (emojiClickData) {
      handleEmojiClick(emojiClickData)
    }
  }, [emojiClickData])

  return (
    <Group
      wrap='nowrap'
      align='flex-start'
    >
      <Avatar src={props.comment.author.avatar} />

      {isEditingComment ? (
        <form
          style={{
            width: '100%',
          }}
          onSubmit={submit}
        >
          <Stack>
            <Group pos={'relative'}>
              {isEmojiPickerOpen && (
                <Box
                  pb={50}
                  ref={emojiPickerRef}
                  pos={'absolute'}
                  top={'-100%'}
                  right={'50%'}
                  style={{
                    zIndex: 100,
                    transform: 'translateX(40%)',
                  }}
                >
                  <EmojiPicker onEmojiClick={(emojiClickData) => setEmojiClickData(emojiClickData)} />
                </Box>
              )}

              <Textarea
                ref={textAreaRef}
                radius={'lg'}
                style={{
                  flex: 1,
                }}
                {...form.getInputProps('content')}
              />

              <ActionIcon
                variant='transparent'
                onClick={() => setIsEmojiPickerOpen(true)}
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
                radius={'xl'}
                variant='outline'
                onClick={() => {
                  form.reset()
                  setIsEditingComment(false)
                }}
              >
                Cancel
              </Button>

              <Button
                radius={'xl'}
                color='red'
                type='submit'
              >
                Save
              </Button>
            </Group>
          </Stack>
        </form>
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
                      onClick={() => setIsEditingComment(true)}
                    >
                      Edit
                    </Menu.Item>
                    <Menu.Item
                      fw={500}
                      onClick={() => {
                        CommentModule.delete(`${props.comment.id}`).then(() => {
                          props.getComments()
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
