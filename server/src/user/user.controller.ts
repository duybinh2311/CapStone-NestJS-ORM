import { Controller, Get } from '@nestjs/common'
import { ApiResponse, ApiTags } from '@nestjs/swagger'
import { UserService } from './user.service'
import { AuthUser } from 'src/auth/decorators/auth-user.decorator'
import { AuthUserDto } from 'src/auth/dto/auth-user.dto'
import { PinService } from 'src/pin/pin.service'
import { PinMessages } from 'src/pin/types/pin.messages'
import { PinEntity } from 'src/pin/entities/pin.entity'

@ApiTags('User')
@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly pinService: PinService,
  ) {}

  @ApiResponse({ status: 200, description: PinMessages.GET_SUCCESSFULLY, type: [PinEntity] })
  @Get('get-created-pins')
  getCreatedPins(@AuthUser() authUser: AuthUserDto) {
    return this.pinService.getByAuthor(authUser)
  }
}
