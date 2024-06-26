import { InputType, Field, Int } from '@nestjs/graphql';
import { IsInt, IsString } from 'class-validator';

@InputType()
export class CreatePedidoInput {
  
  @Field(() => Int)
  @IsInt()
  platoId: number;

  @Field(() => Int)
  @IsInt()
  meseroId: number;

  @Field(() => String)
  @IsString()
  fecha: string;

  @Field(() => Int)
  @IsInt()
  mesa: number;

  @Field(() => Int)
  @IsInt()
  cantidad: number;

  @Field(() => Int)
  @IsInt()
  precio: number;

  @Field(() => String, { nullable: true })
  @IsString()
  estado: string="activo";
}

