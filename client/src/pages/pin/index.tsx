import { vars } from '@/configs/theme'
import { Box, Container, Image, ScrollArea, SimpleGrid, Text } from '@mantine/core'
import { FC } from 'react'
import { PinActionMenu } from './components/pin-action-menu'
import { PinCommentBox } from './components/pin-comment-box'
import { PinDescription } from './components/pin-description'
import { PinLayout } from '@/components/pin-layout'
import { Pin } from '@/components/pin'

export const PinPage: FC = () => {
  return (
    <>
      <section>
        <Container size={'lg'}>
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
              <Box className='pin-description'>
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
        </Container>
      </section>

      <section
        style={{
          paddingTop: vars.spacing.xl,
        }}
      >
        <Container fluid>
          <Text
            ta={'center'}
            fw={500}
            fz={'xl'}
          >
            More to explore
          </Text>
          <PinLayout>
            <Pin size='small' />
            <Pin size='medium' />
            <Pin size='large' />
            <Pin size='small' />
            <Pin size='medium' />
            <Pin size='large' />
            <Pin size='small' />
            <Pin size='medium' />
            <Pin size='large' />
            <Pin size='small' />
            <Pin size='medium' />
            <Pin size='large' />
            <Pin size='small' />
            <Pin size='medium' />
            <Pin size='large' />
            <Pin size='small' />
            <Pin size='medium' />
            <Pin size='large' />
            <Pin size='small' />
            <Pin size='medium' />
            <Pin size='large' />
          </PinLayout>
        </Container>
      </section>
    </>
  )
}
