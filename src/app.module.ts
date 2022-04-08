import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsService } from './cats/cat.service';
import { CatsController } from './cats/cats.controller';

@Module({
  // imports: [],
  // controllers: [AppController],
  // providers: [AppService],

  controllers: [CatsController],
  providers: [CatsService],
})
export class AppModule {}
