import { Module } from '@nestjs/common';
import { CatsModule } from './cats/cats.module';

@Module({
  // imports: [],
  // controllers: [AppController],
  // providers: [AppService],

  imports: [CatsModule],
})
export class AppModule {}
