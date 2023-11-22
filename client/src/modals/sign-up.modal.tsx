import { Title } from '@mantine/core'
import { modals } from '@mantine/modals'

import { AppLogo } from '@/components/app-logo'
import { FormSignUp } from '@/components/form-sign-up'

import { modalStyle } from './modal.css'

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
      className: modalStyle.closeButton,
    },
    classNames: {
      title: modalStyle.title,
    },
  })
}
