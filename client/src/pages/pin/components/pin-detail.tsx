import { FC } from 'react'

import { Box, Image, ScrollArea, SimpleGrid } from '@mantine/core'

import { AppModule } from '@/modules/app/app.module'
import { CommentResDto } from '@/modules/comment/comment.types'
import { PinResDto } from '@/modules/pin/pin.types'
import { vars } from '@/theme'

import { PinActionMenu } from './pin-action-menu'
import { PinCommentBox } from './pin-comment-box'
import { PinDescription } from './pin-description'

interface PinDetailProps {
  pin: PinResDto
  comments: CommentResDto[]
  fetchComments: () => void
}

export const PinDetail: FC<PinDetailProps> = (props) => {
  return (
    <SimpleGrid
      mx={'auto'}
      cols={2}
      spacing={0}
      h={'calc(100vh - 98px)'}
      style={{
        boxShadow: '0 0 10px 5px rgba(0,0,0,0.1)',
        borderRadius: vars.radius.xl,
        overflowX: 'clip',
      }}
    >
      <Image
        w={'100%'}
        h={'100%'}
        style={{
          overflow: 'auto',
        }}
        src={AppModule.config.APP_API_URL + props.pin.path}
      />

      <Box
        h={'100%'}
        style={{
          overflow: 'auto',
        }}
      >
        <Box id='pin-description'>
          <PinActionMenu path={props.pin.path} />

          <ScrollArea h={'calc(100vh - 319px'}>
            <PinDescription
              title={props.pin.title}
              description={props.pin.description}
              path={props.pin.path}
              author={props.pin.author}
              comments={props.comments}
              fetchComments={props.fetchComments}
            />
          </ScrollArea>
        </Box>

        <PinCommentBox
          pinId={props.pin.id}
          fetchComments={props.fetchComments}
        />
      </Box>
    </SimpleGrid>
  )
}
