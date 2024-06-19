import { Injectable } from '@nestjs/common';
import { CreatePedidoDto } from './dto/create-pedido.dto';
import { UpdatePedidoDto } from './dto/update-pedido.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Pedido } from './entities/pedido.entity';


@Injectable()
export class PedidoService {
  constructor(
    @InjectRepository(Pedido)
    private readonly pedidoRepository: Repository<Pedido>
  ){

  }

  async create(createPedidoDto: CreatePedidoDto) {
    const pedido = this.pedidoRepository.create({
      ...createPedidoDto,
      platos: { id: createPedidoDto.idPlato },
      mesero: { id: createPedidoDto.idMesero }
    });
    await this.pedidoRepository.save(pedido);
    return pedido;
  }

  async findAll() {
    return await this.pedidoRepository.find();
  }

  async findOne(id: string) {
    return await this.pedidoRepository.findOneBy({id});
  }

  async update(id: string, updatePedidoDto: UpdatePedidoDto) {
    const updated = await this.pedidoRepository.update(id, updatePedidoDto);
    return updated.affected > 0 ? this.pedidoRepository.findOneBy({id}) : null;
  }

  async remove(id: string) {
    const pedido = await this.pedidoRepository.findOne({ where: { id } });
    if (pedido) {
      pedido.estado = 'inactivo';
      return this.pedidoRepository.save(pedido);
    }
    return null;
  }
}