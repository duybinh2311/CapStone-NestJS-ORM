import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'
import { CreatePinDto } from './dto/create-pin.dto'
import { UpdatePinDto } from './dto/update-pin.dto'
import { PinService } from './pin.service'

@ApiTags('Pin')
@Controller('pin')
export class PinController {
  constructor(private readonly pinService: PinService) {}

  @Post('create')
  create(@Body() createPinDto: CreatePinDto) {
    return this.pinService.create(createPinDto)
  }

  @Get()
  findAll() {
    return this.pinService.findAll()
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pinService.findOne(+id)
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePinDto: UpdatePinDto) {
    return this.pinService.update(+id, updatePinDto)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pinService.remove(+id)
  }
}
