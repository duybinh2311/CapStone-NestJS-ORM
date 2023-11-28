import { ApiProperty } from '@nestjs/swagger'

import { IsEnum, IsOptional } from 'class-validator'
import { PaginationQueryDto, QueryDto } from 'src/common/dto/app-query.dto'

enum PinSortByEnum {
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
  title = 'title',
}

export class PinQueryDto extends QueryDto {
  @ApiProperty({ required: false, enum: PinSortByEnum })
  @IsOptional()
  @IsEnum(PinSortByEnum)
  sortBy?: PinSortByEnum = PinSortByEnum.createdAt
}

export class PinPaginationQueryDto extends PaginationQueryDto {
  @ApiProperty({ required: false, enum: PinSortByEnum })
  @IsOptional()
  @IsEnum(PinSortByEnum)
  sortBy?: PinSortByEnum = PinSortByEnum.createdAt
}
