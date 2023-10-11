import { FC } from 'react'
import { Pin } from '@/components/pin'
import { PinLayout } from '@/components/pin-layout'
import { Container } from '@mantine/core'

export const HomePage: FC = () => {
  return (
    <section>
      <Container fluid>
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
          <Pin size='small' />
          <Pin size='medium' />
          <Pin size='large' />
          <Pin size='small' />
          <Pin size='medium' />
          <Pin size='large' />
        </PinLayout>
      </Container>
    </section>
  )
}
