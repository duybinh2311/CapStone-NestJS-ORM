import { Body, Controller, Delete, Get, Param, Patch, Post, Query, UseGuards } from '@nestjs/common'
import { ApiCreatedResponse, ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger'
import { AuthUser } from 'src/auth/decorators/auth-user.decorator'
import { AuthUserDto } from 'src/auth/dto/auth-user.dto'
import { AuthorGuard } from '../auth/guards/author.guard'
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

  @ApiOperation({ summary: PinMessages.CREATE_SUMMARY })
  @ApiCreatedResponse({ description: PinMessages.CREATE_SUCCESS, type: PinEntity })
  @Post()
  create(@Body() dto: CreatePinDto, @AuthUser() authUser: AuthUserDto) {
    return this.pinService.create(dto, authUser)
  }

  @ApiOperation({ summary: PinMessages.GET_ALL_SUMMARY })
  @ApiOkResponse({ description: PinMessages.GET_ALL_SUCCESS, type: [PinEntity] })
  @Get()
  getAll(@Query() query: PinQuery) {
    return this.pinService.getAll(query)
  }

  @ApiOperation({ summary: PinMessages.GET_PAGINATION_SUMMARY })
  @ApiOkResponse({ description: PinMessages.GET_PAGINATION_SUCCESS, type: [PinEntity] })
  @Get('pagination')
  getPagination(@Query() query: PinPaginationQueryDto) {
    return this.pinService.getPagination(query)
  }

  @ApiOperation({ summary: PinMessages.GET_ID_SUMMARY })
  @ApiOkResponse({ description: PinMessages.GET_ID_SUCCESS, type: PinEntity })
  @Get(':id')
  getById(@Param('id') id: string) {
    return this.pinService.getById(+id)
  }

  @UseGuards(AuthorGuard)
  @ApiOperation({ summary: PinMessages.UPDATE_SUMMARY })
  @ApiOkResponse({ description: PinMessages.UPDATE_SUCCESS, type: PinEntity })
  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdatePinDto) {
    return this.pinService.update(+id, dto)
  }

  @UseGuards(AuthorGuard)
  @ApiOperation({ summary: PinMessages.DELETE_SUMMARY })
  @ApiOkResponse({ description: PinMessages.DELETE_SUCCESS })
  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.pinService.delete(+id)
  }
}
