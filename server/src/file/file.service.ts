import { BadRequestException, Injectable } from '@nestjs/common'
import { FileUploadResDto } from './dto/file-upload.dto'
import { FileMessage } from './types/file.messages'

@Injectable()
export class FileService {
  async upload(file: Express.Multer.File): Promise<FileUploadResDto> {
    if (!file) throw new BadRequestException(FileMessage.REQUIRED)

    return {
      path: `/${file.filename}`,
      url: `${process.env.SERVER_URL}/${file.filename}`,
      type: file.mimetype,
      size: file.size,
    }
  }
}
