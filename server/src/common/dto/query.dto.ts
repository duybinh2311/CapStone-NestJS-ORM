import { ApiProperty } from '@nestjs/swagger'
import { IsOptional, IsEnum } from 'class-validator'
import { SortOrder } from '../types/app.types'

export class QueryDto {
  @ApiProperty({ required: false, enum: SortOrder })
  @IsOptional()
  @IsEnum(SortOrder)
  sortOrder?: SortOrder
}
