import { ApiProperty } from '@nestjs/swagger'
import { Type } from 'class-transformer'
import { IsEnum, IsNumber, IsOptional, IsString } from 'class-validator'

enum SortOrder {
  ASC = 'asc',
  DESC = 'desc',
}

export class QueryDto {
  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  // @Type(() => Number)
  page?: number = 1

  @ApiProperty({ required: false })
  @IsNumber()
  @IsOptional()
  @Type(() => Number)
  pageSize?: number = 2

  @ApiProperty({ required: false, description: 'asc | desc' })
  @IsOptional()
  @IsEnum(SortOrder)
  sortOrder?: SortOrder
}
