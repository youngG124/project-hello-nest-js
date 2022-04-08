import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { CatsController } from './cats.controller';

@Module({
  // imports: [],
  // controllers: [AppController],
  // providers: [AppService],

  controllers: [CatsController],
})
export class AppModule {}
