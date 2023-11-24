import { FC, useState } from 'react'

import { ActionIcon, Box, Button, Grid, Stack } from '@mantine/core'

import { IconDots } from '@tabler/icons-react'

import { FileModule } from '@/modules/file/file.module'
import { PinModule } from '@/modules/pin/pin.module'
import { vars } from '@/theme'

import { FormUploadProvider, useFormUpload } from '../providers/form-upload.provider'
import { FormDesc } from './form-desc'
import { FormFile } from './form-file'

interface FormUploadProps {}

export const FormUpload: FC<FormUploadProps> = (props) => {
  /* Local State */
  const [file, setFile] = useState<File>()

  /* Hook Init */
  const form = useFormUpload({
    initialValues: {
      title: '',
      description: '',
      path: '',
    },
  })

  /* Logic */
  const submit = form.onSubmit((values) => {
    if (file) {
      FileModule.upLoad({ file: file }).then((res) => {
        PinModule.create({ ...values, path: res.data.path })
      })
    }
  })

  return (
    <Box
      bg={'white'}
      py={40}
      px={60}
      style={{
        borderRadius: vars.radius.md,
        boxShadow: '0 0 8px rgba(0, 0, 0, 0.10)',
      }}
    >
      <Stack>
        <ActionIcon
          variant='transparent'
          color='gray.9'
        >
          <IconDots />
        </ActionIcon>

        <FormUploadProvider form={form}>
          <form onSubmit={submit}>
            <Grid gutter={'xl'}>
              <Grid.Col span={4.5}>
                <FormFile
                  file={file}
                  setFile={setFile}
                />
              </Grid.Col>

              <Grid.Col span={7.5}>
                <FormDesc />
              </Grid.Col>
            </Grid>

            {file && (
              <Button
                fullWidth
                radius={'xl'}
                mt={'md'}
                color='red'
                type='submit'
              >
                Public
              </Button>
            )}
          </form>
        </FormUploadProvider>
      </Stack>
    </Box>
  )
}
