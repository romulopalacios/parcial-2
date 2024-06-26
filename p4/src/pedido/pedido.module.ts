import { Module } from '@nestjs/common';
import { PedidosService } from './pedido.service';
import { PedidosResolver } from './pedido.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pedido } from './entities/pedido.entity';

@Module({
  providers: [PedidosResolver, PedidosService],
  imports: [TypeOrmModule.forFeature([Pedido])],
  exports:  [TypeOrmModule]
})
export class PedidoModule {}
