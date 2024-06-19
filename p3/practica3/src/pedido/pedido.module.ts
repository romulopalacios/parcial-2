import { Module } from '@nestjs/common';
import { PedidoService } from './pedido.service';
import { PedidoController } from './pedido.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pedido } from './entities/pedido.entity';

@Module({
  controllers: [PedidoController],
  providers: [PedidoService],

  imports: [TypeOrmModule.forFeature([Pedido])],
  exports: [TypeOrmModule]
})
export class PedidoModule {}
