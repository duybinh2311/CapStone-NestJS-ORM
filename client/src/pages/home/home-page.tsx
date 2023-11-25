import { FC, useEffect, useState } from 'react'

import { Container } from '@mantine/core'

import { Pin, PinSizeEnum } from '@/components/pin'
import { PinLayout } from '@/components/pin-layout'
import { PinModule } from '@/modules/pin/pin.module'
import { PinResDto } from '@/modules/pin/pin.types'
import { vars } from '@/theme'

export const HomePage: FC = () => {
  /* Local State */
  const [pinList, setPinList] = useState<PinResDto[]>([])

  /* Logic */
  useEffect(() => {
    PinModule.getAll().then((res) => {
      setPinList(res.data)
    })
  }, [])

  /* Render */
  const renderPins = () => {
    const sizes = ['small', 'medium', 'large'] as PinSizeEnum[]
    return pinList.map((pin, index) => {
      const size = sizes[index % sizes.length]
      return (
        <Pin
          key={pin.id}
          size={size}
          pin={pin}
        />
      )
    })
  }
  return (
    <section
      style={{
        paddingTop: vars.spacing.md,
        paddingBottom: vars.spacing.xl,
      }}
    >
      <Container fluid>
        <PinLayout>{renderPins()}</PinLayout>
      </Container>
    </section>
  )
}
