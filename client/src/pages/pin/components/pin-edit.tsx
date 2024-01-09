import { FC } from 'react'

import { Button, Drawer, Stack, Text, TextInput, Textarea } from '@mantine/core'
import { useForm } from '@mantine/form'

import { AppModule } from '@/modules/app/app.module'
import { PinModule } from '@/modules/pin/pin.module'
import { PinResDto, UpdatePinDto } from '@/modules/pin/pin.types'

interface PinEditProps {
  opened: boolean
  close: () => void
  title: string
  description: string
  pinId: number
  setPin: (pin: PinResDto) => void
}

export const PinEdit: FC<PinEditProps> = (props) => {
  /* Hook Init */
  const form = useForm<UpdatePinDto>({
    initialValues: {
      title: props.title,
      description: props.description,
    },
  })

  const submit = form.onSubmit((values) => {
    PinModule.update(props.pinId, values).then((res) => {
      props.setPin(res.data)
      AppModule.onSuccess(res.message)

      props.close()
    })
  })

  return (
    <Drawer
      opened={props.opened}
      onClose={props.close}
      position='right'
      title={
        <Text
          fw={'bold'}
          size='lg'
        >
          Edit Pin
        </Text>
      }
      styles={{
        header: {
          position: 'absolute',
          width: '100%',
        },
        body: {
          paddingTop: 60,
          height: '100%',
        },
      }}
    >
      <form
        onSubmit={submit}
        style={{
          height: '100%',
        }}
      >
        <Stack
          justify='space-between'
          h={'100%'}
        >
          <Stack>
            <TextInput
              data-autofocus
              label='Title'
              {...form.getInputProps('title')}
            />

            <Textarea
              label='Description'
              rows={4}
              {...form.getInputProps('description')}
            />
          </Stack>

          <Button
            color='red'
            type='submit'
          >
            Confirm
          </Button>
        </Stack>
      </form>
    </Drawer>
  )
}
