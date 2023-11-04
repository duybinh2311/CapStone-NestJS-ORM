import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common'
import { PinService } from './pin.service'
import { PinController } from './pin.controller'
import { CheckPinAuthor } from './middleware/pin.middleware'
import { UserModule } from 'src/user/user.module'

@Module({
  controllers: [PinController],
  providers: [PinService],
})
export class PinModule {}
