import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { CatsModule } from './cats/cats.module';

async function bootstrap() {
  const app = await NestFactory.create(CatsModule);
  await app.listen(3000);
}
bootstrap();
