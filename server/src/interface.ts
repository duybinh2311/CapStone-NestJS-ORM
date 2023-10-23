interface IResponseData<T> {
  data: T
  message: string
  statusCode: number
}

interface IResponseListData<T> {
  data: T[]
  message: string
  statusCode: number
  total: number
}

export type IResponse<T> = Promise<IResponseData<T>>
export type IResponseList<T> = Promise<IResponseListData<T>>

