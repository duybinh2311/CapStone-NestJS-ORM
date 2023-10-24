import { Body, Controller, Get, HttpCode, Post, UseGuards } from '@nestjs/common'
import { ApiResponse, ApiTags } from '@nestjs/swagger'
import { AuthUser, SkipJwtAuth } from 'src/app.decorators'
import { AuthService } from './auth.service'
import { SignInDto } from './dto/sign-in.dto'
import { AuthMessage } from './auth.types'
import { AuthUserDto } from './dto/auth-user'
import { LocalAuthGuard } from './guards/local.guard'
import { JwtAuthGuard } from './guards/jwt.guard'

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @SkipJwtAuth()
  @ApiResponse({ status: 200, description: AuthMessage.LOGIN_SUCCESSFULLY })
  @ApiResponse({ status: 401, description: AuthMessage.PASSWORD_INCORRECT })
  @ApiResponse({ status: 404, description: AuthMessage.EMAIL_INCORRECT })
  @HttpCode(200)
  @Post('login')
  signIn(@AuthUser() authUser: AuthUserDto, @Body() _: SignInDto) {
    return this.authService.signIn(authUser)
  }

  @UseGuards(JwtAuthGuard)
  @ApiResponse({ status: 200, description: AuthMessage.GET_PROFILE_SUCCESSFULLY })
  @ApiResponse({ status: 401, description: AuthMessage.UNAUTHORIZED })
  @Get('profile')
  getProfile(@AuthUser() authUser: AuthUserDto) {
    return authUser
  }
}
