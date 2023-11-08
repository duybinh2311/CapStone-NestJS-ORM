import { Body, Controller, Delete, Get, Param, Patch, Post, Query, UseGuards, Type } from '@nestjs/common'
import { ApiResponse, ApiTags } from '@nestjs/swagger'
import { AuthUser } from 'src/auth/decorators/auth-user.decorator'
import { AuthUserDto } from 'src/auth/dto/auth-user.dto'
import { AuthorPinGuard } from '../auth/guards/author.guard'
import { CreatePinDto } from './dto/create-pin.dto'
import { PinPaginationQueryDto, PinQuery } from './dto/pin-query.dto'
import { UpdatePinDto } from './dto/update-pin.dto'
import { PinEntity } from './entities/pin.entity'
import { PinService } from './pin.service'
import { PinMessages } from './types/pin.messages'

@ApiTags('Pin')
@Controller('pin')
export class PinController {
  constructor(private readonly pinService: PinService) {}

  @ApiResponse({ status: 201, description: PinMessages.CREATE_SUCCESS, type: PinEntity })
  @Post('create')
  create(@Body() createPinDto: CreatePinDto, @AuthUser() authUser: AuthUserDto) {
    return this.pinService.create(createPinDto, authUser)
  }

  @ApiResponse({ status: 200, description: PinMessages.GET_SUCCESS, type: [PinEntity] })
  @Get('get-all')
  getAll(@Query() query: PinQuery) {
    return this.pinService.getAll(query)
  }

  @ApiResponse({ status: 200, description: PinMessages.GET_SUCCESS, type: [PinEntity] })
  @Get('get-pagination')
  getPagination(@Query() query: PinPaginationQueryDto) {
    return this.pinService.getPagination(query)
  }

  @ApiResponse({ status: 200, description: PinMessages.GET_SUCCESS, type: PinEntity })
  @Get('get-by-id/:id')
  getById(@Param('id') id: string) {
    return this.pinService.getById(+id)
  }

  @UseGuards(AuthorPinGuard)
  @ApiResponse({ status: 200, description: PinMessages.UPDATE_SUCCESS, type: PinEntity })
  @ApiResponse({ status: 404, description: PinMessages.NOT_FOUND })
  @Patch('update/:id')
  update(@Param('id') id: string, @Body() updatePinDto: UpdatePinDto) {
    return this.pinService.update(+id, updatePinDto)
  }

  @UseGuards(AuthorPinGuard)
  @ApiResponse({ status: 200, description: PinMessages.DELETED_SUCCESS })
  @ApiResponse({ status: 404, description: PinMessages.NOT_FOUND })
  @Delete('delete/:id')
  delete(@Param('id') id: string) {
    return this.pinService.delete(+id)
  }
}
