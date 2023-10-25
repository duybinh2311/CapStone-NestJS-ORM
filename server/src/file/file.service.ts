import { BadRequestException, Injectable } from '@nestjs/common'
import { FileMessage } from './file.types'

@Injectable()
export class FileService {
  upload(file: Express.Multer.File) {
    if (!file) throw new BadRequestException(FileMessage.REQUIRED)

    return file
  }
}
