import { Module } from '@nestjs/common';
import { PedidoService } from './pedido.service';
import { PedidoGateway } from './pedido.gateway';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PedidoEntity } from './entities/pedido.entity';

@Module({
  providers: [PedidoGateway, PedidoService],
  imports: [ TypeOrmModule.forFeature([PedidoEntity]) ],
  exports: [ TypeOrmModule ]
})
export class PedidoModule {}
