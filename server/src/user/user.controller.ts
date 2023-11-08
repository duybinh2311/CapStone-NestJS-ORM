import { Controller, Get } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'
import { UserService } from './user.service'
import { AuthUser } from 'src/auth/decorators/auth-user.decorator'
import { AuthUserDto } from 'src/auth/dto/auth-user.dto'

@ApiTags('User')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('get-created-pins')
  getCreatedPins(@AuthUser() authUser: AuthUserDto) {
    return this.userService.getCreatedPins(authUser)
  }
}
