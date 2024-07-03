import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import  { PedidoModule } from './pedido/pedido.module';
@Module({
  imports: [PedidoModule,

    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '1234',
      database: 'p5',
      entities: [],
      synchronize: true,
      autoLoadEntities: true,
    }),

  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
