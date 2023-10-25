import { ApiProperty } from '@nestjs/swagger'

export class FileUploadDto {
  @ApiProperty({ type: 'string', format: 'binary' })
  file: Express.Multer.File
}

export class FileUploadResDto {
  url: string
  fileName: string
  type: string
  size: number
}
