import { BadRequestException, Module, UnsupportedMediaTypeException } from '@nestjs/common'
import { FileService } from './file.service'
import { FileController } from './file.controller'
import { MulterModule } from '@nestjs/platform-express'
import { diskStorage } from 'multer'
import * as path from 'path'
import { StringUtils } from 'src/utils/string.utils'

@Module({
  imports: [
    MulterModule.register({
      fileFilter(_, file, callback) {
        const extension = path.extname(file.originalname)
        const regex = new RegExp(/\.(jpeg|jpg|png|gif)$/, 'i')

        if (regex.test(extension)) {
          return callback(null, true)
        }

        return callback(new UnsupportedMediaTypeException('Only Support Media Type JPG, JPEG, PNG, GIF'), false)
      },
      limits: {
        fileSize: 5e6,
      },
      storage: diskStorage({
        destination: process.cwd() + '/public',
        filename(_, file, callback) {
          const extension = path.extname(file.originalname)
          const name = file.originalname.slice(0, file.originalname.lastIndexOf('.'))
          const fileName = `${Date.now()}-${StringUtils.toSlug(name)}${extension}`

          callback(null, fileName)
        },
      }),
    }),
  ],
  controllers: [FileController],
  providers: [FileService],
})
export class FileModule {}
