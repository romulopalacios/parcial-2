import { CreatePedidoDto, UpdatePedidoDto } from "../dtos";
import { PedidoEntity } from '../entities/pedido.entity';

export abstract class PedidoRepository {
  abstract create(createPedidoDto: CreatePedidoDto): Promise<PedidoEntity>;
  abstract getAll(): Promise<PedidoEntity[]>;
  abstract findById(id: number): Promise<PedidoEntity>;
  abstract updateById(updatePedidoDto: UpdatePedidoDto): Promise<PedidoEntity>;
  abstract deleteById(id: number): Promise<PedidoEntity>;
}
