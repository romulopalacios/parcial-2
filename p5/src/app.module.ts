import { Module } from '@nestjs/common';
import { UsuarioModule } from './usuario/usuario.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [UsuarioModule,

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
