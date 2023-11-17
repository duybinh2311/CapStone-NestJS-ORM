import { ApiProperty } from '@nestjs/swagger'

import { AuthorDto } from 'src/common/dto/app-req.dto'

import { PinEntity } from '../entities/pin.entity'
import { SavedPinEntity } from '../entities/saved-pin.entity'

export class PinResDto extends PinEntity {
  @ApiProperty()
  author: AuthorDto
}

export class SavePinResDto extends SavedPinEntity {}
