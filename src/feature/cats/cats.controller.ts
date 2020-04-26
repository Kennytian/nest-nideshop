import { Body, Controller, Get, Post, Query, UseFilters, UseGuards } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { HttpExceptionFilter } from '../../core/httpexception.filter';
import { RolesGuard } from '../../core/roles.guard';
import { CatEntity, CatUpdateInput } from './cat.entity';
import { BaseResp } from './base.entity';
import { CatsService } from './cats.service';

@Controller('')
@ApiTags('猫儿 接口')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Get()
  @ApiOperation({ summary: '打个招呼', description: '打招呼的描述' })
  hello() {
    return this.catsService.hello();
  }

  @Post('cat/save')
  @ApiOperation({
    summary: '创建一条猫儿的记录',
    description: '猫儿的记录的描述',
  })
  async save(@Body() input: CatEntity): Promise<BaseResp> {
    return this.catsService.save(input);
  }

  @Get('cat')
  @ApiOperation({
    summary: '查询指定 ID 的猫儿记录',
    description: '指定 ID 猫儿记录的描述',
  })
  findOne(@Query('id') id: string): Promise<BaseResp> {
    return this.catsService.findOne(id);
  }

  @Get('cat/delete')
  @ApiOperation({
    summary: '删除指定 ID 的猫儿记录',
    description: '删除 ID 猫儿记录的描述',
  })
  deleteOne(@Query('id') id: string): Promise<BaseResp> {
    return this.catsService.deleteOne(id);
  }

  @Post('cat/update')
  @ApiOperation({
    summary: '更新指定 ID 的猫儿记录',
    description: '更新 ID 猫儿记录的描述',
  })
  @UseFilters(new HttpExceptionFilter())
  updateOne(@Body() input: CatUpdateInput): Promise<BaseResp> {
    return this.catsService.updateOne(input);
  }

  @Get('cats')
  @ApiOperation({
    summary: '查询所有猫儿的记录',
    description: '所有猫儿记录的描述',
  })
  @UseGuards(RolesGuard)
  findAll(): Promise<BaseResp> {
    return this.catsService.findAll();
  }
}
