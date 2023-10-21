import { AppLogo } from '@/components/app-logo'
import { FormLogin } from '@/components/form-login'
import { Title } from '@mantine/core'
import { modals } from '@mantine/modals'
import { modalStyle } from './modal.css'

export const onModalLogin = () => {
  return modals.open({
    title: <AppLogo />,
    children: (
      <>
        <Title
          order={2}
          ta={'center'}
          c={'gray'}
        >
          Welcome to Pinterest
        </Title>
        <FormLogin />
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
