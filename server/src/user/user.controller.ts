import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common'
import { ApiResponse, ApiTags } from '@nestjs/swagger'
import { CreateUserDto } from './dto/create-user.dto'
import { UserMessage } from './user.types'
import { UserService } from './user.service'
import { SkipJwtAuth } from 'src/auth/decorators/skip-jwt.decorator'

@ApiTags('User')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @SkipJwtAuth()
  @ApiResponse({ status: 201, description: UserMessage.CREATE_USER_SUCCESSFULLY })
  @ApiResponse({ status: 409, description: UserMessage.EMAIL_EXIST })
  @Post('create')
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto)
  }
}
