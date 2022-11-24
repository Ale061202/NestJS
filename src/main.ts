import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configuration = new DocumentBuilder()
    .setTitle('NestMovies')
    .setDescription('App para gestionar peliculas con NestJs')
    .setVersion('1.0')
    .build();
  const documentation = SwaggerModule.createDocument(app,configuration) 
  SwaggerModule.setup('api', app, documentation);
  await app.listen(3000);
}
bootstrap();
