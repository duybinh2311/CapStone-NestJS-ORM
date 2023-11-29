import { FC, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { Container } from '@mantine/core'

import { AppModule } from '@/modules/app/app.module'
import { CommentModule } from '@/modules/comment/comment.module'
import { CommentResDto } from '@/modules/comment/comment.types'
import { PinModule } from '@/modules/pin/pin.module'
import { PinResDto } from '@/modules/pin/pin.types'
import { vars } from '@/theme'

import { PinDetail } from './components/pin-detail'
import { PinSuggest } from './components/pin-suggest'

export const PinPage: FC = () => {
  /* Local State */
  const [pin, setPin] = useState<PinResDto>()
  const [comments, setComments] = useState<CommentResDto[]>([])

  /* Hook Init */
  const params = useParams<{ id: string }>()

  /* Logic */
  useEffect(() => {
    if (params.id) {
      PinModule.getById(params.id)
        .then((res) => {
          setPin(res.data)
        })
        .catch((err) => {
          AppModule.onError(err?.message || err.error)
        })
    }
  }, [params.id])

  useEffect(() => {
    if (pin) {
      CommentModule.getByPinId(`${pin.id}`)
        .then((res) => {
          setComments(res.data)
        })
        .catch((err) => {
          AppModule.onError(err?.message || err.error)
        })
    }
  }, [pin])

  if (!pin) {
    return null
  }

  return (
    <>
      <section
        style={{
          paddingTop: vars.spacing.sm,
        }}
      >
        <Container size={'lg'}>
          <PinDetail
            pin={pin}
            comments={comments}
          />
        </Container>
      </section>

      <section
        style={{
          padding: `${vars.spacing.xl} 0`,
        }}
      >
        <Container fluid>
          <PinSuggest />
        </Container>
      </section>
    </>
  )
}
