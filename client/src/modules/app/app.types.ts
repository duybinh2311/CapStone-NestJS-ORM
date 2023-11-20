export interface ParamsOnPromise<T> {
  promise: Promise<any>
  messages?: {
    success?: string
    error?: string
  }
  action?: {
    success?: (res: T) => void
    error?: () => void
  }
}
