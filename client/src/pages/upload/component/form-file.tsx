import { FC, useEffect, useState } from 'react'

import { Box, Button, Stack, Text, ThemeIcon, Image } from '@mantine/core'
import { Dropzone, IMAGE_MIME_TYPE } from '@mantine/dropzone'

import { IconArrowUp } from '@tabler/icons-react'

import { AppModule } from '@/modules/app/app.module'
import { vars } from '@/theme'

interface FormFileProps {
  file?: File | null
  setFile: (file: File) => void
}

export const FormFile: FC<FormFileProps> = (props) => {
  /* Local State */
  const [createdURL, setCreatedURL] = useState<string | null>(null)

  /* Logic */
  useEffect(() => {
    if (props.file) {
      setCreatedURL(URL.createObjectURL(props.file))
    } else {
      setCreatedURL(null)
    }
  }, [props.file])

  useEffect(() => {
    return () => {
      if (createdURL) {
        URL.revokeObjectURL(createdURL)
      }
    }
  }, [createdURL])

  return (
    <>
      {createdURL ? (
        <Image
          src={createdURL}
          radius={'lg'}
        />
      ) : (
        <Stack>
          <Dropzone
            style={{
              cursor: 'pointer',
            }}
            accept={IMAGE_MIME_TYPE}
            onDrop={(files) => props.setFile(files[0])}
            onReject={(files) => {
              if (files.length > 1) {
                return AppModule.onError('You can only upload one file at a time')
              }

              AppModule.onError('File type not supported')
            }}
            maxFiles={1}
          >
            <Box
              p={'md'}
              bg={vars.colors.dark.light}
              style={{
                borderRadius: vars.radius.md,
              }}
            >
              <Stack
                style={{
                  border: `2px dashed ${vars.colors.dark.light}`,
                  borderRadius: vars.radius.sm,
                  cursor: 'pointer',
                }}
              >
                <Stack
                  align='center'
                  justify='center'
                  h={400}
                >
                  <ThemeIcon
                    radius={'xl'}
                    color='gray.7'
                  >
                    <IconArrowUp
                      size={16}
                      stroke={3}
                    />
                  </ThemeIcon>

                  <Text
                    ta={'center'}
                    fz={'sm'}
                    px={'xl'}
                    inline
                    fw={500}
                  >
                    Drag and drop or click to upload
                  </Text>
                </Stack>

                <Text
                  fz={'xs'}
                  ta={'center'}
                  px={'xs'}
                  pb={'xs'}
                >
                  We recommend using hight quality .jpg files less than 20MB
                </Text>
              </Stack>
            </Box>
          </Dropzone>

          <Button
            variant='light'
            radius={'xl'}
            size='md'
          >
            Save from site
          </Button>
        </Stack>
      )}
    </>
  )
}
