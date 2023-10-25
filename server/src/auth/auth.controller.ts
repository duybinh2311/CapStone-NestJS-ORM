import { Body, Controller, Get, HttpCode, Post, UseGuards } from '@nestjs/common'
import { ApiResponse, ApiTags } from '@nestjs/swagger'
import { AuthService } from './auth.service'
import { AuthMessage } from './auth.types'
import { AuthUserDto } from './dto/auth-user'
import { SignInDto } from './dto/sign-in.dto'
import { JwtAuthGuard } from './guards/jwt.guard'
import { LocalAuthGuard } from './guards/local.guard'
import { AuthUser } from './decorators/auth-user.decorator'
import { SkipJwtAuth } from './decorators/skip-jwt.decorator'

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
