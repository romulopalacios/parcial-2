import { ObjectType, Field, Int, ID, Float } from '@nestjs/graphql';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Pedido } from 'src/pedido/entities/pedido.entity';

@ObjectType()
@Entity({ name: 'meseros' })
export class Mesero {

  @PrimaryGeneratedColumn()
  @Field(() => ID)
  id: number;

  @Column({ nullable: true })
  @Field(() => String, { nullable: true })
  nombre?: string;

  @Column('float')
  @Field(() => Float)
  sueldo_basico: number;

  @Column('int')
  @Field(() => Int)
  nivel: number;

  @Column({ default: 'Activo' })
  @Field(() => String)
  estado: string;

  @OneToMany(
    () => Pedido,
    (pedido) => pedido.mesero,
    { cascade: true }
  )
  @Field(() => [Pedido], { nullable: true })
  pedidos?: Pedido[];
}
