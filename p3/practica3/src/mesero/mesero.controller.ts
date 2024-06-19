import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MeseroService } from './mesero.service';
import { CreateMeseroDto } from './dto/create-mesero.dto';
import { UpdateMeseroDto } from './dto/update-mesero.dto';

@Controller('mesero')
export class MeseroController {
  constructor(private readonly meseroService: MeseroService) {}

  @Post()
  create(@Body() createMeseroDto: CreateMeseroDto) {
    return this.meseroService.create(createMeseroDto);
  }

  @Get()
  findAll() {
    return this.meseroService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.meseroService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMeseroDto: UpdateMeseroDto) {
    return this.meseroService.update(id, updateMeseroDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.meseroService.remove(id);
  }
}
