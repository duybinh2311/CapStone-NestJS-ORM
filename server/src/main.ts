import * as express from 'express'

import { Logger, ValidationPipe } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'

import { AppModule } from './app.module'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  app.enableCors({ origin: '*' })
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }))
  app.use(express.static('assets/images'))

  const config = new DocumentBuilder()
    .setTitle('Pinterest Server')
    .setDescription('The Pinterest Server APIs description')
    .setVersion('1.0.0')
    .addBearerAuth()
    .addSecurityRequirements('bearer')
    .build()

  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('docs', app, document, {
    customSiteTitle: 'Pinterest Server API Docs',
    swaggerOptions: {
      tagsSorter: 'alpha',
    },
  })

  const port = process.env.PORT || 4000
  await app.listen(port)

  Logger.verbose(`Environment: ${process.env.NODE_ENV}`)
  Logger.verbose(`Server running on http://localhost:${port}`)
  Logger.verbose(`Swagger running on http://localhost:${port}/docs`)
}
bootstrap()
