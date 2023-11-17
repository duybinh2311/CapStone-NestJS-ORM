import { ApiProperty } from '@nestjs/swagger'

import { Saved } from '@prisma/client'

export class SavedPinEntity implements Saved {
  @ApiProperty()
  userId: number

  @ApiProperty()
  pinId: number

  @ApiProperty()
  createdAt: Date

  @ApiProperty()
  updatedAt: Date
}
