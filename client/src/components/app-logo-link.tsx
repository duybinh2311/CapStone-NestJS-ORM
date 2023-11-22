import { FC } from 'react'
import { useNavigate } from 'react-router-dom'

import { Box, Group, Image, Text } from '@mantine/core'

interface AppLogoLinkProps {
  type?: 'text' | 'image'
}

export const AppLogoLink: FC<AppLogoLinkProps> = (props) => {
  const navigate = useNavigate()

  return (
    <>
      {props.type === 'text' ? (
        <Group
          gap={'xs'}
          style={{ cursor: 'pointer' }}
          onClick={() => navigate('/')}
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
          onClick={() => navigate('/')}
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
