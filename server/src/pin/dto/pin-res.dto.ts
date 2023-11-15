import { ApiProperty } from '@nestjs/swagger'

import { AuthorDto } from 'src/common/dto/app-req.dto'

import { PinEntity } from '../entities/pin.entity'

export class PinResDto extends PinEntity {
  @ApiProperty()
  author: AuthorDto
}
