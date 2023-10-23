import { Body, Controller, HttpCode, Post, UseGuards } from '@nestjs/common'
import { AuthGuard } from '@nestjs/passport'
import { ApiResponse, ApiTags } from '@nestjs/swagger'
import { User } from '@prisma/client'
import { GetUser } from 'src/app.decorator'
import { AuthService } from './auth.service'
import { SignInDto } from './dto/sign-in.dto'
import { AuthMessage } from './types/interface'

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
  signIn(@GetUser() user: User, @Body() _: SignInDto) {
    return this.authService.signIn(user)
  }
}
