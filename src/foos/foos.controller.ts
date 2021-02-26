import { Controller, Get, Param } from '@nestjs/common';
import { FoosService } from './foos.service';

@Controller('foos')
export class FoosController {
  constructor(private readonly foosService: FoosService) {}

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.foosService.findOne(+id);
  }
}
