import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'

@Injectable()
export class AppService {
  ping(): { success: boolean; message: string } {
    return { success: true, message: 'Server is running' }
  }
}
