import { FC } from 'react'

import { SimpleGrid, Box, ScrollArea, Image } from '@mantine/core'

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
}

export const PinDetail: FC<PinDetailProps> = (props) => {
  return (
    <SimpleGrid
      style={{
        boxShadow: '0 0 10px 5px rgba(0,0,0,0.1)',
        borderRadius: vars.radius.xl,
        overflowX: 'clip',
      }}
      mx={'auto'}
      cols={2}
      spacing={0}
    >
      <Box>
        <Image
          height={'100%'}
          width={'100%'}
          src={`${AppModule.config.APP_API_URL}/${props.pin.path}`}
        />
      </Box>

      <Box
        h={'calc(100vh - 96px)'}
        style={{
          overflow: 'auto',
        }}
      >
        <Box id='pin-description'>
          <PinActionMenu />

          <ScrollArea h={'calc(100vh - 325px'}>
            <PinDescription
              title={props.pin.title}
              description={props.pin.description}
              path={props.pin.path}
              author={props.pin.author}
              comments={props.comments}
            />
          </ScrollArea>
        </Box>

        <Box>
          <PinCommentBox />
        </Box>
      </Box>
    </SimpleGrid>
  )
}
