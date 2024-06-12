import { prisma } from '../../data/postgres';
import { CreatePedidoDto, PedidoDatasource, PedidoEntity, UpdatePedidoDto } from '../../domain';

export class PedidoDatasourceImpl implements PedidoDatasource {

    async create(createPedidoDto: CreatePedidoDto): Promise<PedidoEntity> {
        const pedido = await prisma.pedido.create({
            data: createPedidoDto
        });

        return PedidoEntity.fromObject(pedido);
    }

    async getAll(): Promise<PedidoEntity[]> {
        const pedidos = await prisma.pedido.findMany();
        return pedidos.map(pedido => PedidoEntity.fromObject(pedido));
    }

    async findById(id: number): Promise<PedidoEntity> {
        const pedido = await prisma.pedido.findFirst({
            where: { id }
        });

        if (!pedido) throw `Pedido with id ${id} not found`;
        return PedidoEntity.fromObject(pedido);
    }

    async updateById(updatePedidoDto: UpdatePedidoDto): Promise<PedidoEntity> {
        await this.findById(updatePedidoDto.id);

        const updatedPedido = await prisma.pedido.update({
            where: { id: updatePedidoDto.id },
            data: updatePedidoDto
        });

        return PedidoEntity.fromObject(updatedPedido);
    }

    async deleteById(id: number): Promise<PedidoEntity> {
        await this.findById(id);
        const deleted = await prisma.pedido.delete({
            where: { id }
        });

        return PedidoEntity.fromObject(deleted);
    }
}
