import { Controller, Post, UseGuards, Body, HttpCode } from '@nestjs/common'
import { AuthGuard } from '@nestjs/passport'
import { ApiResponse, ApiTags } from '@nestjs/swagger'
import { AuthService } from './auth.service'
import { SignInDto } from './dto/sign-in.dto'
import { AuthMessage } from './interface'

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(AuthGuard('local'))
  @ApiResponse({ status: 200, description: AuthMessage.LOGIN_SUCCESSFULLY })
  @ApiResponse({ status: 401, description: AuthMessage.PASSWORD_INCORRECT })
  @ApiResponse({ status: 404, description: AuthMessage.EMAIL_INCORRECT })
  @HttpCode(200)
  @Post('login')
  signIn(@Body() signInDto: SignInDto) {
    return this.authService.signIn(signInDto)
  }
}
