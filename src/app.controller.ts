import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiOperation } from '@nestjs/swagger';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @ApiOperation({ summary: '你好', description: '欢迎使用Nest.js' })
  hello() {
    return 'Hello Nest.js';
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
