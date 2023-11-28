import { FC } from 'react'
import { useParams } from 'react-router-dom'

import { Container } from '@mantine/core'

import { vars } from '@/theme'

import { PinDetail } from './components/pin-detail'
import { PinSuggest } from './components/pin-suggest'

export const PinPage: FC = () => {
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
