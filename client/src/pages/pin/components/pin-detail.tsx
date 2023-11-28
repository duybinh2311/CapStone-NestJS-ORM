import { FC } from 'react'

import { SimpleGrid, Box, ScrollArea, Image } from '@mantine/core'

import { vars } from '@/theme'

import { PinActionMenu } from './pin-action-menu'
import { PinCommentBox } from './pin-comment-box'
import { PinDescription } from './pin-description'

interface PinDetailProps {}

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
          src={'https://i.pinimg.com/564x/e6/22/ce/e622ce555bcb0ac835a98027868934f3.jpg'}
        />
      </Box>

      <Box>
        <Box id='pin-description'>
          <PinActionMenu />

          <ScrollArea h={'calc(100vh - 325px'}>
            <PinDescription />
          </ScrollArea>
        </Box>

        <Box>
          <PinCommentBox />
        </Box>
      </Box>
    </SimpleGrid>
  )
}
