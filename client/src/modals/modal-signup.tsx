import { AppLogo } from '@/components/app-logo'
import { FormSignup } from '@/components/form-signup'
import { Title } from '@mantine/core'
import { modals } from '@mantine/modals'
import { modalStyle } from './modal.css'

export const onModalSignup = () => {
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
        <FormSignup />
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
