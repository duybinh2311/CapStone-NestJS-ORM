import { FC } from 'react'
import { useNavigate } from 'react-router-dom'

import { ActionIcon, Box, Button, Group, Image, Stack, Text, rgba } from '@mantine/core'

import { IconExternalLink } from '@tabler/icons-react'

import { useAccount } from '@/hooks/account-hooks'
import { useCss } from '@/hooks/css-hooks'
import { AppModule } from '@/modules/app/app.module'
import { PinModule } from '@/modules/pin/pin.module'
import { PinResDto } from '@/modules/pin/pin.types'
import AppRoutes from '@/routes/routes'
import { vars } from '@/theme'
import { IResError } from '@/types'
import { ColorUtils } from '@/utils/color.utils'
import { DateUtils } from '@/utils/date.utils'

export enum PinSizeEnum {
  small = 'small',
  medium = 'medium',
  large = 'large',
}

const sizes = {
  [PinSizeEnum.small]: 26,
  [PinSizeEnum.medium]: 36,
  [PinSizeEnum.large]: 46,
}

interface PinProps {
  size: PinSizeEnum
  pin: PinResDto
}

export const Pin: FC<PinProps> = (props) => {
  /* App State */
  const { savedPins, getSavedPins } = useAccount()

  /* Hook Init */
  const navigate = useNavigate()

  /* Logic */
  const isSaved = savedPins.some((pin) => pin.id === props.pin.id)

  const savePin = () => {
    PinModule.save(props.pin.id)
      .then((res) => {
        getSavedPins()
        AppModule.onSuccess(res.message)
      })
      .catch((err: IResError) => {
        AppModule.onError(err.message || err.error)
      })
  }

  return (
    <Box
      pos={'relative'}
      m={8}
      style={{
        cursor: 'pointer',
        gridRowEnd: `span ${sizes[props.size]}`,
      }}
      onClick={() => navigate(AppRoutes.detail.replace(':id', `${props.pin.id}`))}
    >
      <Box
        pos={'absolute'}
        w={'100%'}
        h={'100%'}
        style={useCss({
          borderRadius: vars.radius.md,
          background: ColorUtils.linearGradient(180, [
            `${rgba(vars.colors.dark[9], 0.6)} 0%`,
            `${rgba(vars.colors.dark[9], 0.6)} 70%`,
            `${rgba(vars.colors.dark[9], 1)} 100%`,
          ]),
          transition: 'opacity 0.1s ease-in-out',
          opacity: 0,
          hover: {
            opacity: 1,
          },
        })}
      >
        <Button
          color={isSaved ? 'dark' : 'red'}
          radius={'xl'}
          pos={'absolute'}
          top={10}
          right={10}
          onClick={(e) => {
            e.stopPropagation()
            savePin()
          }}
        >
          {isSaved ? 'Saved' : 'Save'}
        </Button>

        <Group
          pos={'absolute'}
          bottom={10}
          px={10}
          justify='space-between'
          w={'100%'}
        >
          <Stack
            gap={0}
            w={0}
            style={{
              flex: 1,
            }}
          >
            <Text
              c='white'
              size='xs'
              fw={500}
              truncate
            >
              {props.pin.author.userName || props.pin.author.fullName}
            </Text>

            <Text
              c={'dimmed'}
              size='xs'
            >
              {DateUtils.format(props.pin.updatedAt, 'HH:mm - DD/MM/YYYY')}
            </Text>
          </Stack>

          <ActionIcon
            color='gray.6'
            radius={'xl'}
            size={'lg'}
            component={'a'}
            href={AppModule.config.APP_API_URL + props.pin.path}
            target='_blank'
            onClick={(e) => {
              e.stopPropagation()
            }}
          >
            <IconExternalLink size={18} />
          </ActionIcon>
        </Group>
      </Box>

      <Image
        src={AppModule.config.APP_API_URL + props.pin.path}
        alt=''
        h={'100%'}
        w={'100%'}
        style={{
          borderRadius: vars.radius.md,
        }}
      />
    </Box>
  )
}
