import { ObjectType, Field, Int, ID, Float } from '@nestjs/graphql';
import { Plato } from 'src/plato/entities/plato.entity';
import { Mesero } from 'src/mesero/entities/mesero.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity({ name: 'pedidos' })
export class Pedido {

  @PrimaryGeneratedColumn()
  @Field(() => ID)
  id: number;

  @ManyToOne(() => Plato, (plato) => plato.pedidos, { eager: true })
  @Field(() => Plato)
  plato: Plato;

  @ManyToOne(() => Mesero, (mesero) => mesero.pedidos, { eager: true })
  @Field(() => Mesero)
  mesero: Mesero;

  @Column()
  @Field(() => String)
  fecha: string;

  @Column('int')
  @Field(() => Int)
  mesa: number;

  @Column('int')
  @Field(() => Int)
  cantidad: number;

  @Column('float')
  @Field(() => Float)
  precio: number;

  @Column({ default: 'Activo' })
  @Field(() => String)
  estado: string;
}
