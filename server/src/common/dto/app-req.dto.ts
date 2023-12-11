import { ApiProperty } from '@nestjs/swagger'

export class AuthorDto {
  @ApiProperty()
  fullName: string

  @ApiProperty()
  avatar: string

  @ApiProperty()
  userName: string
}
