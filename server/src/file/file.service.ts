import { BadRequestException, HttpStatus, Injectable } from '@nestjs/common'
import { FileMessage } from './file.types'
import { IRes } from 'src/app.types'
import { FileUploadResDto } from './dto/file-upload.dto'

@Injectable()
export class FileService {
  async upload(file: Express.Multer.File): Promise<FileUploadResDto> {
    if (!file) throw new BadRequestException(FileMessage.REQUIRED)

    return {
      fileName: file.filename,
      url: `${process.env.SERVER_URL}/${file.filename}`,
      type: file.mimetype,
    }
  }
}
