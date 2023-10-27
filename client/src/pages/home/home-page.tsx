import { Pin } from '@/components/pin'
import { PinLayout } from '@/components/pin-layout'
import { vars } from '@/configs/theme'
import { Box, ColorSwatch, Container, Group } from '@mantine/core'
import { FC } from 'react'
import chorma from 'chroma-js'

export const HomePage: FC = () => {
  const generateColors = (color: string) => {}
  
  return (
    <section
      style={{
        paddingTop: vars.spacing.md,
        paddingBottom: vars.spacing.xl,
      }}
    >
      {/* <Container fluid>
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
      </Container> */}

      <Group mt={100}>
        {/* {arr2.map((color, index) => (
          <Box
            key={index}
            bg={color}
            w={50}
            h={50}
          />
        ))} */}
      </Group>
    </section>
  )
}
