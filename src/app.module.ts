import { Module } from '@nestjs/common';
import { CatsModule } from './cats/cats.module';
import { Cats2Controller } from './cats2/cats2.controller';

@Module({
  // imports: [],
  // controllers: [AppController],
  // providers: [AppService],

  imports: [CatsModule],
  controllers: [Cats2Controller],
})
export class AppModule {}
