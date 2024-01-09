import { FC } from 'react'

import { Text } from '@mantine/core'

import { PinLayout } from '@/components/pin-layout'

interface PinSuggestProps {}

export const PinSuggest: FC<PinSuggestProps> = (props) => {
  return (
    <>
      <Text
        ta={'center'}
        fw={500}
        fz={'xl'}
      >
        More to explore
      </Text>

      <PinLayout></PinLayout>
    </>
  )
}
