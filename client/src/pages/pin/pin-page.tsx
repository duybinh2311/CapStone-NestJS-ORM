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
  const [countComments, setCountComments] = useState<number>(0)

  /* Hook Init */
  const params = useParams<{ id: string }>()

  /* Logic */
  const fetchComments = () => {
    if (pin) {
      CommentModule.getByPinId(`${pin.id}`)
        .then((res) => {
          setComments(res.data)
          setCountComments(res.count)
        })
        .catch((err) => {
          AppModule.onError(err?.message || err.error)
        })
    }
  }

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
    fetchComments()
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
            countComments={countComments}
            fetchComments={fetchComments}
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
