import { Module } from '@nestjs/common';
import { MeserosService } from './mesero.service';
import { MeserosResolver } from './mesero.resolver';
import { Mesero } from './entities/mesero.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  providers: [MeserosResolver, MeserosService,],
  imports: [TypeOrmModule.forFeature([Mesero])],
  exports:  [TypeOrmModule]
})
export class MeseroModule {}
