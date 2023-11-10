interface IResponseData<T> {
  data: T
  message: string
}

interface IResponseListData<T> {
  count: number
  data: T[]
  message: string
}

export type IRes<T> = Promise<IResponseData<T>>
export type IResList<T> = Promise<IResponseListData<T>>
