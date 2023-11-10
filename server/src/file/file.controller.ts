import { Controller, Post, UploadedFile, UseInterceptors } from '@nestjs/common'
import { FileInterceptor } from '@nestjs/platform-express'
import { ApiBody, ApiConsumes, ApiCreatedResponse, ApiOperation, ApiTags } from '@nestjs/swagger'

import { FileUploadDto } from './dto/file-req.dto'
import { FileUploadResDto } from './dto/file-res.dto'
import { FileService } from './file.service'
import { FileMessage } from './types/file.messages'

@ApiTags('File')
@Controller('file')
export class FileController {
  constructor(private readonly fileService: FileService) {}

  @ApiOperation({ summary: FileMessage.UPLOAD_SUMMARY })
  @UseInterceptors(FileInterceptor('file'))
  @ApiConsumes('multipart/form-data')
  @ApiBody({ description: FileMessage.DESCRIPTION, type: FileUploadDto })
  @ApiCreatedResponse({ description: FileMessage.UPLOAD_SUCCESS, type: FileUploadResDto })
  @Post()
  upload(@UploadedFile() file: Express.Multer.File) {
    return this.fileService.upload(file)
  }
}
