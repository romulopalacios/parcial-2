import { Module } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { UsuarioGateway } from './usuario.gateway';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PedidoEntity } from './entities/usuario.entity';

@Module({
  providers: [UsuarioGateway, UsuarioService],
  imports: [ TypeOrmModule.forFeature([PedidoEntity]) ],
  exports: [ TypeOrmModule ]
})
export class UsuarioModule {}
