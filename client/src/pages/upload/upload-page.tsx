import { FC } from 'react'

import { Container } from '@mantine/core'

import { FormUpload } from './component/form-upload'

export const UploadPage: FC = () => {
  return (
    <section
      style={{
        paddingTop: 40,
        paddingBottom: 100,
      }}
    >
      <Container size={'md'}>
        <FormUpload />
      </Container>
    </section>
  )
}
