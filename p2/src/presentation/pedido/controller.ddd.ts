import { Request, Response } from 'express';
//import { prisma } from '../../data/postgres';
import { CreatePedidoDto, UpdatePedidoDto } from '../../domain/dtos';
import { PedidoRepository } from '../../domain';

export class PedidoController {

  constructor(
    private readonly PedidoRepository: PedidoRepository,
  ) { }

  public getPedido = async (req: Request, res: Response) => {
    const pedidos = await this.PedidoRepository.getAll();
    return res.json(pedidos);
  };

  public getPedidoById = async (req: Request, res: Response) => {
    const id = +req.params.id;

    try {
      const pedido = await this.PedidoRepository.findById(id);
      res.json(pedido);
    } catch (error) {
      res.status(400).json({ error });
    }
  };

  public createPedido = async (req: Request, res: Response) => {
    const [error, createPedidoDto] = CreatePedidoDto.create(req.body);
    if (error) return res.status(400).json({ error });

    const pedido = await this.PedidoRepository.create(createPedidoDto!);
    res.json(pedido);
  };

  public updatePedido = async (req: Request, res: Response) => {
    const id = +req.params.id;
    const [error, updatePedidoDto] = UpdatePedidoDto.create({ ...req.body, id });
    if (error) return res.status(400).json({ error });

    const updatedPedido = await this.PedidoRepository.updateById(updatePedidoDto!);
    return res.json(updatedPedido);
  };

  public deletePedido = async (req: Request, res: Response) => {
    const id = +req.params.id;
    const deletedPedido = await this.PedidoRepository.deleteById(id);
    res.json(deletedPedido);
  };
}
