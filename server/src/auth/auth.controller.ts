import { Body, Controller, Get, Patch, Post, UseGuards } from '@nestjs/common'
import {
  ApiConflictResponse,
  ApiCreatedResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiResponse,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger'
import { AuthService } from './auth.service'
import { AuthUser } from './decorators/auth-user.decorator'
import { SkipJwtAuth } from './decorators/skip-jwt.decorator'
import { AuthUserDto } from './dto/auth-user.dto'
import { ProfileUserDto } from './dto/profile-user'
import { SignInDto, SignInResDto } from './dto/sign-in.dto'
import { SignUpDto, SignUpResDto } from './dto/sign-up.dto'
import { LocalAuthGuard } from './guards/local.guard'
import { AuthMessages } from './types/auth.messages'

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @SkipJwtAuth()
  @UseGuards(LocalAuthGuard)
  @ApiOkResponse({ description: AuthMessages.SIGN_IN_SUCCESSFULLY, type: SignInResDto })
  @ApiUnauthorizedResponse({ description: AuthMessages.PASSWORD_INCORRECT })
  @ApiNotFoundResponse({ description: AuthMessages.EMAIL_NOT_FOUND })
  @Post('sign-in')
  signIn(@AuthUser() authUser: AuthUserDto, @Body() _: SignInDto) {
    return this.authService.signIn(authUser)
  }

  @SkipJwtAuth()
  @ApiCreatedResponse({ description: AuthMessages.SIGN_UP_SUCCESSFULLY, type: SignUpResDto })
  @ApiConflictResponse({ description: AuthMessages.EMAIL_EXISTS })
  @Post('sign-up')
  signUp(@Body() signUpDto: SignUpDto) {
    return this.authService.signUp(signUpDto)
  }

  @ApiOkResponse({ description: AuthMessages.GET_PROFILE_SUCCESSFULLY, type: ProfileUserDto })
  @Get('get-profile')
  getProfile(@AuthUser() authUser: AuthUserDto) {
    return this.authService.getProfile(authUser)
  }

  @ApiOkResponse({ status: 200, description: AuthMessages.UPDATE_PROFILE_SUCCESSFULLY, type: ProfileUserDto })
  @ApiConflictResponse({ description: AuthMessages.EMAIL_EXISTS })
  @Patch('update-profile')
  updateProfile(@AuthUser() authUser: AuthUserDto, @Body() profileUserDto: ProfileUserDto) {
    return this.authService.updateProfile(authUser, profileUserDto)
  }
}
