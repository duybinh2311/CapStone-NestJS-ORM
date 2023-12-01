import { FC, useState } from 'react'

import { ActionIcon, Box, Button, Grid, LoadingOverlay, Stack } from '@mantine/core'
import { createFormContext } from '@mantine/form'

import { IconDots } from '@tabler/icons-react'

import { AppModule } from '@/modules/app/app.module'
import { FileModule } from '@/modules/file/file.module'
import { PinModule } from '@/modules/pin/pin.module'
import { CreatePinDto } from '@/modules/pin/pin.types'
import { vars } from '@/theme'

import { FormDesc } from './form-desc'
import { FormFile } from './form-file'

export const [FormUploadProvider, useFormUploadContext, useFormUpload] = createFormContext<CreatePinDto>()

interface FormUploadProps {}

export const FormUpload: FC<FormUploadProps> = (props) => {
  /* Local State */
  const [file, setFile] = useState<File | null>(null)
  const [loading, setLoading] = useState<boolean>(false)

  /* Hook Init */
  const form = useFormUpload({
    initialValues: {
      title: '',
      description: '',
      path: '',
    },
  })

  /* Logic */
  const submit = form.onSubmit(async (values) => {
    if (file) {
      setLoading(true)
      const { path } = (await FileModule.upLoad({ file })).data

      AppModule.onPromise({
        promise: PinModule.create({ ...values, path }),
        action: {
          success: () => {
            form.reset()
            setFile(null)
          },
          finally: () => {
            setLoading(false)
          },
        },
      })
    }
  })

  return (
    <Box
      pos={'relative'}
      bg={'white'}
      py={40}
      px={60}
      style={{
        borderRadius: vars.radius.md,
        boxShadow: '0 0 8px rgba(0, 0, 0, 0.10)',
      }}
    >
      <LoadingOverlay
        visible={loading}
        zIndex={1000}
        overlayProps={{ blur: 1 }}
        loaderProps={{ color: 'red' }}
      />

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
