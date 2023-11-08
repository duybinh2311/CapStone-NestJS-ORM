import { Controller, Post, UploadedFile, UseInterceptors } from '@nestjs/common'
import { FileInterceptor } from '@nestjs/platform-express'
import { ApiBody, ApiConsumes, ApiResponse, ApiTags } from '@nestjs/swagger'
import { FileUploadDto, FileUploadResDto } from './dto/file-upload.dto'
import { FileService } from './file.service'
import { FileMessage } from './types/file.messages'

@ApiTags('File')
@Controller('file')
export class FileController {
  constructor(private readonly fileService: FileService) {}

  @UseInterceptors(FileInterceptor('file'))
  @ApiConsumes('multipart/form-data')
  @ApiBody({ description: FileMessage.DESC_BODY, type: FileUploadDto })
  @ApiResponse({ status: 201, description: FileMessage.UPLOAD_SUCCESSFULLY, type: FileUploadResDto })
  @ApiResponse({ status: 400, description: FileMessage.REQUIRED })
  @ApiResponse({ status: 413, description: FileMessage.LIMIT })
  @ApiResponse({ status: 415, description: FileMessage.UNSUPPORTED })
  @Post('upload')
  upload(@UploadedFile() file: Express.Multer.File) {
    return this.fileService.upload(file)
  }
}
