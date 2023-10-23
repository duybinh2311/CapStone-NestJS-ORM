import { Controller, HttpCode, Post, UseGuards } from '@nestjs/common'
import { AuthGuard } from '@nestjs/passport'
import { ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger'
import { GetUser } from 'src/app.decorator'
import { AuthService } from './auth.service'
import { AuthMessage, PayloadUser } from './interface'

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(AuthGuard('local'))
  @ApiBody({
    schema: {
      properties: {
        email: {
          type: 'string',
        },
        password: {
          type: 'string',
        },
      },
    },
  })
  @ApiResponse({ status: 200, description: AuthMessage.LOGIN_SUCCESSFULLY })
  @ApiResponse({ status: 401, description: AuthMessage.PASSWORD_INCORRECT })
  @ApiResponse({ status: 404, description: AuthMessage.EMAIL_INCORRECT })
  @HttpCode(200)
  @Post('login')
  signIn(@GetUser() user: PayloadUser) {
    return this.authService.signIn(user)
  }
}
