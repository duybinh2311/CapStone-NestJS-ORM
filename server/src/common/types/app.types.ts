interface IResponseData<T> {
  data: T
  message: string
  statusCode: number
}

interface IResponseListData<T> {
  count: number
  data: T[]
  message: string
  statusCode: number
}

type IRes<T> = Promise<IResponseData<T>>
type IResList<T> = Promise<IResponseListData<T>>

enum SortOrder {
  ASC = 'asc',
  DESC = 'desc',
}

export { IRes, IResList, SortOrder }
