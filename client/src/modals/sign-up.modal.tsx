import { Title } from '@mantine/core'
import { modals } from '@mantine/modals'

import { AppLogo } from '@/components/app-logo'
import { FormSignUp } from '@/components/form-sign-up'

import { styles } from './modal.styles'

export const onModalSignUp = () => {
  return modals.open({
    title: <AppLogo w={35} />,
    children: (
      <>
        <Title
          order={2}
          ta={'center'}
          c={'gray'}
        >
          Welcome to Pinterest
        </Title>
        <FormSignUp />
      </>
    ),
    centered: true,
    closeButtonProps: {
      size: 'lg',
      radius: 'xl',
      style: styles.closeButton,
    },
    styles: {
      title: styles.title,
    },
  })
}
