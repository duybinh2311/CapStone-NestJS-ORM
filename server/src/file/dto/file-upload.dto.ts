import { ApiProperty } from '@nestjs/swagger'

export class FileUploadDto {
  @ApiProperty({ type: 'string', format: 'binary' })
  file: Express.Multer.File
}

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
