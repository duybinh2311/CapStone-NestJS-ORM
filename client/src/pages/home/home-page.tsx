import { Pin } from '@/components/pin'
import { PinLayout } from '@/components/pin-layout'
import { vars } from '@/configs/theme'
import { Button, Container } from '@mantine/core'
import axios from 'axios'
import { FC } from 'react'

export const HomePage: FC = () => {
  const fetchPins = async () => {
    const data = (await axios.get('http://localhost:3000/pin/get-all')).data
    console.log(data)

    const data2 = (
      await axios.get('http://localhost:3000/pin/get-all', {
        params: {
          cursor: data.count,
        },
      })
    ).data

    console.log(data2)
  }
  return (
    <section
      style={{
        paddingTop: vars.spacing.md,
        paddingBottom: vars.spacing.xl,
      }}
    >
      <Button onClick={fetchPins}>Fetch Pins</Button>
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
