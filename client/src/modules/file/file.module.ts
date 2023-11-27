import imageCompression from 'browser-image-compression'

import { IRes } from '@/types'

import http from '../axios/axios.config'
import { FileUploadDto, FileUploadResDto } from './file.types'

export class FileModule {
  static url = {
    root: '/file',
  }

  static async upLoad(payload: FileUploadDto): IRes<FileUploadResDto> {
    if (payload.file.size > 1024 * 1024 * 2) {
      const compressedFile = await imageCompression(payload.file, {
        maxSizeMB: 2,
      })

      payload.file = new File([compressedFile], compressedFile.name, { type: compressedFile.type })
    }

    return http.postForm(this.url.root, payload)
  }
}
