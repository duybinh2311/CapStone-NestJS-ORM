import { FC, useEffect, useRef, useState } from 'react'

import { ActionIcon, Avatar, Box, Group, LoadingOverlay, Stack, Text, Textarea, rgba } from '@mantine/core'
import { useForm } from '@mantine/form'
import { useClickOutside } from '@mantine/hooks'

import { IconHeart, IconSend } from '@tabler/icons-react'
import EmojiPicker, { EmojiClickData } from 'emoji-picker-react'

import { useAccount } from '@/hooks/account.hook'
import { useCss } from '@/hooks/css.hook'
import { AppModule } from '@/modules/app/app.module'
import { CommentModule } from '@/modules/comment/comment.module'
import { CreateCommentDto } from '@/modules/comment/comment.types'
import { vars } from '@/theme'
import { IResError } from '@/types'

interface PinCommentBoxProps {
  pinId: number
  countComments: number
  getComments: () => void
}

export const PinCommentBox: FC<PinCommentBoxProps> = (props) => {
  /* App State */
  const { profile } = useAccount()

  /* Local State */
  const [isEmojiPickerOpen, setIsEmojiPickerOpen] = useState<boolean>(false)
  const [emojiClickData, setEmojiClickData] = useState<EmojiClickData | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  /* Hook Init */
  const emojiPickerRef = useClickOutside(() => setIsEmojiPickerOpen(false))
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
    setIsLoading(true)

    CommentModule.create(values)
      .then(() => {
        form.reset()
        props.getComments()
      })
      .catch((err: IResError) => {
        AppModule.onError(err.message || err.error)
      })
      .finally(() => {
        setIsLoading(false)
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
          <LoadingOverlay
            visible={isLoading}
            zIndex={1000}
            overlayProps={{ blur: 1 }}
            loaderProps={{ color: 'red' }}
          />

          <Box
            ref={emojiPickerRef}
            pos={'absolute'}
            bottom={'114%'}
            right={0}
            display={isEmojiPickerOpen ? 'block' : 'none'}
          >
            <EmojiPicker onEmojiClick={(emojiClickData) => setEmojiClickData(emojiClickData)} />
          </Box>

          <Avatar src={AppModule.config.APP_API_URL + profile?.avatar} />

          <Group
            gap={'xs'}
            px={'xs'}
            w={'100%'}
            style={useCss({
              border: `1px solid ${vars.colors.gray[4]}`,
              borderRadius: vars.radius.xl,
              overflow: 'hidden',
            })}
          >
            <Textarea
              ref={textAreaRef}
              size='md'
              placeholder='Add a comment'
              autosize
              maxRows={1}
              style={{
                flex: 1,
              }}
              styles={{
                input: {
                  border: 'none',
                },
              }}
              {...form.getInputProps('content')}
            />

            <ActionIcon
              variant='transparent'
              onClick={() => setIsEmojiPickerOpen((s) => !s)}
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
