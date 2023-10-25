import { Controller, Post, UploadedFile, UseInterceptors, Body } from '@nestjs/common'
import { FileInterceptor } from '@nestjs/platform-express'
import {
  ApiBadRequestResponse,
  ApiBody,
  ApiConsumes,
  ApiCreatedResponse,
  ApiResponse,
  ApiTags,
  ApiUnsupportedMediaTypeResponse,
} from '@nestjs/swagger'
import { FileUploadDto } from './dto/file-upload.dto'
import { FileService } from './file.service'
import { FileMessage } from './file.types'

@ApiTags('File')
@Controller('file')
export class FileController {
  constructor(private readonly fileService: FileService) {}

  @UseInterceptors(FileInterceptor('file'))
  @ApiConsumes('multipart/form-data')
  @ApiBody({ type: FileUploadDto, description: FileMessage.UPLOAD_DESC_BODY })
  @ApiResponse({ status: 201, description: FileMessage.UPLOAD_SUCCESSFULLY })
  @ApiResponse({ status: 415, description: FileMessage.UNSUPPORTED })
  @ApiResponse({ status: 400, description: FileMessage.REQUIRED })
  @Post('upload')
  upload(@UploadedFile() file: Express.Multer.File) {
    return this.fileService.upload(file)
  }
}
