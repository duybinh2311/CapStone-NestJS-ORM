import { BadRequestException, Injectable } from '@nestjs/common'
import { FileUploadResDto } from './dto/file-upload.dto'
import { FileMessage } from './types/file.messages'
import { IRes } from 'src/common/types/app.types'

@Injectable()
export class FileService {
  async upload(file: Express.Multer.File): IRes<FileUploadResDto> {
    if (!file) throw new BadRequestException(FileMessage.REQUIRED)

    return {
      data: {
        path: `/${file.filename}`,
        url: `${process.env.SERVER_URL}/${file.filename}`,
        type: file.mimetype,
        size: file.size,
      },
      message: FileMessage.UPLOAD_SUCCESSFULLY,
    }
  }
}
