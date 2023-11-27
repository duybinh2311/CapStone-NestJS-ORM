import { FC } from 'react'

import { ActionIcon, Box, Button, Group, Image, Stack, Text, rgba, useMantineTheme } from '@mantine/core'

import { IconClipboardCopy, IconCopy } from '@tabler/icons-react'

import { AppModule } from '@/modules/app/app.module'
import { PinResDto } from '@/modules/pin/pin.types'
import { vars } from '@/theme'
import { ColorUtils } from '@/utils/color.utils'

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

  console.log(
    `linear-gradient(180deg, ${rgba(theme.colors.dark[9], 0.5)} 0%, ${rgba(theme.colors.dark[9], 0.5)} 70%, ${rgba(
      theme.colors.dark[9],
      1
    )} 100%)`
  )

  return (
    <Box
      className={classes[props.size]}
      pos={'relative'}
      m={8}
      style={{
        cursor: 'pointer',
      }}
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
          <Stack gap={0}>
            <Text
              c='white'
              size='sm'
              fw={500}
            >
              SimpleB96
            </Text>
            <Text
              c={'dimmed'}
              size='xs'
            >
              1.2k views
            </Text>
          </Stack>

          <ActionIcon
            color='gray.6'
            radius={'xl'}
            size={'lg'}
          >
            <IconCopy size={18} />
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
