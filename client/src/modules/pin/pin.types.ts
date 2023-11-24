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

enum SortByEnum {
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
  title = 'title',
}

export interface PinQueryDto extends QueryDto {
  sortBy?: SortByEnum
}

export interface PinPaginationQueryDto extends PaginationQueryDto {
  sortBy?: SortByEnum
}

export interface CreatePinDto {
  title?: string
  description?: string
  path: string
}

export interface SavePinDto {
  pinId: number
}

export class UpdatePinDto {
  title?: string
  description?: string
}

export interface PinResDto extends PinEntity {
  author: AuthorDto
}

export interface SavePinResDto extends SavedPinEntity {}
