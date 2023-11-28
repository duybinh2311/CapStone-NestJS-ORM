import { FC, useState } from 'react'
import { useParams } from 'react-router-dom'

import { Container } from '@mantine/core'

import { PinResDto } from '@/modules/pin/pin.types'
import { vars } from '@/theme'

import { PinDetail } from './components/pin-detail'
import { PinSuggest } from './components/pin-suggest'

export const PinPage: FC = () => {
  /* Local State */
  const [pin, setPin] = useState<PinResDto>()

  /* Hook Init */
  const params = useParams<{ id: string }>()

  return (
    <>
      <section
        style={{
          paddingTop: vars.spacing.sm,
        }}
      >
        <Container size={'lg'}>
          <PinDetail />
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
