import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Pedido } from 'src/pedido/entities/pedido.entity';

@ObjectType()
@Entity({ name: 'platos' })
export class Plato {

  @PrimaryGeneratedColumn()
  @Field(() => ID)
  id: number;

  @Column({ nullable: true })
  @Field(() => String, { nullable: true })
  nombre?: string;

  @Column({ default: 'Activo' })
  @Field(() => String)
  estado: string;

  @OneToMany(
    () => Pedido,
    (pedido) => pedido.plato,
    { cascade: true }
  )
  @Field(() => [Pedido], { nullable: true })
  pedidos?: Pedido[];
}
