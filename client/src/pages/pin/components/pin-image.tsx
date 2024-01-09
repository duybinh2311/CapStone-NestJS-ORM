import { FC } from 'react'

import { Box, Button, Image, rgba } from '@mantine/core'

import { IconExternalLink } from '@tabler/icons-react'

import { useCss } from '@/hooks/css.hook'
import { AppModule } from '@/modules/app/app.module'
import { vars } from '@/theme'

interface PinImageProps {
  path: string
}

export const PinImage: FC<PinImageProps> = (props) => {
  return (
    <Box pos={'relative'}>
      <Box
        pos={'absolute'}
        w={'100%'}
        h={'100%'}
        style={useCss({
          background: rgba(vars.colors.dark[9], 0.5),
          opacity: 0,
          transition: 'opacity 0.2s ease',
          cursor: 'pointer',
          hover: {
            opacity: 1,
          },
        })}
      >
        <Button
          component='a'
          href={AppModule.config.APP_API_URL + props.path}
          target='_blank'
          color='red'
          pos={'absolute'}
          bottom={20}
          right={20}
          leftSection={<IconExternalLink size={18} />}
        >
          View Image
        </Button>
      </Box>

      <Image
        w={'100%'}
        h={'100%'}
        style={{
          overflow: 'auto',
        }}
        src={AppModule.config.APP_API_URL + props.path}
      />
    </Box>
  )
}
