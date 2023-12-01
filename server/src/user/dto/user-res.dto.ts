import { ApiProperty } from '@nestjs/swagger'

import { UpdateUserDto } from './user-req.dto'

export class ProfileUserResDto extends UpdateUserDto {
  @ApiProperty()
  id: number
}
