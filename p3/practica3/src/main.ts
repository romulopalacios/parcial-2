import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors()
  app.setGlobalPrefix('api');//esto es para que todas las rutas tengan el prefijo api
  app.useGlobalPipes(new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
    }
  ));//esto es para que valide los datos que se envian

  await app.listen(3000);
}
bootstrap();
