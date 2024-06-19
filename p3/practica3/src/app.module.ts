import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PlatoModule } from './plato/plato.module';
import { PedidoModule } from './pedido/pedido.module';
import { MeseroModule } from './mesero/mesero.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [PlatoModule, PedidoModule, MeseroModule,

    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '1234',
      database: 'web',
      entities: [],
      synchronize: true,
      autoLoadEntities: true, //esto es para que cargue las entidades automaticamente
    }),

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
