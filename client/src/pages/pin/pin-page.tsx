import { FC, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { Box, Container, ScrollArea, SimpleGrid } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'

import { AppModule } from '@/modules/app/app.module'
import { CommentModule } from '@/modules/comment/comment.module'
import { CommentResDto } from '@/modules/comment/comment.types'
import { PinModule } from '@/modules/pin/pin.module'
import { PinResDto } from '@/modules/pin/pin.types'
import { vars } from '@/theme'

import { PinActionMenu } from './components/pin-action-menu'
import { PinCommentBox } from './components/pin-comment-box'
import { PinDescription } from './components/pin-description'
import { PinEdit } from './components/pin-edit'
import { PinImage } from './components/pin-image'
import { PinSuggest } from './components/pin-suggest'

export const PinPage: FC = () => {
  /* Local State */
  const [pin, setPin] = useState<PinResDto>()
  const [comments, setComments] = useState<CommentResDto[]>([])
  const [countComments, setCountComments] = useState<number>(0)

  /* Hook Init */
  const params = useParams<{ id: string }>()
  const [opened, { close, open }] = useDisclosure()

  /* Logic */
  const getPin = () => {
    if (params.id) {
      PinModule.getById(+params.id)
        .then((res) => {
          setPin(res.data)
        })
        .catch((err) => {
          AppModule.onError(err.message || err.error)
        })
    }
  }

  const getComments = () => {
    if (pin) {
      CommentModule.getByPinId(pin.id)
        .then((res) => {
          setComments(res.data)
          setCountComments(res.count)
        })
        .catch((err) => {
          AppModule.onError(err.message || err.error)
        })
    }
  }

  useEffect(() => {
    getPin()
  }, [params.id])

  useEffect(() => {
    getComments()
  }, [pin])

  if (!pin) {
    return null
  }

  return (
    <>
      <PinEdit
        opened={opened}
        close={close}
        title={pin.title}
        description={pin.description}
        pinId={pin.id}
        setPin={setPin}
      />

      <Box pt={'sm'}>
        <Container size={'lg'}>
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
            <PinImage path={pin.path} />

            <Box>
              <Box id='pin-description'>
                <PinActionMenu
                  path={pin.path}
                  authorId={pin.authorId}
                  pinId={pin.id}
                  openEdit={open}
                />

                <ScrollArea h={'calc(100vh - 319px'}>
                  <PinDescription
                    title={pin.title}
                    description={pin.description}
                    path={pin.path}
                    author={pin.author}
                    comments={comments}
                    getComments={getComments}
                  />
                </ScrollArea>
              </Box>

              <PinCommentBox
                countComments={countComments}
                pinId={pin.id}
                getComments={getComments}
              />
            </Box>
          </SimpleGrid>
        </Container>
      </Box>

      <Box py={'xl'}>
        <Container fluid>
          <PinSuggest />
        </Container>
      </Box>
    </>
  )
}
