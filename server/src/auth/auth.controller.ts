import { Body, Controller, HttpCode, Post, UseGuards } from '@nestjs/common'
import { ApiCreatedResponse, ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger'
import { AuthService } from './auth.service'
import { AuthUser } from './decorators/auth-user.decorator'
import { SkipJwtAuth } from './decorators/skip-jwt.decorator'
import { AuthUserDto } from './dto/auth-user.dto'
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
  @ApiOperation({ summary: AuthMessages.SIGN_IN_SUMMARY })
  @ApiOkResponse({ description: AuthMessages.SIGN_IN_SUCCESS, type: SignInResDto })
  @HttpCode(200)
  @Post('sign-in')
  signIn(@AuthUser() authUser: AuthUserDto, @Body() _: SignInDto) {
    return this.authService.signIn(authUser)
  }

  @SkipJwtAuth()
  @ApiOperation({ summary: AuthMessages.SIGN_UP_SUMMARY })
  @ApiCreatedResponse({ description: AuthMessages.SIGN_UP_SUCCESS, type: SignUpResDto })
  @Post('sign-up')
  signUp(@Body() signUpDto: SignUpDto) {
    return this.authService.signUp(signUpDto)
  }
}
