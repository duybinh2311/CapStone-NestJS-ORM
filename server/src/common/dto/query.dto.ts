import { ApiProperty } from '@nestjs/swagger'
import { Type } from 'class-transformer'
import { IsEnum, IsNumber, IsOptional } from 'class-validator'

export enum SortOrderEnum {
  ASC = 'asc',
  DESC = 'desc',
}
export class QueryDto {
  @ApiProperty({ required: false, enum: SortOrderEnum })
  @IsOptional()
  @IsEnum(SortOrderEnum)
  sortOrder?: SortOrderEnum = SortOrderEnum.ASC
}

export class PaginationQueryDto {
  @ApiProperty({ required: false })
  @IsNumber()
  @IsOptional()
  @Type(() => Number)
  page?: number = 1

  @ApiProperty({ required: false })
  @IsNumber()
  @IsOptional()
  @Type(() => Number)
  pageSize?: number = 20

  @ApiProperty({ required: false, enum: SortOrderEnum })
  @IsOptional()
  @IsEnum(SortOrderEnum)
  sortOrder?: SortOrderEnum = SortOrderEnum.ASC
}
