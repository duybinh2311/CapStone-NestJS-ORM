import { notifications } from '@mantine/notifications'

import { ParamsOnPromise } from './app.types'

export class AppModule {
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
          title: 'Success',
          message: params.messages?.success || res?.message || 'Success',
        })
      })
      .catch((err) => {
        params.action?.error?.()
        notifications.update({
          id: loadingNoti,
          loading: false,
          color: 'red',
          title: 'Error',
          message: params.messages?.error || err?.message || 'Error',
        })
      })
  }
}
