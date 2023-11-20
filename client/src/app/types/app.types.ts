export interface IResponseData<T> {
  data: T
  message: string
}

export interface IResponseListData<T> {
  count: number
  data: T[]
  message: string
}

export type IRes<T> = Promise<IResponseData<T>>
export type IResList<T> = Promise<IResponseListData<T>>
export type IResError = {
  error: string
  message?: string
  statusCode: number
}
