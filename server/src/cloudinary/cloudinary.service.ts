import { Injectable } from '@nestjs/common'
import { v2 } from 'cloudinary'
import * as streamifier from 'streamifier'
import { CloudinaryResponse } from './types/cloudinary.types'

@Injectable()
export class CloudinaryService {
  uploadFile(file: Express.Multer.File): Promise<CloudinaryResponse> {
    return new Promise((resolve, reject) => {
      const upload = v2.uploader.upload_stream((error, result) => {
        if (error) reject(error)

        resolve(result)
      })

      streamifier.createReadStream(file.buffer).pipe(upload)
    })
  }
}
