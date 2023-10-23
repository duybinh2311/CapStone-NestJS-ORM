import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import { Logger, ValidationPipe } from '@nestjs/common'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  app.enableCors({ origin: '*' })

  app.useGlobalPipes(new ValidationPipe({}))

  const config = new DocumentBuilder()
    .setTitle('Pinterest Server')
    .setDescription('The Pinterest Server APIs description')
    .setVersion('1.0')
    .build()

  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('docs', app, document, {
    customSiteTitle: 'Pinterest Server APIs Docs',
    swaggerOptions: {
      tagsSorter: 'alpha',
    },
  })

  await app.listen(process.env.PORT)

  Logger.log(`Server running on http://localhost:${process.env.PORT}`)
  Logger.log(`Swagger running on http://localhost:${process.env.PORT}/docs`)
}
bootstrap()
