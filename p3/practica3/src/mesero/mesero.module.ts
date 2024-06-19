import { Module } from '@nestjs/common';
import { MeseroService } from './mesero.service';
import { MeseroController } from './mesero.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Mesero } from './entities/mesero.entity';

@Module({
  controllers: [MeseroController],
  providers: [MeseroService],

  imports: [TypeOrmModule.forFeature([Mesero])],//esto es para que cargue las entidades automaticamente
  exports: [TypeOrmModule],
})
export class MeseroModule {}
