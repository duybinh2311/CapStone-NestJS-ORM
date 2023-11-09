import { Body, Controller, Get, Patch } from '@nestjs/common'
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger'
import { AuthUser } from 'src/auth/decorators/auth-user.decorator'
import { AuthUserDto } from 'src/auth/dto/auth-user.dto'
import { PinEntity } from 'src/pin/entities/pin.entity'
import { PinService } from 'src/pin/pin.service'
import { ProfileUserDto } from './dto/profile-user'
import { UserMessages } from './types/user.messages'
import { UserService } from './user.service'

@ApiTags('User')
@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly pinService: PinService,
  ) {}

  @ApiOperation({ summary: UserMessages.GET_PROFILE_SUMMARY })
  @ApiOkResponse({ description: UserMessages.GET_PROFILE_SUCCESS, type: ProfileUserDto })
  @Get('profile')
  getProfile(@AuthUser() authUser: AuthUserDto) {
    return this.userService.getProfile(authUser)
  }

  @ApiOperation({ summary: UserMessages.UPDATE_PROFILE_SUMMARY })
  @ApiOkResponse({ description: UserMessages.UPDATE_PROFILE_SUCCESS, type: ProfileUserDto })
  @Patch('profile')
  updateProfile(@AuthUser() authUser: AuthUserDto, @Body() dto: ProfileUserDto) {
    return this.userService.updateProfile(authUser, dto)
  }

  @ApiOperation({ summary: UserMessages.GET_CREATED_PINS_SUMMARY })
  @ApiOkResponse({ description: UserMessages.GET_CREATED_PINS_SUCCESS, type: [PinEntity] })
  @Get('created-pins')
  getCreatedPins(@AuthUser() authUser: AuthUserDto) {
    return this.pinService.getByAuthor(authUser)
  }
}
