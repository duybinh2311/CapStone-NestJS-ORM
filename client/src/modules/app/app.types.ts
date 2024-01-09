import { IResError } from '@/types'

export interface ParamsOnPromise<T> {
  promise: Promise<any>
  messages?: {
    success?: string
    error?: string
  }
  action?: {
    success?: (res: T) => void
    error?: (err: IResError) => void
    finally?: () => void
  }
}
