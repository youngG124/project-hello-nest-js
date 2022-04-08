import { Controller, Get, Post, Req } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return 'this.appService.getHello()';
  }

  @Get()
  findAll(): string {
      return 'This action returns all cats';
  }

  @Post()
  create(): string {
    return 'This action adds a new cat';
  }
}
