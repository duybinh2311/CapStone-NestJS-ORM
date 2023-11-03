import { Body, Controller, Get, HttpCode, Post, UseGuards } from '@nestjs/common'
import { ApiResponse, ApiTags } from '@nestjs/swagger'
import { AuthService } from './auth.service'
import { AuthMessage } from './auth.types'
import { AuthUser } from './decorators/auth-user.decorator'
import { SkipJwtAuth } from './decorators/skip-jwt.decorator'
import { AuthUserDto } from './dto/auth-user.dto'
import { SignInDto } from './dto/sign-in.dto'
import { SignUpDto } from './dto/sign-up.dto'
import { LocalAuthGuard } from './guards/local.guard'

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @SkipJwtAuth()
  @UseGuards(LocalAuthGuard)
  @ApiResponse({ status: 200, description: AuthMessage.LOGIN_SUCCESSFULLY })
  @ApiResponse({ status: 401, description: AuthMessage.PASSWORD_INCORRECT })
  @ApiResponse({ status: 404, description: AuthMessage.EMAIL_NOT_FOUND })
  @HttpCode(200)
  @Post('sign-in')
  signIn(@AuthUser() authUser: AuthUserDto, @Body() _: SignInDto) {
    return this.authService.signIn(authUser)
  }

  @SkipJwtAuth()
  @ApiResponse({ status: 201, description: AuthMessage.SIGN_UP_SUCCESSFULLY })
  @ApiResponse({ status: 409, description: AuthMessage.EMAIL_EXISTED })
  @Post('sign-up')
  signUp(@Body() signUpDto: SignUpDto) {
    return this.authService.signUp(signUpDto)
  }

  @ApiResponse({ status: 200, description: AuthMessage.GET_PROFILE_SUCCESSFULLY })
  @ApiResponse({ status: 401, description: AuthMessage.TOKEN_INVALID })
  @Get('profile')
  getProfile(@AuthUser() authUser: AuthUserDto) {
    return this.authService.getProfile(authUser)
  }
}
