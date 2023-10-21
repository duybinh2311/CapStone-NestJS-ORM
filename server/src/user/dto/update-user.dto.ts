import { PartialType } from '@nestjs/mapped-types'
import { CreateUserDto } from './create-user.dto'
import { ApiPropertyOptional } from '@nestjs/swagger'

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @ApiPropertyOptional()
  fullName?: string

  @ApiPropertyOptional()
  email?: string

  @ApiPropertyOptional()
  age?: number
}
