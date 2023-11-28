import { FC } from 'react'
import { Link } from 'react-router-dom'

import { ActionIcon, Box, Button, Group, Image, Stack, Text, rgba, useMantineTheme } from '@mantine/core'

import { IconLink } from '@tabler/icons-react'

import { AppModule } from '@/modules/app/app.module'
import { PinResDto } from '@/modules/pin/pin.types'
import AppRoutes from '@/routes/routes'
import { vars } from '@/theme'
import { ColorUtils } from '@/utils/color.utils'
import { DateUtils } from '@/utils/date.utils'

import { classes } from './pin.css'

export enum PinSizeEnum {
  small = 'small',
  medium = 'medium',
  large = 'large',
}

interface PinProps {
  size: PinSizeEnum
  pin: PinResDto
}

export const Pin: FC<PinProps> = (props) => {
  /* Hook Init */
  const theme = useMantineTheme()

  return (
    <Box
      className={classes[props.size]}
      pos={'relative'}
      m={8}
      style={{
        cursor: 'pointer',
      }}
      component={Link}
      to={AppRoutes.detail.replace(':id', `${props.pin.id}`)}
    >
      <Box
        className={classes.overlayPin}
        pos={'absolute'}
        w={'100%'}
        h={'100%'}
        style={{
          borderRadius: vars.radius.md,
          background: ColorUtils.linearGradient(180, [
            `${rgba(theme.colors.dark[9], 0.6)} 0%`,
            `${rgba(theme.colors.dark[9], 0.6)} 70%`,
            `${rgba(theme.colors.dark[9], 1)} 100%`,
          ]),
        }}
      >
        <Button
          color='red'
          radius={'xl'}
          pos={'absolute'}
          top={10}
          right={10}
          onClick={(e) => {
            e.preventDefault()
          }}
        >
          Save
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
              {props.pin.author.fullName}
            </Text>

            <Text
              c={'dimmed'}
              size='xs'
            >
              {DateUtils.formatDate(props.pin.createdAt, 'DD/MM/YYYY hh:mm:ss')}
            </Text>
          </Stack>

          <ActionIcon
            color='gray.6'
            radius={'xl'}
            size={'lg'}
            onClick={(e) => {
              e.preventDefault()
            }}
          >
            <IconLink size={18} />
          </ActionIcon>
        </Group>
      </Box>

      <Image
        src={`${AppModule.config.APP_API_URL}/${props.pin.path}`}
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
