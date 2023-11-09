import { Controller, Get } from '@nestjs/common'
import { ApiOperation, ApiTags } from '@nestjs/swagger'
import { AppService } from './app.service'
import { SkipJwtAuth } from './auth/decorators/skip-jwt.decorator'

@ApiTags('App')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @SkipJwtAuth()
  @ApiOperation({ summary: 'Ping server' })
  @Get('ping')
  ping(): { success: boolean; message: string } {
    return this.appService.ping()
  }
}
