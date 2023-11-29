import { FC, useState } from 'react'

import { ActionIcon, Anchor, Avatar, Button, Group, Stack, Text, Title } from '@mantine/core'

import { IconChevronDown } from '@tabler/icons-react'

import { AppModule } from '@/modules/app/app.module'
import { CommentResDto } from '@/modules/comment/comment.types'
import { AuthorDto } from '@/types'

import { PinComment } from './pin-comment'

interface PinDescriptionProps {
  title?: string
  description?: string
  path: string
  author: AuthorDto
  comments: CommentResDto[]
}

export const PinDescription: FC<PinDescriptionProps> = (props) => {
  /* Local State */
  const [showComment, setShowComment] = useState<boolean>(false)

  return (
    <Stack
      py={'md'}
      gap={'xl'}
      px={'xl'}
    >
      <Stack>
        <Anchor
          underline='always'
          href={`${AppModule.config.APP_API_URL}/${props.path}`}
          c={'blue'}
          target='_blank'
        >
          Link
        </Anchor>

        <Title
          order={2}
          fw={500}
        >
          {props?.title}
        </Title>

        <Text lineClamp={3}>{props?.description}</Text>
      </Stack>

      <Group justify='space-between'>
        <Group gap={'xs'}>
          <Avatar
            size={'md'}
            src={props.author.avatar}
          />
          <Stack gap={0}>
            <Text
              fz='sm'
              fw={500}
            >
              {props.author.fullName}
            </Text>
            <Text
              fz='xs'
              c={'dimmed'}
            >
              53 followers
            </Text>
          </Stack>
        </Group>

        <Button
          radius={'xl'}
          size='md'
        >
          Follow
        </Button>
      </Group>

      <Stack>
        <Group justify='space-between'>
          <Text
            fw={500}
            fz='xl'
          >
            Comments
          </Text>

          <ActionIcon
            variant='transparent'
            onClick={() => setShowComment((s) => !s)}
          >
            <IconChevronDown
              style={{
                transition: 'transform 0.2s ease-in-out',
                transform: showComment ? 'rotate(-180deg)' : 'rotate(0deg)',
              }}
            />
          </ActionIcon>
        </Group>

        <>
          {showComment &&
            props.comments.map((comment) => {
              return (
                <PinComment
                  key={comment.id}
                  comment={comment}
                />
              )
            })}
        </>
      </Stack>
    </Stack>
  )
}
