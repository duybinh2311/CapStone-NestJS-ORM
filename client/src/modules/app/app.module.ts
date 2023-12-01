import { notifications } from '@mantine/notifications'

import copy from 'copy-to-clipboard'

import { ParamsOnPromise } from './app.types'

export class AppModule {
  static config = {
    APP_API_URL: import.meta.env.VITE_APP_API_URL,
    APP_API_TIMEOUT: import.meta.env.VITE_APP_API_TIMEOUT,
    APP_URL: import.meta.env.VITE_APP_URL,
  }

  static onSuccess(message: string) {
    notifications.show({
      title: 'Success',
      message,
    })
  }

  static onError(message: string) {
    notifications.show({
      color: 'red',
      title: 'Error',
      message,
    })
  }

  static onPromise<T>(params: ParamsOnPromise<T>) {
    const loadingNoti = notifications.show({
      loading: true,
      title: 'Loading',
      message: 'Please wait...',
    })

    params.promise
      .then((res) => {
        params.action?.success?.(res)
        notifications.update({
          id: loadingNoti,
          loading: false,
          color: 'green',
          title: 'Success',
          message: params.messages?.success || res?.message || 'Success',
        })
      })
      .catch((err) => {
        params.action?.error?.(err)
        notifications.update({
          id: loadingNoti,
          loading: false,
          color: 'red',
          title: 'Error',
          message: params.messages?.error || err?.message || 'Error',
        })
      })
      .finally(() => {
        params.action?.finally?.()
      })
  }

  static onCopy(text: string) {
    copy(text)
    this.onSuccess('Copied to clipboard')
  }
}
