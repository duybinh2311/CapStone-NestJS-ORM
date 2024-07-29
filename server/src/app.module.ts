import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { APP_GUARD } from '@nestjs/core'

import { PrismaModule } from 'nestjs-prisma'

import { AppController } from './app.controller'
import { AppService } from './app.service'
import { AuthModule } from './auth/auth.module'
import { JwtAuthGuard } from './auth/guards/jwt.guard'
import { CloudinaryModule } from './cloudinary/cloudinary.module'
import { CommentModule } from './comment/comment.module'
import { FileModule } from './file/file.module'
import { PinModule } from './pin/pin.module'
import { UserModule } from './user/user.module'

@Module({
  imports: [
    PrismaModule.forRoot({
      isGlobal: true,
      prismaServiceOptions: {
        prismaOptions: {
          errorFormat: 'minimal',
        },
      },
    }),
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: [`.env.${process.env.NODE_ENV}`],
    }),
    UserModule,
    AuthModule,
    PinModule,
    FileModule,
    CommentModule,
    CloudinaryModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
  ],
})
export class AppModule {}
