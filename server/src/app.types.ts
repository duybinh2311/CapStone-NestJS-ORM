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

export type IRes<T> = Promise<IResponseData<T>>
export type IResList<T> = Promise<IResponseListData<T>>
