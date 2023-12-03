import { FC, useEffect, useRef, useState } from 'react'

import { ActionIcon, Avatar, Box, Group, Stack, Text, Textarea, rgba } from '@mantine/core'
import { useForm } from '@mantine/form'
import { useClickOutside } from '@mantine/hooks'

import { IconHeart, IconSend } from '@tabler/icons-react'
import EmojiPicker, { EmojiClickData } from 'emoji-picker-react'

import { CommentModule } from '@/modules/comment/comment.module'
import { CreateCommentDto } from '@/modules/comment/comment.types'
import { vars } from '@/theme'

import { classes } from './pin-comment-box.css'

interface PinCommentBoxProps {
  pinId: number
  countComments: number
  fetchComments: () => void
}

export const PinCommentBox: FC<PinCommentBoxProps> = (props) => {
  /* Local State */
  const [isShowEmojiPicker, setIsShowEmojiPicker] = useState<boolean>(false)
  const [emojiClickData, setEmojiClickData] = useState<EmojiClickData | null>(null)

  /* Hook Init */
  const emojiPickerRef = useClickOutside(() => setIsShowEmojiPicker(false))
  const textAreaRef = useRef<HTMLTextAreaElement>(null)

  const form = useForm<CreateCommentDto>({
    initialValues: {
      content: '',
      pinId: props.pinId,
    },
  })

  /* Logic */
  const handleEmojiClick = (emojiClickData: EmojiClickData) => {
    if (textAreaRef) {
      const cursorPosition = textAreaRef.current?.selectionStart || 0
      const newCursorPosition = cursorPosition + emojiClickData.emoji.length

      const content = form.values.content
      const newContent = content.slice(0, cursorPosition) + emojiClickData.emoji + content.slice(cursorPosition)
      form.setFieldValue('content', newContent)

      setTimeout(() => {
        textAreaRef.current?.setSelectionRange(newCursorPosition, newCursorPosition)
        textAreaRef.current?.focus()
      }, 0)
    }
  }

  const submit = form.onSubmit((values) => {
    CommentModule.create(values).then(() => {
      form.reset()
      props.fetchComments()
    })
  })

  useEffect(() => {
    if (emojiClickData) {
      handleEmojiClick(emojiClickData)
    }
  }, [emojiClickData])

  return (
    <Stack
      py={'md'}
      px={'xl'}
      style={{
        borderTop: `1px solid ${vars.colors.gray[2]}`,
      }}
    >
      <Group justify='space-between'>
        <Text
          fw={500}
          fz='xl'
        >
          {props.countComments} Comments
        </Text>

        <Group>
          <Group gap={'xs'}>
            <Text>{String.fromCodePoint(128156)}</Text>
            <Text>{String.fromCodePoint(128525)}</Text>
            <Text>{String.fromCodePoint(128536)}</Text>
            <Text fw={500}>372</Text>
          </Group>
          <ActionIcon
            variant='transparent'
            size={'xl'}
            bg={rgba(vars.colors.dark[0], 0.1)}
            radius={'xl'}
          >
            <IconHeart stroke={2} />
          </ActionIcon>
        </Group>
      </Group>

      <form onSubmit={submit}>
        <Group
          wrap='nowrap'
          pos={'relative'}
        >
          <Box
            ref={emojiPickerRef}
            pos={'absolute'}
            bottom={'114%'}
            right={0}
            display={isShowEmojiPicker ? 'block' : 'none'}
          >
            <EmojiPicker onEmojiClick={(emojiClickData) => setEmojiClickData(emojiClickData)} />
          </Box>

          <Avatar
            src={
              'https://scontent.fsgn5-6.fna.fbcdn.net/v/t39.30808-6/261463275_2098436070312988_9106714437153092476_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=nNYtUUOdgkgAX8pMjLC&_nc_ht=scontent.fsgn5-6.fna&oh=00_AfD7xbI12F-6COeXpKZf6jeGdH7CM9ai2bLjKFmP4tAisg&oe=652FFB4B'
            }
          />

          <Group
            className={classes.commentBox}
            gap={'xs'}
            px={'xs'}
            w={'100%'}
          >
            <Textarea
              ref={textAreaRef}
              classNames={{
                input: classes.textAreaInput,
              }}
              size='md'
              placeholder='Add a comment'
              autosize
              maxRows={2}
              style={{
                flex: 1,
              }}
              {...form.getInputProps('content')}
            />

            <ActionIcon
              variant='transparent'
              onClick={() => setIsShowEmojiPicker((s) => !s)}
            >
              <Text
                span
                fz='xl'
              >
                {String.fromCodePoint(128515)}
              </Text>
            </ActionIcon>

            {form.values.content && (
              <ActionIcon
                radius={'xl'}
                color='red'
                type='submit'
              >
                <IconSend
                  size={16}
                  style={{
                    transform: 'rotate(45deg)',
                  }}
                />
              </ActionIcon>
            )}
          </Group>
        </Group>
      </form>
    </Stack>
  )
}
