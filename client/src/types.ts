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

export enum SortOrderEnum {
  ASC = 'asc',
  DESC = 'desc',
}
export interface QueryDto {
  sortOrder?: SortOrderEnum
}

export interface PaginationQueryDto {
  page?: number
  pageSize?: number
  sortOrder?: SortOrderEnum
}

export interface AuthorDto {
  fullName: string
  avatar: string
  userName: string
}
