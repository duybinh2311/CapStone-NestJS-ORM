import { Container } from '@mantine/core'
import { FC } from 'react'
import { PinLayout } from './components/pin-layout'
import { Pin } from './components/pin'

interface HomePageProps {}

export const HomePage: FC<HomePageProps> = (props) => {
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
        </PinLayout>
      </Container>
    </section>
  )
}
