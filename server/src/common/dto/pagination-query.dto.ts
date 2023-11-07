import { ApiProperty } from '@nestjs/swagger'
import { Type } from 'class-transformer'
import { IsEnum, IsNumber, IsOptional } from 'class-validator'
import { SortOrder } from '../types/app.types'

export class PaginationQueryDto {
  @ApiProperty()
  @IsNumber()
  @IsOptional()
  @Type(() => Number)
  page: number = 1

  @ApiProperty()
  @IsNumber()
  @IsOptional()
  @Type(() => Number)
  pageSize: number = 2

  @ApiProperty()
  @IsOptional()
  @IsEnum(SortOrder)
  sortOrder: SortOrder = SortOrder.ASC
}
