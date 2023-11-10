import { Module } from '@nestjs/common'

import { PinModule } from 'src/pin/pin.module'

import { UserController } from './user.controller'
import { UserService } from './user.service'

@Module({
  imports: [PinModule],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}
