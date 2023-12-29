import { FC } from 'react'

import { Box, Container } from '@mantine/core'

import { FormUpLoad } from './component/form-upload'

export const UploadPage: FC = () => {
  return (
    <Box
      pt={40}
      pb={100}
    >
      <Container size={'md'}>
        <FormUpLoad />
      </Container>
    </Box>
  )
}
