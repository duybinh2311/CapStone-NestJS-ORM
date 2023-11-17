import { Body, Controller, Get, Patch } from '@nestjs/common'
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger'

import { AuthUser } from 'src/auth/decorators/auth-user.decorator'
import { PinResDto } from 'src/pin/dto/pin-res.dto'
import { PinService } from 'src/pin/pin.service'

import { ProfileUserDto } from './dto/user-req.dto'
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
  getProfile(@AuthUser() authUser: AuthUser) {
    return this.userService.getProfile(authUser)
  }

  @ApiOperation({ summary: UserMessages.UPDATE_PROFILE_SUMMARY })
  @ApiOkResponse({ description: UserMessages.UPDATE_PROFILE_SUCCESS, type: ProfileUserDto })
  @Patch('profile')
  updateProfile(@AuthUser() authUser: AuthUser, @Body() dto: ProfileUserDto) {
    return this.userService.updateProfile(authUser, dto)
  }

  @ApiOperation({ summary: UserMessages.GET_CREATED_PINS_SUMMARY })
  @ApiOkResponse({ description: UserMessages.GET_CREATED_PINS_SUCCESS, type: [PinResDto] })
  @Get('created-pins')
  getCreatedPins(@AuthUser() authUser: AuthUser) {
    return this.pinService.getCreatedPins(authUser)
  }

  @ApiOperation({ summary: UserMessages.GET_SAVED_PINS_SUMMARY })
  @ApiOkResponse({ description: UserMessages.GET_SAVED_PINS_SUCCESS, type: [PinResDto] })
  @Get('saved-pins')
  getSavedPins(@AuthUser() authUser: AuthUser) {
    return this.pinService.getSavedPins(authUser)
  }
}
