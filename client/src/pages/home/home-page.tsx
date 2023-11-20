import { FC } from 'react'

import { Container } from '@mantine/core'

import { vars } from '@/app/configs/app.theme'
import { Pin } from '@/components/pin'
import { PinLayout } from '@/components/pin-layout'

export const HomePage: FC = () => {
  return (
    <section
      style={{
        paddingTop: vars.spacing.md,
        paddingBottom: vars.spacing.xl,
      }}
    >
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
