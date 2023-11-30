import { FC, useEffect, useState } from 'react'

import { ActionIcon, Avatar, Box, Group, Stack, Text, Textarea, rgba } from '@mantine/core'
import { useForm } from '@mantine/form'
import { useClickOutside } from '@mantine/hooks'

import { IconHeart } from '@tabler/icons-react'
import EmojiPicker, { EmojiClickData } from 'emoji-picker-react'

import { vars } from '@/theme'

interface PinCommentBoxProps {}

export const PinCommentBox: FC<PinCommentBoxProps> = (props) => {
  /* Local State */
  const [showEmojiPicker, setShowEmojiPicker] = useState<boolean>(false)
  const [emojiClickData, setEmojiClickData] = useState<EmojiClickData | null>(null)

  /* Hook Init */
  const emojiPickerRef = useClickOutside(() => setShowEmojiPicker(false))

  const form = useForm({
    initialValues: {
      comment: '',
    },
  })

  /* Logic */
  useEffect(() => {
    if (emojiClickData) {
      form.setFieldValue('comment', form.values.comment + emojiClickData.emoji)
    }
  }, [emojiClickData])

  return (
    <Stack
      py={'md'}
      px={'xl'}
      style={{
        borderTop: `1px solid ${vars.colors.gray[2]}`,
        outline: '1px solid red',
      }}
    >
      <Group justify='space-between'>
        <Text
          fw={500}
          fz='xl'
        >
          81 Comments
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

      <form>
        <Group
          wrap='nowrap'
          pos={'relative'}
        >
          <Box
            ref={emojiPickerRef}
            pos={'absolute'}
            bottom={'114%'}
            right={0}
            display={showEmojiPicker ? 'block' : 'none'}
          >
            <EmojiPicker onEmojiClick={(emojiClickData) => setEmojiClickData(emojiClickData)} />
          </Box>

          <Avatar
            src={
              'https://scontent.fsgn5-6.fna.fbcdn.net/v/t39.30808-6/261463275_2098436070312988_9106714437153092476_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=nNYtUUOdgkgAX8pMjLC&_nc_ht=scontent.fsgn5-6.fna&oh=00_AfD7xbI12F-6COeXpKZf6jeGdH7CM9ai2bLjKFmP4tAisg&oe=652FFB4B'
            }
          />

          <Group
            gap={'xs'}
            px={'xs'}
            style={{
              border: `1px solid ${vars.colors.gray[2]}`,
              borderRadius: vars.radius.xl,
            }}
            w={'100%'}
          >
            <Textarea
              size='md'
              placeholder='Add a comment'
              autosize
              py={5}
              maxRows={2}
              style={{
                flex: 1,
              }}
              styles={{
                input: {
                  border: 'none',
                },
              }}
              {...form.getInputProps('comment')}
            />

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
        </Group>
      </form>
    </Stack>
  )
}
