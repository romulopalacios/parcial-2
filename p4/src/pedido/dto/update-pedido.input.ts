import { InputType, Field, ID, PartialType } from '@nestjs/graphql';
import { IsInt } from 'class-validator';
import { CreatePedidoInput } from './create-pedido.input';

@InputType()
export class UpdatePedidoInput extends PartialType(CreatePedidoInput) {

  @Field(() => ID)
  @IsInt()
  id: number;
}
