import { FC } from 'react'

import { Box, Group, Image, Text } from '@mantine/core'

import { useAppNavigate } from '@/hooks/navigate.hook'

interface AppLogoLinkProps {
  type?: 'text' | 'image'
}

export const AppLogoLink: FC<AppLogoLinkProps> = (props) => {
  /* Hook Init */
  const navigate = useAppNavigate()

  return (
    <>
      {props.type === 'text' ? (
        <Group
          gap={'xs'}
          style={{ cursor: 'pointer' }}
          onClick={navigate.home}
        >
          <Image
            src={'/images/logo.png'}
            w={35}
          />
          <Text
            fw={500}
            c={'red'}
          >
            Pinterest
          </Text>
        </Group>
      ) : (
        <Box
          w={35}
          style={{ cursor: 'pointer' }}
          onClick={navigate.home}
        >
          <Image src={'/images/logo.png'} />
        </Box>
      )}
    </>
  )
}

AppLogoLink.defaultProps = {
  type: 'image',
}
