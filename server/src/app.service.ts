import { Injectable } from '@nestjs/common'

@Injectable()
export class AppService {
  ping(): { success: boolean; message: string } {
    return { success: true, message: 'Server is running' }
  }
}

const a = '10'