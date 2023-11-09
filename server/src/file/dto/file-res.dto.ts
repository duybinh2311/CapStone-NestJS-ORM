import { ApiProperty } from '@nestjs/swagger'

export class FileUploadResDto {
  @ApiProperty()
  url: string

  @ApiProperty()
  path: string

  @ApiProperty()
  type: string

  @ApiProperty()
  size: number
}
