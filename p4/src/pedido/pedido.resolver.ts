import { Resolver, Query, Mutation, Args, ID } from '@nestjs/graphql';
import { PedidosService } from './pedido.service';
import { Pedido } from './entities/pedido.entity';
import { CreatePedidoInput } from './dto/create-pedido.input';
import { UpdatePedidoInput } from './dto/update-pedido.input';

@Resolver(() => Pedido)
export class PedidosResolver {
  constructor(private readonly pedidosService: PedidosService) {}

  @Mutation(() => Pedido)
  createPedido(@Args('createPedidoInput') createPedidoInput: CreatePedidoInput): Promise<Pedido> {
    return this.pedidosService.create(createPedidoInput);
  }

  @Query(() => Pedido, { name: 'pedidos' })  findAll(
    @Args('estado', { type: () => String,  nullable: true }) estado: string
  ) {
    return this.pedidosService.findAll(estado);
  }

  @Query(() => Pedido, { name: 'pedido' })
  findOne(@Args('id', { type: () => ID }) id: number): Promise<Pedido> {
    return this.pedidosService.findOne(id);
  }

  @Mutation(() => Pedido)
  updatePedido(@Args('updatePedidoInput') updatePedidoInput: UpdatePedidoInput): Promise<Pedido> {
    return this.pedidosService.update(updatePedidoInput.id, updatePedidoInput);
  }

  @Mutation(() => Pedido)
  removePedido(@Args('id', { type: () => ID }) id: number): Promise<Pedido> {
    return this.pedidosService.remove(id);
  }
}
