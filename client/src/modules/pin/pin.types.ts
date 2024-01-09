import { AuthorDto, PaginationQueryDto, QueryDto } from '@/types'

export interface PinEntity {
  id: number
  title: string
  description: string
  path: string
  authorId: number
  createdAt: Date
  updatedAt: Date
}

export interface SavedPinEntity {
  userId: number
  pinId: number
  createdAt: Date
  updatedAt: Date
}

export enum PinSortByEnum {
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
  title = 'title',
}

export interface PinQueryDto extends QueryDto {
  sortBy?: PinSortByEnum
}

export interface PinPaginationQueryDto extends PaginationQueryDto {
  sortBy?: PinSortByEnum
}

export interface CreatePinDto {
  title?: string
  description?: string
  path: string
}

export interface SavePinDto {
  pinId: number
}

export interface UpdatePinDto {
  title?: string
  description?: string
}

export interface PinResDto extends PinEntity {
  author: AuthorDto
}

export interface SavePinResDto extends SavedPinEntity {}
