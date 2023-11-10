import { ApiProperty } from '@nestjs/swagger'

import { IsEnum, IsOptional } from 'class-validator'
import { PaginationQueryDto, QueryDto } from 'src/common/dto/app-query.dto'

enum SortByEnum {
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
  title = 'title',
}

export class PinQueryDto extends QueryDto {
  @ApiProperty({ required: false, enum: SortByEnum })
  @IsOptional()
  @IsEnum(SortByEnum)
  sortBy?: SortByEnum = SortByEnum.createdAt
}

export class PinPaginationQueryDto extends PaginationQueryDto {
  @ApiProperty({ required: false, enum: SortByEnum })
  @IsOptional()
  @IsEnum(SortByEnum)
  sortBy?: SortByEnum = SortByEnum.createdAt
}
