import { Router } from 'express';
import { PedidoController } from './controller.ddd';
import { PedidoDatasourceImpl } from "../../infraestructure/datasource/pedido.datasource.impl";
import { PedidoRepositoryImpl } from '../../infraestructure/repositories/pedido.repository.impl';
//import { PedidoRepository } from '../../domain';

export class PedidoRoutes {

  static get routes(): Router {

    const router = Router();

    const datasource = new PedidoDatasourceImpl();
    const pedidoRepository = new PedidoRepositoryImpl(datasource);
    const pedidoController = new PedidoController(pedidoRepository);

    router.get('/', pedidoController.getPedido);
    router.get('/:id', pedidoController.getPedidoById);
    router.post('/', pedidoController.createPedido);
    router.put('/:id', pedidoController.updatePedido);
    router.delete('/:id', pedidoController.deletePedido);

    return router;
  }
}
