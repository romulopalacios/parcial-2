import { Module } from '@nestjs/common';
import { PlatosService } from './plato.service';
import { PlatosResolver } from './plato.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Plato } from './entities/plato.entity';

@Module({
  providers: [PlatosResolver, PlatosService],
  imports: [TypeOrmModule.forFeature([Plato])],
  exports:  [TypeOrmModule]
})
export class PlatoModule {}
