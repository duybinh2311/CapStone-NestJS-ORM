import { ApiProperty } from '@nestjs/swagger'

import { ProfileUserDto } from './user-req.dto'

export class ProfileUserResDto extends ProfileUserDto {
  @ApiProperty()
  id: number
}
