import { Body, Controller, Get, HttpCode, Patch, Post, UseGuards } from '@nestjs/common'
import { ApiConflictResponse, ApiResponse, ApiTags } from '@nestjs/swagger'
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
  @ApiResponse({ status: 200, description: AuthMessages.SIGN_IN_SUCCESS, type: SignInResDto })
  @ApiResponse({ status: 401, description: AuthMessages.PASSWORD_INCORRECT })
  @ApiResponse({ status: 404, description: AuthMessages.EMAIL_NOT_FOUND })
  @HttpCode(200)
  @Post('sign-in')
  signIn(@AuthUser() authUser: AuthUserDto, @Body() _: SignInDto) {
    return this.authService.signIn(authUser)
  }

  @SkipJwtAuth()
  @ApiResponse({ status: 201, description: AuthMessages.SIGN_UP_SUCCESS, type: SignUpResDto })
  @ApiResponse({ status: 409, description: AuthMessages.EMAIL_EXISTS })
  @Post('sign-up')
  signUp(@Body() signUpDto: SignUpDto) {
    return this.authService.signUp(signUpDto)
  }

  @ApiResponse({ status: 200, description: AuthMessages.GET_PROFILE_SUCCESS, type: ProfileUserDto })
  @Get('get-profile')
  getProfile(@AuthUser() authUser: AuthUserDto) {
    return this.authService.getProfile(authUser)
  }

  @ApiResponse({ status: 200, description: AuthMessages.UPDATE_PROFILE_SUCCESS, type: ProfileUserDto })
  @ApiConflictResponse({ description: AuthMessages.EMAIL_EXISTS })
  @Patch('update-profile')
  updateProfile(@AuthUser() authUser: AuthUserDto, @Body() profileUserDto: ProfileUserDto) {
    return this.authService.updateProfile(authUser, profileUserDto)
  }
}
