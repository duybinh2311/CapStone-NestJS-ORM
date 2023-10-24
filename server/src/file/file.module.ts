import { Module, UnsupportedMediaTypeException } from '@nestjs/common'
import { FileService } from './file.service'
import { FileController } from './file.controller'
import { MulterModule } from '@nestjs/platform-express'
import { diskStorage } from 'multer'
import * as path from 'path'

@Module({
  imports: [
    MulterModule.register({
      dest: './uploads',
      fileFilter(_, file, callback) {
        const extension = path.extname(file.originalname)
        if (extension !== '.png' && extension !== '.jpg' && extension !== '.jpeg') {
          return callback(new UnsupportedMediaTypeException('Only png, jpg, jpeg files are allowed!'), false)
        }

        callback(null, true)
      },
      limits: {
        fileSize: 1024 * 1024,
      },
      storage: diskStorage({
        filename(_, file, callback) {
          const fileExtension = file.originalname.slice(file.originalname.lastIndexOf('.') + 1)
          const fileName = `${file.originalname.slice}-${Date.now()}.${fileExtension}`

          callback(null, fileName)
        },
      }),
    }),
  ],
  controllers: [FileController],
  providers: [FileService],
})
export class FileModule {}
