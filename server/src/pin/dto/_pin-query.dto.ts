import { ApiProperty } from '@nestjs/swagger'
import { IsOptional, IsEnum } from 'class-validator'
import { QueryDto, PaginationQueryDto } from 'src/common/dto'

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
