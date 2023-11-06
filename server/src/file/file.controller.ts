import { Controller, Post, UploadedFile, UseInterceptors } from '@nestjs/common'
import { FileInterceptor } from '@nestjs/platform-express'
import { ApiBody, ApiConsumes, ApiResponse, ApiTags } from '@nestjs/swagger'
import { FileUploadDto } from './dto/file-upload.dto'
import { FileService } from './file.service'
import { FileMessage } from './types/file.messages'

@ApiTags('File')
@Controller('file')
export class FileController {
  constructor(private readonly fileService: FileService) {}

  @UseInterceptors(FileInterceptor('file'))
  @ApiConsumes('multipart/form-data')
  @ApiBody({ type: FileUploadDto, description: FileMessage.DESC_BODY })
  @ApiResponse({ status: 201, description: FileMessage.UPLOAD_SUCCESSFULLY })
  @ApiResponse({ status: 415, description: FileMessage.UNSUPPORTED })
  @ApiResponse({ status: 400, description: FileMessage.REQUIRED })
  @ApiResponse({ status: 413, description: FileMessage.LIMIT })
  @Post('upload')
  upload(@UploadedFile() file: Express.Multer.File) {
    return this.fileService.upload(file)
  }
}
