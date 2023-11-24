import { FC, useEffect, useState } from 'react'

import { Container } from '@mantine/core'

import { Pin } from '@/components/pin'
import { PinLayout } from '@/components/pin-layout'
import { PinModule } from '@/modules/pin/pin.module'
import { PinResDto } from '@/modules/pin/pin.types'
import { vars } from '@/theme'

export const HomePage: FC = () => {
  /* Local State */
  const [pinList, setPinList] = useState<PinResDto[]>([])
  console.log(6 % 3)

  /* Logic */
  useEffect(() => {
    PinModule.getAll().then((res) => {
      setPinList(res.data)
    })
  }, [])

  /* Render */
  const renderPins = () => {
    const sizes = ['small', 'medium', 'large']
    return pinList.map((pin, index) => {
      const size = sizes[index % sizes.length]
      return (
        <Pin
          key={pin.id}
          size={size as any}
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
