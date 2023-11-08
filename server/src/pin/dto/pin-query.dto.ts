import { ApiProperty } from '@nestjs/swagger'
import { IsOptional, IsEnum } from 'class-validator'
import { PaginationQueryDto, QueryDto } from 'src/common/dto/query.dto'

enum SortByEnum {
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
  title = 'title',
}

export class PinQuery extends QueryDto {
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
