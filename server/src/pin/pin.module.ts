import { Module } from '@nestjs/common'

import { CommentModule } from 'src/comment/comment.module'

import { PinController } from './pin.controller'
import { PinService } from './pin.service'

@Module({
  imports: [CommentModule],
  controllers: [PinController],
  providers: [PinService],
  exports: [PinService],
})
export class PinModule {}
