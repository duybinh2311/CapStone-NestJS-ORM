import { FC, useEffect, useState } from 'react'

import { Box, Container } from '@mantine/core'

import { Pin, PinSizeEnum } from '@/components/pin'
import { PinLayout } from '@/components/pin-layout'
import { AppModule } from '@/modules/app/app.module'
import { PinModule } from '@/modules/pin/pin.module'
import { PinResDto, PinSortByEnum } from '@/modules/pin/pin.types'
import { IResError, SortOrderEnum } from '@/types'

export const HomePage: FC = () => {
  /* Local State */
  const [pinList, setPinList] = useState<PinResDto[]>([])

  /* Logic */
  useEffect(() => {
    PinModule.getAll({
      sortBy: PinSortByEnum.updatedAt,
      sortOrder: SortOrderEnum.DESC,
    })
      .then((res) => {
        setPinList(res.data)
      })
      .catch((err: IResError) => {
        AppModule.onError(err.message || err.error)
      })
  }, [])

  return (
    <Box
      pt={'md'}
      pb={'xl'}
    >
      <Container fluid>
        <PinLayout>
          {((): JSX.Element[] => {
            const sizes = [PinSizeEnum.small, PinSizeEnum.medium, PinSizeEnum.large]
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
          })()}
        </PinLayout>
      </Container>
    </Box>
  )
}
