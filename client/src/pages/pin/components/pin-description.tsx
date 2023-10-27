import { ActionIcon, Anchor, Avatar, Button, Group, Stack, Text, Title } from '@mantine/core'
import { IconChevronDown } from '@tabler/icons-react'
import { FC, useState } from 'react'
import { PinComment } from './pin-comment'

interface PinDescriptionProps {}

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
          href='/'
          c={'blue'}
        >
          Link
        </Anchor>

        <Title
          order={2}
          fw={500}
        >
          Galaxy Universe
        </Title>
        <Text lineClamp={3}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, ut voluptatum. Mollitia, repellendus
          voluptates ipsum quae accusamus exercitationem neque dignissimos atque molestiae minima. Non voluptate dolor
          veritatis consequatur quas eos?
        </Text>
      </Stack>

      <Group justify='space-between'>
        <Group gap={'xs'}>
          <Avatar
            size={'md'}
            src={
              'https://scontent.fsgn5-6.fna.fbcdn.net/v/t39.30808-6/261463275_2098436070312988_9106714437153092476_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=nNYtUUOdgkgAX8pMjLC&_nc_ht=scontent.fsgn5-6.fna&oh=00_AfD7xbI12F-6COeXpKZf6jeGdH7CM9ai2bLjKFmP4tAisg&oe=652FFB4B'
            }
          />
          <Stack gap={0}>
            <Text
              fz='sm'
              fw={500}
            >
              Vanshika
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

        {showComment && (
          <>
            <PinComment />
            <PinComment />
            <PinComment />
            <PinComment />
            <PinComment />
          </>
        )}
      </Stack>
    </Stack>
  )
}
