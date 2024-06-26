import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePedidoInput } from './dto/create-pedido.input';
import { UpdatePedidoInput } from './dto/update-pedido.input';
import { Repository } from 'typeorm';
import { Pedido } from './entities/pedido.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class PedidosService {
  constructor(
    @InjectRepository(Pedido)
    private readonly pedidoRepository: Repository<Pedido>,
  ) {}

  async create(createPedidoInput: CreatePedidoInput): Promise<Pedido> {
    const newPedido = this.pedidoRepository.create(createPedidoInput);
    return await this.pedidoRepository.save(newPedido);
  }

  async findAll(estado: string): Promise<Pedido[]> {
    if (estado === 'activo' || estado === 'inactivo') {
      return this.pedidoRepository.find({ where: { estado } });
    }
    return await this.pedidoRepository.find();
  }

  async findOne(id: number): Promise<Pedido> {
    const pedido = await this.pedidoRepository.findOne({
      where: { id },
      relations: ['plato', 'mesero'],
    });
    if (!pedido) throw new NotFoundException('Pedido not found');
    return pedido;
  }

  async update(id: number, updatePedidoInput: UpdatePedidoInput): Promise<Pedido> {
    const pedido = await this.pedidoRepository.preload({
      id: id,
      ...updatePedidoInput,
    });

    if (!pedido) throw new NotFoundException(`Pedido with id: ${id} not found`);
    return this.pedidoRepository.save(pedido);
  }

  async remove(id: number): Promise<Pedido> {
    const pedido = await this.pedidoRepository.findOne({ where: { id } });
    if (pedido) {
      pedido.estado = 'inactivo';
      return this.pedidoRepository.save(pedido);
    }
    return null;
  }
}

