import { Body, Controller, Delete, Get, Param, Patch, Post, Query, UseGuards } from '@nestjs/common'
import { ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger'
import { CreatePinDto } from './dto/create-pin.dto'
import { UpdatePinDto } from './dto/update-pin.dto'
import { PinService } from './pin.service'
import { AuthUser } from 'src/auth/decorators/auth-user.decorator'
import { PinMessages } from './types/pin.messages'
import { AuthUserDto } from 'src/auth/dto/auth-user.dto'
import { PinQueryDto } from './dto/pin-query.dto'
import { AuthorPinGuard } from '../auth/guards/author.guard'

@ApiTags('Pin')
@Controller('pin')
export class PinController {
  constructor(private readonly pinService: PinService) {}

  @ApiResponse({ status: 201, description: PinMessages.UPLOAD_SUCCESSFULLY })
  @Post('create')
  create(@AuthUser() authUser: AuthUserDto, @Body() createPinDto: CreatePinDto) {
    return this.pinService.create(authUser, createPinDto)
  }

  @Get('get-all')
  findAll(@Query() query: PinQueryDto) {
    return this.pinService.findAll(query)
  }

  @Get('get-by-id/:id')
  findOne(@Param('id') id: string) {
    return this.pinService.findById(+id)
  }

  @UseGuards(AuthorPinGuard)
  @ApiResponse({ status: 200, description: PinMessages.UPDATE_SUCCESSFULLY })
  @ApiResponse({ status: 404, description: PinMessages.NOT_FOUND })
  @Patch('update/:id')
  update(@Param('id') id: string, @Body() updatePinDto: UpdatePinDto) {
    return this.pinService.update(+id, updatePinDto)
  }

  @UseGuards(AuthorPinGuard)
  @ApiResponse({ status: 200, description: PinMessages.DELETED_SUCCESSFULLY })
  @ApiResponse({ status: 404, description: PinMessages.NOT_FOUND })
  @Delete('delete/:id')
  remove(@Param('id') id: string) {
    return this.pinService.remove(+id)
  }
}
